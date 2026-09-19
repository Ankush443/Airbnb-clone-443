import { amenityGroups, listing } from "../../data/listing";
import { Icon, type IconName } from "../../lib/icons";
import { useReveal } from "../../lib/useReveal";

const amenityIcon: Record<string, IconName> = {
  Kitchen: "kitchen",
  Wifi: "wifi",
  "Dedicated workspace": "laptop",
  "Free parking on premises": "parking",
  Pool: "pool",
  "Hot tub": "jacuzzi",
  "Pets allowed": "paw",
  "Exterior security cameras on property": "camera",
  "Carbon monoxide alarm": "smoke",
  "Smoke alarm": "smoke",
  "Air conditioning": "ac",
  Towels: "bed",
  Hangers: "bed",
};

const totalCount = amenityGroups.reduce((n, g) => n + g.items.length, 0);

export default function AmenitiesSection({ onOpenAmenities }: { onOpenAmenities: () => void }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} id="amenities-inner" className="reveal">
      <h2 className="text-section font-semibold text-ink">What this place offers</h2>
      <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {listing.amenities.map((a) => (
          <div key={a.label} className={`flex items-center gap-2 ${a.struck ? "line-through opacity-50" : ""}`}>
            <Icon name={amenityIcon[a.label] ?? "check"} size={20} strokeWidth={1.4} />
            <span className="text-base text-ink">{a.label}</span>
          </div>
        ))}
        <button
          type="button"
          onClick={onOpenAmenities}
          className="self-start rounded-xl border border-ink px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-line-light/40"
        >
          Show all {totalCount} amenities
        </button>
      </div>
    </div>
  );
}