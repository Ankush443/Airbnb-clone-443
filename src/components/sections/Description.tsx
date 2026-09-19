import { useState } from "react";
import { listing } from "../../data/listing";
import { Icon } from "../../lib/icons";

export default function Description() {
  const [open, setOpen] = useState(false);
  return (
    <div className="description">
      <div className="mb-5 rounded-xl bg-[#F7F7F7] px-4 py-3 text-[15px] text-ink">
        Some info has been automatically translated.{" "}
        <a href="#" className="font-medium underline">
          Show original
        </a>
      </div>
      <p
        className={`whitespace-pre-line text-[16px] leading-[1.45] text-ink ${
          open ? "" : "mask-fade max-h-[120px] overflow-hidden"
        }`}
      >
        {listing.description}
      </p>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-2 flex items-center gap-2 text-[15px] font-medium underline underline-offset-2"
      >
        {open ? "Show less" : "Show more"}
        <Icon name={open ? "chevron-up" : "chevron-down"} size={12} strokeWidth={1.5} className={open ? "" : "-rotate-90"} />
      </button>
    </div>
  );
}