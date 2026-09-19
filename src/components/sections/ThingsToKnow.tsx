import { listing } from "../../data/listing";
import { Icon, type IconName } from "../../lib/icons";
import { useReveal } from "../../lib/useReveal";

const ttkIcons: Record<string, IconName> = {
  "Cancellation policy": "calendar-x",
  "House rules": "key",
  "Safety & property": "shield",
};

export default function ThingsToKnow() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className="reveal">
      <h2 className="text-section font-semibold text-ink">Things to know</h2>
      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
        {listing.thingsToKnow.map((t) => (
          <div key={t.title}>
            <span className="flex h-6 w-6 items-center justify-center text-ink">
              <Icon name={ttkIcons[t.title] ?? "shield"} size={24} strokeWidth={1.6} />
            </span>
            <div className="mt-5 text-[16px] font-semibold text-ink">{t.title}</div>
            {t.lines.map((l, i) => (
              <p key={i} className="mt-3 text-[14px] leading-[1.4] text-[#222]">
                {l}
              </p>
            ))}
            <a href="#" className="mt-3 inline-block text-[14px] font-medium underline underline-offset-2">
              Learn more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}