import { useCallback, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListingContent from "./components/ListingContent";
import PhotoTour, { Lightbox } from "./components/gallery/PhotoTour";
import AmenitiesModal from "./components/AmenitiesModal";
import ReviewsModal from "./components/ReviewsModal";
import { photos } from "./data/listing";

export type OverlayView = "photos" | "amenities" | "reviews" | null;

interface OverlayState {
  view: OverlayView;
  photo: number;
  lightbox: boolean;
}

const CLOSED: OverlayState = { view: null, photo: 0, lightbox: false };

function parseView(): OverlayState {
  const params = new URLSearchParams(window.location.search);
  const v = params.get("view");
  if (v === "photos") {
    const hasPhoto = params.has("photo");
    const photo = hasPhoto ? Number(params.get("photo")) : 0;
    return { view: "photos", photo, lightbox: hasPhoto };
  }
  if (v === "amenities") return { view: "amenities", photo: 0, lightbox: false };
  if (v === "reviews") return { view: "reviews", photo: 0, lightbox: false };
  return CLOSED;
}

function buildUrl(view: OverlayView, photo: number, lightbox: boolean) {
  const params = new URLSearchParams(window.location.search);
  if (view === "photos") {
    params.set("view", "photos");
    if (lightbox) params.set("photo", String(photo));
    else params.delete("photo");
  } else if (view) {
    params.set("view", view);
    params.delete("photo");
  } else {
    params.delete("view");
    params.delete("photo");
  }
  const qs = params.toString();
  return qs ? `${window.location.pathname}?${qs}` : window.location.pathname;
}

export default function App() {
  const [overlay, setOverlay] = useState<OverlayState>(parseView);
  const pushedEntries = useRef(0);
  const lightboxPushed = useRef(0);
  const bodyLocked = useRef(false);

  const closeOverlay = useCallback(() => {
    if (pushedEntries.current > 0) {
      pushedEntries.current -= 1;
      history.back();
    } else {
      history.replaceState(CLOSED, "", buildUrl(null, 0, false));
      setOverlay(CLOSED);
    }
  }, []);

  const openTour = useCallback(() => {
    pushedEntries.current += 1;
    history.pushState({ view: "photos", photo: 0 }, "", buildUrl("photos", 0, false));
    setOverlay({ view: "photos", photo: 0, lightbox: false });
  }, []);

  const openLightbox = useCallback(
    (index: number) => {
      pushedEntries.current += 1;
      lightboxPushed.current += 1;
      history.pushState(
        { view: "photos", photo: index }, "", buildUrl("photos", index, true));
      setOverlay({ view: "photos", photo: index, lightbox: true });
    },
    [],
  );

  const closeLightbox = useCallback(() => {
    if (lightboxPushed.current > 0) {
      lightboxPushed.current -= 1;
      pushedEntries.current -= 1;
      history.back();
    } else {
      setOverlay((s) => {
        const next = { ...s, lightbox: false };
        history.replaceState(next, "", buildUrl("photos", s.photo, false));
        return next;
      });
    }
  }, []);

  const navPhoto = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(photos.length - 1, index));
      setOverlay((s) => {
        if (s.lightbox) {
          history.replaceState(
            { view: "photos", photo: clamped }, "", buildUrl("photos", clamped, true));
        }
        return { ...s, photo: clamped };
      });
    },
    [],
  );

  const openAmenities = useCallback(() => {
    pushedEntries.current += 1;
    history.pushState({ view: "amenities" }, "", buildUrl("amenities", 0, false));
    setOverlay({ view: "amenities", photo: 0, lightbox: false });
  }, []);

  const openReviews = useCallback(() => {
    pushedEntries.current += 1;
    history.pushState({ view: "reviews" }, "", buildUrl("reviews", 0, false));
    setOverlay({ view: "reviews", photo: 0, lightbox: false });
  }, []);

  const handleReserve = useCallback(() => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    const onPop = () => {
      if (pushedEntries.current > 0) pushedEntries.current -= 1;
      if (lightboxPushed.current > 0) lightboxPushed.current -= 1;
      setOverlay(parseView());
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    // Deep link: ?scrollto=<element id> scrolls the main page to that anchor.
    const target = new URLSearchParams(window.location.search).get("scrollto");
    if (target) {
      const t = window.setTimeout(
        () => document.getElementById(target)?.scrollIntoView({ block: "start" }),
        120,
      );
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const locked = overlay.view !== null;
    if (locked && !bodyLocked.current) {
      bodyLocked.current = true;
      const scrollY = window.scrollY;
      document.body.dataset.scrollLock = String(scrollY);
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else if (!locked && bodyLocked.current) {
      bodyLocked.current = false;
      const scrollY = Number(document.body.dataset.scrollLock ?? "0");
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollY);
    }
  }, [overlay.view]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (overlay.view === "photos" && overlay.lightbox) {
          closeLightbox();
        } else if (overlay.view) {
          closeOverlay();
        }
      }
      if (overlay.view === "photos" && overlay.lightbox) {
        if (e.key === "ArrowLeft") navPhoto(overlay.photo - 1);
        if (e.key === "ArrowRight") navPhoto(overlay.photo + 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [overlay, closeLightbox, closeOverlay, navPhoto]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <ListingContent
          onOpenTour={openTour}
          onOpenAmenities={openAmenities}
          onOpenReviews={openReviews}
          onReserve={handleReserve}
        />
      </main>

      {overlay.view === "photos" && (
        <PhotoTour open onClose={closeOverlay} onOpenPhoto={openLightbox} />
      )}
      {overlay.view === "photos" && overlay.lightbox && (
        <Lightbox
          index={overlay.photo}
          onNav={navPhoto}
          onBack={closeLightbox}
          onClose={closeOverlay}
        />
      )}
      {overlay.view === "amenities" && <AmenitiesModal onClose={closeOverlay} />}
      {overlay.view === "reviews" && <ReviewsModal onClose={closeOverlay} />}

      <Footer />
    </div>
  );
}