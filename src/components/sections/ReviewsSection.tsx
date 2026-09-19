import { useState } from "react";
import { listing, reviews } from "../../data/listing";
import { Icon, StarSolid } from "../../lib/icons";
import { useReveal } from "../../lib/useReveal";

type Review = (typeof reviews)[number];

const CATEGORY_ROWS = [
  { value: "5", pct: "100%" },
  { value: "4", pct: "6%" },
  { value: "3", pct: "3%" },
  { value: "2", pct: "3%" },
  { value: "1", pct: "4%" },
];

function Stars() {
  return (
    <span className="flex gap-px text-ink">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarSolid key={i} size={10} />
      ))}
    </span>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const [open, setOpen] = useState(false);
  const clamped = !open && r.text.length > 170;
  return (
    <div>
      <div className="mb-2.5 flex items-center gap-3">
        {r.avatar ? (
          <img src={r.avatar} alt={r.name} className="h-[42px] w-[42px] rounded-full object-cover" />
        ) : (
          <span
            className="flex h-[42px] w-[42px] shrink-0 items-center justify-center text-[17px] font-medium text-ink"
            style={{ background: r.avatarBg }}
            aria-hidden="true"
          >
            {r.initial}
          </span>
        )}
        <div>
          <p className="text-[15px] font-medium text-ink">{r.name}</p>
          <p className="text-[13px] text-gray-70">{r.meta}</p>
        </div>
      </div>

      <div className="mb-1.5 flex items-center gap-1.5 text-[13px] text-ink">
        <Stars />
        <span>·</span>
        <span>{r.when}</span>
      </div>

      <p className={`whitespace-pre-line text-[15px] leading-[1.4] text-[#222] ${clamped ? "line-clamp-4" : ""}`}>
        {r.text}
      </p>
      {clamped && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="mt-2 text-[15px] font-medium underline underline-offset-2"
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function ReviewsSection({ onOpenReviews }: { onOpenReviews: () => void }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal px-0">
      <div className="flex flex-col items-center pb-10 pt-2 text-center">
        <div className="flex items-center gap-2">
          <img src="/images/laurel-left.png" alt="" aria-hidden="true" className="h-[90px] w-auto" />
          <p className="text-[100px] font-medium leading-none tracking-[-0.03em] text-ink">
            {listing.rating.toFixed(2)}
          </p>
          <img src="/images/laurel-right.png" alt="" aria-hidden="true" className="h-[90px] w-auto -scale-x-100" />
        </div>
        <h2 className="mt-2 text-[22px] font-medium text-ink">Guest favourite</h2>
        <p className="mx-auto mt-2 max-w-[420px] text-[15px] leading-[1.35] text-ink">
          This home is a guest favourite based on ratings, reviews and reliability
        </p>
        <button
          type="button"
          className="mt-3.5 text-[14px] font-medium underline underline-offset-2"
        >
          How reviews work
        </button>
      </div>

      <div className="grid grid-cols-[1.4fr_repeat(6,1fr)] gap-0 py-2 pb-10">
        <div className="pr-6">
          <p className="text-[14px] font-semibold text-ink">Overall rating</p>
          <div className="mt-3 space-y-2.5">
            {CATEGORY_ROWS.map((row) => (
              <div key={row.value} className="flex items-center gap-3">
                <span className="w-2.5 shrink-0 text-xs text-ink">{row.value}</span>
                <div className="h-[3px] w-full bg-line">
                  <div className="h-full bg-ink" style={{ width: row.pct }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {listing.ratingsBreakdown.map((c) => (
          <div key={c.label} className="min-w-0 px-3">
            <p className="text-[14px] font-semibold text-ink">{c.label}</p>
            <p className="mt-1 text-[20px] font-medium text-ink">{c.value}</p>
            <div className="mt-4 text-ink">
              <Icon name={c.icon as never} size={32} strokeWidth={1.4} />
            </div>
          </div>
        ))}
      </div>

      <div className="no-scrollbar flex gap-3 overflow-x-auto pb-[30px]">
        {listing.reviewChips.map((c) => (
          <button
            type="button"
            key={c.label}
            className="flex h-[50px] shrink-0 items-center gap-3 rounded-full border border-line px-4"
          >
            <img src={c.img} alt="" aria-hidden="true" className="h-5 w-5 shrink-0 object-contain" />
            <span className="whitespace-nowrap text-[15px] font-medium text-ink">{c.label}</span>
            <span className="whitespace-nowrap text-[15px] text-gray-70">{c.count}</span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-x-20 gap-y-[80px] pb-10 lg:grid-cols-2">
        {reviews.map((r) => (
          <ReviewCard key={r.id} r={r} />
        ))}
      </div>

      <button
        type="button"
        onClick={onOpenReviews}
        className="rounded-xl border border-ink px-6 py-3 font-semibold text-ink transition-colors hover:bg-line-light/40"
      >
        Show all {listing.reviewCount} reviews
      </button>
    </div>
  );
}