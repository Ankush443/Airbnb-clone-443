import { listing } from "../../data/listing";
import HostLogo from "../HostLogo";
import { Icon } from "../../lib/icons";
import { useReveal } from "../../lib/useReveal";

export default function HostSection() {
  const ref = useReveal<HTMLDivElement>();
  const { host } = listing;
  return (
    <div ref={ref} className="reveal">
      <h2 className="text-section font-semibold text-ink">Meet your host</h2>

      <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-2">
        <div>
          <div className="grid grid-cols-[1fr_100px] items-center gap-4 rounded-[20px] border border-line px-6 py-[30px] shadow-[0_4px_16px_rgba(0,0,0,0.06)]">
            <div className="text-center">
              <div className="relative mx-auto w-fit">
                <HostLogo src={host.avatar} alt={host.name} size={90} />
                <span className="absolute -bottom-1 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-rausch text-white">
                  <Icon name="verified" size={14} strokeWidth={1.6} />
                </span>
              </div>
              <div className="mt-4 text-[26px] font-medium leading-tight text-ink">{host.name}</div>
              <div className="mt-1 text-[13px] text-gray-70">Host</div>
            </div>
            <div className="space-y-4 text-center">
              <div>
                <div className="text-[22px] font-bold leading-none text-ink">{host.reviews}</div>
                <div className="mt-1 text-[13px] text-gray-70">Reviews</div>
              </div>
              <div>
                <div className="text-[22px] font-bold leading-none text-ink">{host.hostRating}★</div>
                <div className="mt-1 text-[13px] text-gray-70">Rating</div>
              </div>
              <div>
                <div className="text-[22px] font-bold leading-none text-ink">{host.years}</div>
                <div className="mt-1 text-[13px] text-gray-70">Years hosting</div>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {host.facts.map((f, i) => (
              <div key={i} className="flex items-center gap-3 text-[15px] text-ink">
                <Icon name={i === 0 ? "cake" : "school"} size={20} strokeWidth={1.6} className="shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="text-[18px] font-medium text-ink">Co-Hosts</div>
          <div className="mt-4 grid grid-cols-3 gap-x-2 gap-y-4">
            {listing.coHosts.map((c) => (
              <div key={c.name} className="flex min-w-0 items-center gap-2.5 text-[14px] text-ink">
                {c.avatar ? (
                  <img src={c.avatar} alt="" className="h-[34px] w-[34px] shrink-0 rounded-full object-cover" />
                ) : (
                  <span
                    className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full text-[13px] font-medium text-ink"
                    style={{ background: c.avatarBg }}
                    aria-hidden="true"
                  >
                    {c.initial}
                  </span>
                )}
                <span className="truncate">{c.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-[30px] text-[18px] font-medium text-ink">Host details</div>
          <p className="mt-4 text-[15px] text-[#222]">
            {host.responseRate}
            <br />
            {host.responseTime}
          </p>

          <button
            type="button"
            className="mt-6 w-full rounded-lg bg-page py-3.5 text-[15px] font-medium text-ink hover:bg-line-light"
          >
            Message host
          </button>

          <div className="mt-6 flex items-start gap-3 text-[13px] leading-[1.4] text-gray-70">
            <span className="flex h-4 w-4 shrink-0 items-center justify-center text-ink">
              <Icon name="shield" size={16} strokeWidth={1.6} />
            </span>
            <span>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}