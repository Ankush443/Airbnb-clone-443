import { useEffect, useRef, useState } from "react";
import { listing, reviews } from "../data/listing";
import { Icon } from "../lib/icons";

const FILTERS = [
  { label: "All reviews", value: "all" },
  { label: "With photos", value: "photo" },
  { label: "Couple", value: "couple" },
  { label: "Solo", value: "solo" },
] as const;

const SORTS = [
  { label: "Newest", value: "new" },
  { label: "Oldest", value: "old" },
  { label: "Highest rating", value: "high" },
  { label: "Lowest rating", value: "low" },
] as const;

type Filter = (typeof FILTERS)[number]["value"];
type Sort = (typeof SORTS)[number]["value"];

export default function ReviewsModal({ onClose }: { onClose: () => void }) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<Sort>("new");
  const [sortOpen, setSortOpen] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    const prev = document.activeElement as HTMLElement | null;
    el?.focus();
    return () => prev?.focus();
  }, []);

  const filtered = reviews.filter((r) => {
    if (filter === "photo") return !!r.photo;
    if (filter === "couple") return r.tag === "Couple";
    if (filter === "solo") return r.tag === "Solo";
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "new") return b.date.localeCompare(a.date);
    if (sort === "old") return a.date.localeCompare(b.date);
    return sort === "high" ? b.rating - a.rating : a.rating - b.rating;
  });

  const countLabel =
    filter === "all"
      ? `${filtered.length} reviews`
      : `${filtered.length} ` +
        FILTERS.find((f) => f.value === filter)?.label.toLowerCase();

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <button type="button" aria-label="Close reviews" className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="All reviews"
        tabIndex={-1}
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex shrink-0 items-center justify-between border-b border-line-light px-8 py-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-ink">
            <Icon name="star" size={20} strokeWidth={1.6} />
            {listing.rating.toFixed(2)} · {listing.reviewLabel}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-line-light/60"
            aria-label="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="flex shrink-0 flex-wrap items-center justify-between gap-3 px-8 pt-4">
          <div className="flex flex-wrap items-center gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === f.value
                    ? "border-ink bg-page text-ink"
                    : "border-line text-gray-70 hover:border-ink hover:text-ink"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSortOpen((o) => !o)}
              className="flex items-center gap-2 rounded-xl border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
            >
              <Icon name="bulk" size={16} strokeWidth={1.6} />
              {SORTS.find((s) => s.value === sort)?.label}
              <Icon name="chevron-down" size={14} className="text-gray-70" />
            </button>
            {sortOpen && (
              <div className="absolute right-0 top-full z-10 mt-2 w-52 rounded-2xl border border-line-light bg-white py-2 shadow-xl">
                {SORTS.map((s) => (
                  <button
                    key={s.value}
                    type="button"
                    onClick={() => {
                      setSort(s.value);
                      setSortOpen(false);
                    }}
                    className={`block w-full px-5 py-2 text-left text-sm hover:bg-page ${
                      sort === s.value ? "bg-page font-semibold text-ink" : "text-ink"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <p className="shrink-0 px-8 pt-5 text-sm font-semibold text-ink">{countLabel}</p>

        <div className="overflow-y-auto px-8 py-6">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {sorted.map((r) => (
              <div key={r.id}>
                <div className="flex items-center gap-3">
                  {r.avatar ? (
                    <img src={r.avatar} alt={r.name} className="h-10 w-10 rounded-full object-cover" />
                  ) : (
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${r.avatarColor}`}
                      aria-hidden="true"
                    >
                      {r.initial}
                    </span>
                  )}
                  <div className="min-w-0">
                    <p className="flex items-center gap-1 text-sm font-semibold text-ink">
                      <span className="truncate">{r.name}</span>
                      {r.verified && (
                        <Icon name="check" size={12} strokeWidth={2.6} className="shrink-0 text-jade" />
                      )}
                    </p>
                    <p className="text-xs text-gray-70">{r.tenure}</p>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-0.5" aria-label={`${r.rating} star rating`}>
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="star" size={12} strokeWidth={1.6} />
                  ))}
                  {r.rating < 5 &&
                    Array.from({ length: 5 - r.rating }).map((_, i) => (
                      <Icon key={`e-${i}`} name="star" size={12} strokeWidth={1.6} className="text-line" />
                    ))}
                </div>
                <p className="mt-1.5 text-xs text-gray-70">{r.posted}</p>
                <p className="mt-3 text-[15px] leading-6 text-ink">{r.text}</p>
                {r.photo && (
                  <div className="hero-zoom mt-3 w-28 overflow-hidden rounded-xl">
                    <img
                      src={r.photo}
                      alt={`Photo shared by ${r.name}`}
                      loading="lazy"
                      className="hero-img aspect-square w-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}