import { listing } from "../data/listing";
import { Icon } from "../lib/icons";

export default function HeroGrid({ onOpenTour }: { onOpenTour: () => void }) {
  const big = listing.heroImages[0];
  const smalls = listing.heroImages.slice(1, 5);

  const rotated = ["rotate-6 scale-110", "-rotate-3 scale-110", "-rotate-6 scale-110", "rotate-3 scale-110"];

  return (
    <section id="photos" className="pt-[24px]">
      <div className="relative grid h-[508px] grid-cols-[35fr_17fr_17fr] grid-rows-2 gap-2">
        <button
          type="button"
          onClick={onOpenTour}
          className="group relative col-start-1 row-span-2 overflow-hidden rounded-2xl"
          aria-label={`Open photo tour: ${big.alt}`}
        >
          <img
            src={big.src}
            alt={big.alt}
            loading="eager"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
        </button>

        {smalls.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={onOpenTour}
            className="group relative overflow-hidden rounded-2xl"
            style={{
              gridColumn: i < 2 ? 2 : 3,
              gridRow: (i % 2) + 1,
            }}
            aria-label={`Open photo tour: ${img.alt}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="eager"
              className={`h-full w-full object-cover transition-transform duration-700 group-hover:${rotated[i]}`}
            />
          </button>
        ))}

        <button
          type="button"
          onClick={onOpenTour}
          className="absolute bottom-6 right-6 z-10 flex items-center gap-2 rounded-lg border border-ink bg-white px-4 py-2 text-xs font-semibold text-ink"
        >
          <Icon name="grid" size={14} strokeWidth={1.8} />
          Show all photos
        </button>
      </div>
    </section>
  );
}