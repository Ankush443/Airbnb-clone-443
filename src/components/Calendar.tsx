import { useState } from "react";
import { Icon } from "../lib/icons";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DOW = ["S", "M", "T", "W", "T", "F", "S"];

const RANGE_START = { y: 2026, m: 9, d: 18 };
const RANGE_END = { y: 2026, m: 9, d: 23 };
const DISABLED_NOV = new Set(["18", "19", "20", "21", "22", "23", "24", "29", "30"]);

function iso(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

const cellClass =
  "flex aspect-square items-center justify-center rounded-full text-[14px] relative";

function MonthGrid({ year, month }: { year: number; month: number }) {
  const first = new Date(year, month, 1).getDay();
  const days = new Date(year, month + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];

  const startISO = iso(RANGE_START.y, RANGE_START.m, RANGE_START.d);
  const endISO = iso(RANGE_END.y, RANGE_END.m, RANGE_END.d);

  return (
    <div>
      <div className="mb-4 text-center text-[16px] font-medium text-ink">
        {MONTHS[month]} {year}
      </div>
      <div className="mb-1 grid grid-cols-7">
        {DOW.map((d, i) => (
          <span key={i} className="text-center text-[12px] font-medium text-[#222]">
            {d}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {cells.map((d, i) => {
          if (d === null) return <div key={i} className="invisible" />;
          const cur = iso(year, month, d);
          const isStart = cur === startISO;
          const isEnd = cur === endISO;
          const inRange = cur > startISO && cur < endISO && year === RANGE_START.y && month === RANGE_START.m;
          const disabled = year === 2026 && month === 10 && DISABLED_NOV.has(String(d));

          let cls = cellClass;
          if (disabled) cls += " text-[#DDDDDD] line-through";
          else if (inRange) cls += " rounded-none bg-line-light";
          if (isStart) cls += " bg-[#222] text-white rounded-full";
          if (isEnd) cls += " bg-[#222] text-white rounded-full";

          return (
            <div key={i} className={`${cls} ${isStart || isEnd ? "cal-edge" : ""}`}>
              {d}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Calendar() {
  const [offset, setOffset] = useState(0);
  const base = 2026 * 12 + 9 + offset;
  const y1 = Math.floor(base / 12);
  const m1 = base % 12;
  const y2 = Math.floor((base + 1) / 12);
  const m2 = (base + 1) % 12;

  return (
    <div className="w-full">
      <div className="text-[22px] font-semibold text-ink">5 nights in Candolim</div>
      <div className="mb-4 mt-1 text-[14px] text-gray-70">18 Oct 2026&nbsp;-&nbsp;23 Oct 2026</div>
      <div className="relative grid grid-cols-2 gap-x-14">
        <div className="absolute -top-1 flex w-full justify-between">
          <button
            type="button"
            aria-label="Previous month"
            onClick={() => setOffset((o) => o - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-line-light/60"
          >
            <Icon name="chevron-left" size={12} strokeWidth={2} />
          </button>
          <button
            type="button"
            aria-label="Next month"
            onClick={() => setOffset((o) => o + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-line-light/60"
          >
            <Icon name="chevron-right" size={12} strokeWidth={2} />
          </button>
        </div>
        <MonthGrid year={y1} month={m1} />
        <MonthGrid year={y2} month={m2} />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span
          className="flex h-[22px] w-[30px] items-center justify-center rounded border border-[#B0B0B0] text-gray-70"
          aria-hidden="true"
        >
          <Icon name="kbd" size={14} strokeWidth={1.2} />
        </span>
        <button type="button" className="text-[14px] font-medium underline underline-offset-2">
          Clear dates
        </button>
      </div>
    </div>
  );
}