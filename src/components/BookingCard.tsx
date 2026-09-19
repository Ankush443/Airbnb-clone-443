import { Icon } from "../lib/icons";
import { listing } from "../data/listing";

export default function BookingCard() {
  return (
    <div className="sticky top-[100px]" id="booking">
      <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-5 py-4 shadow-[0_1px_4px_rgba(0,0,0,0.08)]">
        <img src="/images/discount.svg" alt="" aria-hidden="true" className="h-8 w-8 shrink-0 object-contain" />
        <div className="flex-1 text-[14px] leading-[1.3] text-ink">
          Get 10% off your next stay.
          <br />
          <span className="font-medium underline underline-offset-2">Terms apply</span>
        </div>
        <button
          type="button"
          className="rounded-lg bg-page px-[14px] py-2 text-[14px] font-medium text-ink hover:bg-line-light"
        >
          Claim
        </button>
      </div>

      <div className="mt-4 rounded-2xl border border-line bg-white p-6 shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
        <p className="flex items-baseline gap-1.5 text-ink">
          <span className="text-[22px] font-medium underline underline-offset-2">{listing.price}</span>
          <span className="text-[15px]">{listing.priceNights}</span>
        </p>

        <div className="mt-4 overflow-hidden rounded-lg border border-[#B0B0B0]">
          <div className="grid grid-cols-2">
            <div className="border-r border-[#B0B0B0] px-3 py-2.5 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-gray-70">Check-in</p>
              <p className="mt-0.5 text-[14px] font-semibold text-[#222]">{listing.checkIn}</p>
            </div>
            <div className="px-3 py-2.5 text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-gray-70">Checkout</p>
              <p className="mt-0.5 text-[14px] font-semibold text-[#222]">{listing.checkOut}</p>
            </div>
          </div>
          <button
            type="button"
            className="flex w-full items-center justify-between border-t border-[#B0B0B0] px-3 py-2.5 text-left"
          >
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.04em] text-gray-70">Guests</p>
              <p className="mt-0.5 text-[14px] font-semibold text-[#222]">{listing.guests}</p>
            </div>
            <Icon name="chevron-down" size={15} className="text-gray-70" />
          </button>
        </div>

        <p className="mt-4 rounded-lg bg-page py-2 text-center text-[13px] text-gray-70">
          Free cancellation before <b className="font-medium text-ink">{listing.freeCancelDate}</b>
        </p>

        <button
          type="button"
          className="btn-primary mt-3 flex h-[48px] w-full items-center justify-center rounded-full text-[16px] font-semibold"
        >
          Reserve
        </button>

        <p className="mt-4 text-center text-[14px] text-gray-70">You won&apos;t be charged yet</p>
      </div>

      <div className="mt-[26px] flex items-center justify-center gap-2 text-[14px] text-gray-70">
        <Icon name="flag" size={16} strokeWidth={1.8} />
        <a href="#" className="underline underline-offset-2">
          Report this listing
        </a>
      </div>
    </div>
  );
}