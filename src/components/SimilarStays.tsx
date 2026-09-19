import { listing } from "../data/listing";
import { Icon, StarSolid } from "../lib/icons";
import { useReveal } from "../lib/useReveal";
import { useRef, useState } from "react";

export default function SimilarStays() {
  const ref = useReveal<HTMLDivElement>();
  const track = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const amount = (el.clientWidth * 0.9 * dir);
    el.scrollBy({ left: amount, behavior: "smooth" });
    setPage((p) => Math.max(0, Math.min(1, p + dir)));
  };

  return (
    <div ref={ref} className="reveal">
      <div className="flex items-center justify-between">
        <h2 className="text-section font-semibold text-ink">More stays nearby</h2>
        <div className="flex items-center gap-2">
          <span className="mr-1.5 text-[14px] text-gray-70">{page + 1} / 2</span>
          <button
            type="button"
            aria-label="Previous"
            disabled={page === 0}
            onClick={() => scroll(-1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B0B0B0] bg-white disabled:opacity-30"
          >
            <Icon name="chevron-left" size={12} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next"
            disabled={page === 1}
            onClick={() => scroll(1)}
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#B0B0B0] bg-white disabled:opacity-30"
          >
            <Icon name="chevron-right" size={12} strokeWidth={2} />
          </button>
        </div>
      </div>

      <div
        ref={track}
        className="no-scrollbar mt-5 flex scroll-smooth gap-5 overflow-x-auto pb-1"
      >
        {listing.similar.map((s, i) => (
          <div key={`${s.title}-${i}`} className="w-[205px] min-w-0 sm:w-[214px]">
            <img
              src={s.img}
              alt={s.title}
              loading="lazy"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="mt-2 line-clamp-2 text-[14px] font-medium text-ink">{s.title}</div>
            <div className="mt-1 flex items-center gap-1 text-[13px] text-[#222]">
              <span>{s.price}</span>
              <StarSolid size={10} />
              <span>{s.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}