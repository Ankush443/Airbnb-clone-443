import { useCallback, useEffect, useRef, useState } from "react";
import { tourRooms, allPhotos, photos } from "../../data/listing";
import { Icon } from "../../lib/icons";

interface Props {
  open: boolean;
  onClose: () => void;
  onOpenPhoto: (globalIndex: number) => void;
}

// Running start index of each room within the flat 1..43 photo list (for lightbox numbering).
const roomOffsets = (() => {
  const offsets: number[] = [];
  let acc = 0;
  for (const r of tourRooms) {
    offsets.push(acc);
    acc += r.images.length;
  }
  return offsets;
})();

export default function PhotoTour({ open, onClose, onOpenPhoto }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState(tourRooms[0]?.id ?? "");
  const [closing, setClosing] = useState(false);

  const jumpTo = useCallback((roomId: string) => {
    document.getElementById(`tour-${roomId}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setClosing(false);
      setActiveId(tourRooms[0]?.id ?? "");
      // Deep link: ?view=photos&to=<tour-room-id> scrolls straight to a section.
      const section = new URLSearchParams(window.location.search).get("to");
      if (section) {
        window.setTimeout(() => {
          jumpTo(section);
        }, 60);
      }
    }
  }, [open, jumpTo]);

  // Scroll-spy: keep the category thumbnail strip in sync while scrolling.
  useEffect(() => {
    if (!open) return;
    const el = scrollRef.current;
    if (!el) return;
    const ids = tourRooms.map((r) => r.id);
    const onScroll = () => {
      const probe = el.scrollTop + 320;
      let current = ids[0];
      for (const r of tourRooms) {
        const sec = document.getElementById(`tour-${r.id}`);
        if (sec && sec.offsetTop <= probe) current = r.id;
      }
      setActiveId(current);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, [open]);

  const close = () => {
    if (closing) return;
    setClosing(true);
    window.setTimeout(onClose, 280);
  };

  return (
    <div
      className="photo-tour outline-none"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
      data-state={closing ? "close" : "open"}
    >
      {/* Top bar (~100px): back | "Photo tour" | share + heart */}
      <header className="relative z-10 flex h-[100px] shrink-0 items-center px-8 bg-white">
        <button
          type="button"
          onClick={close}
          aria-label="Back"
          className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-line-light"
        >
          <Icon name="chevron-left" size={22} strokeWidth={1.8} />
        </button>
        <h2 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[16px] font-semibold text-ink">
          Photo tour
        </h2>
        <div className="ml-auto flex items-center gap-1">
          <button
            type="button"
            aria-label="Share"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-line-light"
          >
            <Icon name="share" size={20} strokeWidth={1.8} />
          </button>
          <button
            type="button"
            aria-label="Save"
            className="flex h-11 w-11 items-center justify-center rounded-full hover:bg-line-light"
          >
            <Icon name="heart" size={20} strokeWidth={1.6} />
          </button>
        </div>
      </header>

      {/* Scrollable body */}
      <div ref={scrollRef} className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
        <div className="mx-auto max-w-[1006px] px-6 pb-24">
          {/* Category thumbnail strip — row 1: 8 rooms, row 2 wraps (Additional photos) */}
          <nav className="mb-10 grid grid-cols-8 gap-3" aria-label="Photo categories">
            {tourRooms.map((r) => {
              const active = activeId === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => jumpTo(r.id)}
                  aria-current={active ? "true" : undefined}
                  className="group flex flex-col items-start gap-2 text-left"
                >
                  <img
                    src={r.thumb}
                    alt=""
                    className={`aspect-[106/100] w-full rounded-lg object-cover transition group-hover:brightness-[0.94] ${
                      active ? "ring-2 ring-inset ring-ink ring-offset-2" : ""
                    }`}
                  />
                  <span
                    className={`text-[14px] leading-[1.35] ${
                      active ? "border-b-2 border-ink font-medium text-ink" : "text-gray-70"
                    }`}
                  >
                    {r.title}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Room sections — left title/subtitle, right photo blocks (1 full + pairs) */}
          <div className="flex flex-col gap-[64px]">
            {tourRooms.map((room, ri) => {
              const blocks: { size: number; imgs: { src: string; alt: string; gi: number }[] }[] = [];
              let cursor = 0;
              for (const size of room.layout) {
                const imgs = room.images.slice(cursor, cursor + size).map((im, k) => ({
                  ...im,
                  gi: roomOffsets[ri] + cursor + k,
                }));
                blocks.push({ size, imgs });
                cursor += size;
              }
              return (
                <section
                  key={room.id}
                  id={`tour-${room.id}`}
                  className="grid grid-cols-2 items-start gap-x-[60px] gap-y-5"
                >
                  <div className="lg:sticky lg:top-5">
                    <h3 className="text-[34px] font-semibold leading-[1.1] tracking-[-0.02em] text-ink">
                      {room.title}
                    </h3>
                    {room.subtitle && (
                      <p className="mt-2 text-[16px] leading-[1.4] text-gray-70">{room.subtitle}</p>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    {blocks.map((b, bi) => (
                      <div
                        key={bi}
                        className={`grid gap-3 ${b.size === 1 ? "grid-cols-1" : "grid-cols-2"}`}
                      >
                        {b.imgs.map((im) => (
                          <button
                            key={im.gi}
                            type="button"
                            onClick={() => onOpenPhoto(im.gi)}
                            aria-label={`${allPhotos[im.gi].alt} image ${im.gi + 1}`}
                            className="group relative block aspect-[3/2] w-full overflow-hidden rounded-lg bg-line"
                          >
                            <img
                              src={im.src}
                              alt={im.alt}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Lightbox({
  index,
  onNav,
  onBack,
  onClose,
}: {
  index: number;
  onNav: (i: number) => void;
  onBack: () => void;
  onClose: () => void;
}) {
  const photo = photos[index];

  return (
    <div className="lightbox" aria-label="Photo viewer">
      <div className="flex h-16 shrink-0 items-center justify-between px-6">
        <button
          type="button"
          aria-label="Back to photo tour"
          onClick={onBack}
          className="rounded-full p-2 hover:bg-white/10"
        >
          <Icon name="chevron-left" size={20} strokeWidth={2.2} className="text-white" />
        </button>
        <p className="text-sm font-semibold text-white">
          {index + 1} / {allPhotos.length}
        </p>
        <button
          type="button"
          aria-label="Close photo viewer"
          onClick={onClose}
          className="rounded-full p-2 hover:bg-white/10"
        >
          <Icon name="close" size={20} strokeWidth={2} className="text-white" />
        </button>
      </div>

      <div className="lightbox-figure">
        <img key={photo.id} src={photo.src} alt={photo.alt} className="lightbox-photo" />
      </div>

      <button
        type="button"
        aria-label="Previous photo"
        disabled={index === 0}
        onClick={() => onNav(Math.max(0, index - 1))}
        className="absolute left-8 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-ink disabled:opacity-0"
      >
        <Icon name="chevron-left" size={20} strokeWidth={2.6} />
      </button>
      <button
        type="button"
        aria-label="Next photo"
        disabled={index === allPhotos.length - 1}
        onClick={() => onNav(Math.min(allPhotos.length - 1, index + 1))}
        className="absolute right-8 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-all hover:bg-white hover:text-ink disabled:opacity-0"
      >
        <Icon name="chevron-right" size={20} strokeWidth={2.6} />
      </button>

      <div className="no-scrollbar absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 overflow-x-auto">
        {allPhotos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            onClick={() => onNav(i)}
            aria-label={p.alt}
            aria-current={index === i}
            className={`h-12 w-16 shrink-0 overflow-hidden rounded-md ${
              index === i ? "ring-2 ring-white" : "opacity-70 hover:opacity-100"
            }`}
          >
            <img src={p.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
}