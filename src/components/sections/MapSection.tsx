import { listing } from "../../data/listing";
import { Icon } from "../../lib/icons";
import { useReveal } from "../../lib/useReveal";

export default function MapSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      <h2 className="text-section font-semibold text-ink">Where you&apos;ll be</h2>
      <p className="mt-2 text-base text-ink">{listing.location}</p>

      <div className="relative mt-4 overflow-hidden rounded-2xl border border-line-light">
        <div className="relative h-[320px] bg-[#e6ecf2]">
          <svg
            viewBox="0 0 800 320"
            preserveAspectRatio="xMidYMid slice"
            className="absolute inset-0 h-full w-full"
            aria-hidden="true"
          >
            <rect width="800" height="320" fill="#e6ecf2" />
            {[
              "#dfe7ee",
              "#d9e2eb",
              "#d2dce6",
              "#f0d9bf",
              "#e8c9a9",
              "#e3c093",
              "#c9dbe8",
              "#b8d4e6",
              "#d3e6d0",
              "#c6dfc2",
            ].map((c, i) => (
              <rect
                key={i}
                x={(i * 173) % 700}
                y={(i * 97) % 220}
                width={90 + (i % 3) * 40}
                height={46 + (i % 2) * 26}
                rx={10}
                fill={c}
              />
            ))}
            <g stroke="#ffffff" strokeWidth="26" strokeLinecap="round" opacity="0.8">
              <path d="M-20 240 C 180 200, 320 300, 520 250 S 820 180 840 220" fill="none" />
              <path d="M120 -20 C 160 120, 60 200, 140 340" fill="none" />
              <path d="M640 -20 C 600 100, 720 200, 660 340" fill="none" />
              <path d="M-20 90 C 240 70, 560 60, 840 100" fill="none" />
            </g>
            <text x="150" y="110" fill="#93a7b6" fontSize="20" fontWeight="600" opacity="0.9">Candolim</text>
            <text x="520" y="120" fill="#93a7b6" fontSize="20" fontWeight="600" opacity="0.9">Calangute</text>
            <text x="620" y="250" fill="#93a7b6" fontSize="20" fontWeight="600" opacity="0.9">Baga</text>
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-full">
            <span className="relative flex flex-col items-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-rausch text-white shadow-lg">
                <Icon name="map-pin" size={22} strokeWidth={2.4} />
              </span>
              <span className="-mt-1 h-3 w-1 rounded-full bg-black/20" />
            </span>
          </div>
        </div>

        <button
          type="button"
          className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-ink shadow-md"
          onClick={() =>
            window.open(
              `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(listing.mapQuery)}`,
              "_blank",
            )
          }
        >
          Show on map
        </button>
      </div>

      <p className="mt-4 text-sm text-gray-70">Exact location will be provided after booking.</p>

      <h3 className="mt-8 text-[18px] font-semibold text-ink">Neighbourhood highlights</h3>
      <p className="mt-2 text-base leading-[1.45] text-ink">{listing.neighbourhood}</p>
      <button
        type="button"
        className="-mx-2 mt-3 flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold text-ink underline underline-offset-4 hover:bg-line-light/60"
      >
        Show more
        <Icon name="chevron-down" size={12} strokeWidth={1.5} className="rotate-180" />
      </button>
    </div>
  );
}