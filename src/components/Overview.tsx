import { useState } from "react";
import { listing } from "../data/listing";
import { Icon } from "../lib/icons";

export default function Overview() {
  const [saved, setSaved] = useState(false);
  return (
    <div className="flex flex-wrap items-start justify-between gap-4 pt-[30px]">
      <h1 className="max-w-[900px] text-[26px] font-semibold leading-[30px] tracking-tight text-ink">
        {listing.title}
      </h1>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-line-light/70"
        >
          <Icon name="share" size={16} strokeWidth={1.8} />
          <span className="underline underline-offset-2">Share</span>
        </button>
        <button
          type="button"
          onClick={() => setSaved((s) => !s)}
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-line-light/70"
        >
          <Icon name="heart" size={16} strokeWidth={1.8} className={saved ? "fill-rausch text-rausch" : ""} />
          <span className="underline underline-offset-2">Save</span>
        </button>
      </div>
    </div>
  );
}