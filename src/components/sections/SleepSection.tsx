import { listing } from "../../data/listing";
import { useReveal } from "../../lib/useReveal";

export default function SleepSection() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      <h2 className="text-section font-semibold text-ink">Where you&apos;ll sleep</h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {listing.sleep.map((room) => (
          <div key={room.title} className="group">
            <img
              src={room.img}
              alt={room.title}
              loading="lazy"
              className="h-[150px] w-full rounded-xl object-cover transition-opacity group-hover:opacity-90"
            />
            <p className="mt-3 text-[16px] font-medium text-ink">{room.title}</p>
            <p className="text-[14px] text-gray-70">{room.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}