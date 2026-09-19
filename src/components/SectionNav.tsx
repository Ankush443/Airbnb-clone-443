import { useEffect, useState } from "react";
import { listing } from "../data/listing";

const SECTIONS = [
  { id: "photos", label: "Photos" },
  { id: "amenities", label: "Amenities" },
  { id: "reviews", label: "Reviews" },
  { id: "location", label: "Location" },
];

export default function SectionNav({ onReserve }: { onReserve?: () => void }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("amenities");

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 },
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed left-0 right-0 top-0 z-[45] border-b border-line-light bg-white transition-all duration-[250ms] ${
        show ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="mx-auto flex h-[66px] max-w-[1154px] items-center justify-between px-[80px]">
        <nav className="flex gap-1" aria-label="Listing sections">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative px-2 py-[22px] text-[14px] font-medium text-ink hover:text-black ${
                active === s.id ? "after:absolute after:left-2 after:right-2 after:bottom-3 after:h-[2px] after:bg-[#222]" : ""
              }`}
            >
              {s.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <div className="text-right text-[13px] leading-[1.2]">
            <div className="text-[15px] font-medium text-ink">
              {listing.price} <span className="font-normal text-[13px]">{listing.priceNights}</span>
            </div>
            <div className="mt-0.5 flex items-center justify-end gap-1 text-[13px] text-ink">
              <span className="inline-block h-[11px] w-[11px] fill-[#222]">
                <StarSm />
              </span>
              <span>{listing.rating}</span>
              <span>·</span>
              <span>{listing.reviewCount} reviews</span>
            </div>
          </div>
          <button
            type="button"
            onClick={onReserve}
            className="rounded-full bg-[linear-gradient(to_right,#e61e4d_0%,#e31c5f_50%,#d70466_100%)] px-5 text-[14px] font-medium text-white transition-[filter] hover:brightness-95"
            style={{ height: 40 }}
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

function StarSm() {
  return (
    <svg viewBox="0 0 32 32" style={{ display: "block", fill: "#222" }} aria-hidden="true">
      <path d="M15.1 1.58l-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z" />
    </svg>
  );
}