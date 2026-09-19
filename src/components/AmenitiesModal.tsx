import { useEffect, useRef } from "react";
import { amenityGroups } from "../data/listing";
import { Icon, type IconName } from "../lib/icons";

const amenityIcon: Record<string, IconName> = {
  Kitchen: "kitchen",
  Fridge: "kitchen",
  Freezer: "kitchen",
  Microwave: "kitchen",
  "Cooking basics": "kitchen",
  "Crockery and cutlery": "kitchen",
  Kettle: "hot-water",
  Coffee: "coffee",
  "Wine glasses": "coffee",
  Toaster: "kitchen",
  Blender: "kitchen",
  Cooker: "kitchen",
  "Induction cooktop": "kitchen",
  "Rice cooker": "kitchen",
  "RO water purifier": "hot-water",
  Wifi: "wifi",
  "Dedicated workspace": "laptop",
  "Air conditioning": "ac",
  "Ceiling fan": "fan",
  Iron: "iron",
  "Hairdryer": "shower",
  "Cleaning products": "spray",
  Shampoo: "shower",
  "Hot water": "hot-water",
  "Shower gel": "shower",
  Soap: "shower",
  "Washing machine": "washer",
  Hangers: "bed",
  "Bed linen": "bed",
  "Room-darkening blinds": "bed",
  "Clothes storage": "bed",
  Cot: "bed",
  Towels: "bed",
  "Extra pillows and blankets": "bed",
  "Drying rack": "bed",
  TV: "tv",
  "Smart TV": "tv",
  Speakers: "sparkles",
  "Exterior security cameras on property": "camera",
  "Carbon monoxide alarm": "smoke",
  "Smoke alarm": "smoke",
  "Private entrance": "door",
  "Patio or balcony": "home",
  "Outdoor dining area": "sparkles",
  "Sun terrace": "sparkles",
  "Sea view": "beach",
  "Free parking on premises": "parking",
  Pool: "pool",
  "Hot tub": "jacuzzi",
  Gym: "gym",
  "Rooftop pool": "pool",
  "24×7 building security": "shield",
  "Pets allowed": "paw",
  "Cleaning available during stay": "spray",
  "Long-term stays allowed": "calendar",
  "Self check-in": "key",
  Lift: "elevator",
};

function AmenityItem({ name, struck }: { name: string; struck?: boolean }) {
  return (
    <div className={`flex items-center gap-3 ${struck ? "struck" : ""}`}>
      <Icon name={amenityIcon[name] ?? "check"} size={20} strokeWidth={1.4} className="shrink-0" />
      <span className="text-base text-ink">{name}</span>
    </div>
  );
}

export default function AmenitiesModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = dialogRef.current;
    const prev = document.activeElement as HTMLElement | null;
    el?.focus();
    return () => prev?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
      <button type="button" aria-label="Close amenities" className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="All amenities"
        tabIndex={-1}
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-line-light px-8 py-5">
          <h2 className="text-xl font-semibold text-ink">What this place offers</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 hover:bg-line-light/60"
            aria-label="Close"
          >
            <Icon name="close" size={18} />
          </button>
        </div>

        <div className="overflow-y-auto px-8 py-6">
          {amenityGroups.map((group) => (
            <div key={group.title} className="mb-8 last:mb-0">
              <h3 className="font-semibold text-ink">{group.title}</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <AmenityItem key={item.label} name={item.label} struck={item.struck} />
                ))}
              </div>
            </div>
          ))}
          <p className="border-t border-line-light pt-6 text-sm text-gray-70">
            Some info shown in this section, such as wifi and parking, may vary
            depending on your stay dates.
          </p>
        </div>
      </div>
    </div>
  );
}