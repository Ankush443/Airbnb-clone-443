import { Icon, type IconName } from "../../lib/icons";
import { listing } from "../../data/listing";
import { useReveal } from "../../lib/useReveal";

export default function Highlights() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal mt-8">
      {listing.highlights.map((it) => (
        <div key={it.title} className="flex h-[68px] items-center gap-6">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center text-ink">
            <Icon name={it.icon as IconName} size={24} strokeWidth={1.5} />
          </span>
          <div>
            <p className="text-[15px] font-semibold text-ink">{it.title}</p>
            <p className="text-[15px] text-gray-70">{it.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}