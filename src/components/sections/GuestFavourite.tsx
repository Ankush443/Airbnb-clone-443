import { listing } from "../../data/listing";
import HostLogo from "../HostLogo";
import { StarSolid } from "../../lib/icons";

function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="flex gap-[2px] text-ink">
      {Array.from({ length: n }).map((_, i) => (
        <StarSolid key={i} size={10} />
      ))}
    </span>
  );
}

export default function GuestFavourite() {
  return (
    <section className="bordered rounded-xl px-5 py-4">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-[18px]">
        <div className="flex shrink-0 items-center gap-1 text-ink">
          <img src="/images/laurel-left.png" alt="" aria-hidden="true" className="h-[44px] w-auto" />
          <span className="text-center text-[15px] font-medium leading-[1.15]">
            Guest
            <br />
            favourite
          </span>
          <img src="/images/laurel-right.png" alt="" aria-hidden="true" className="h-[44px] w-auto -scale-x-100" />
        </div>

        <p className="min-w-[160px] max-w-[280px] flex-1 text-[14px] leading-[1.3] text-gray-70">
          One of the most loved homes on Airbnb, according to guests
        </p>

        <div className="flex shrink-0 items-center gap-[22px]">
          <div className="text-center">
            <div className="text-[20px] font-bold leading-none text-ink">{listing.rating}</div>
            <div className="mt-0.5 flex justify-center">
              <Stars />
            </div>
          </div>
          <span className="h-[34px] w-px bg-line" />
          <div className="text-center">
            <div className="text-[20px] font-bold leading-none text-ink">{listing.reviewCount}</div>
            <div className="mt-1 text-[13px] font-medium text-ink">Reviews</div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2 border-t border-line-light pt-4">
        <HostLogo src={listing.host.avatar} size={48} />
        <div>
          <div className="text-[16px] font-medium text-ink">Hosted by {listing.host.name}</div>
          <div className="text-[14px] text-gray-70">{listing.host.hosting}</div>
        </div>
      </div>
    </section>
  );
}