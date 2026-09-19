import { Icon } from "../lib/icons";

export default function Header() {
  return (
    <header className="relative z-40 h-[88px] border-b border-line bg-white">
      <div className="relative mx-auto flex h-full max-w-[1903px] items-center px-[80px]">
        <div className="flex items-center gap-1.5">
          <a href="/" className="flex items-center" aria-label="Airbnb home">
            <img
              src="/images/airbnb-logo.svg"
              alt="airbnb"
              className="h-[32px] w-auto"
            />
          </a>
        </div>

        <div className="absolute left-1/2 top-1/2 flex h-12 w-[415px] -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-line bg-white shadow-sm">
          <img
            src="/images/searchbar-house.png"
            alt=""
            aria-hidden="true"
            className="ml-[-4px] h-[30px] w-[30px] shrink-0 object-contain"
          />
          <span className="pl-3 pr-5 text-[14px] font-semibold text-ink">Anywhere</span>
          <span className="h-6 w-px bg-line" />
          <span className="px-5 text-[14px] font-semibold text-ink">Anytime</span>
          <span className="h-6 w-px bg-line" />
          <span className="min-w-0 flex-1 px-5 text-[14px] font-normal text-gray-70">
            Add guests
          </span>
          <button
            type="button"
            aria-label="Search"
            className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-rausch text-white"
          >
            <Icon name="search" size={14} strokeWidth={3} />
          </button>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <span className="mr-2 whitespace-nowrap text-[14px] font-semibold text-ink">
            Become a host
          </span>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2]"
            aria-label="Global settings"
          >
            <Icon name="globe" size={18} />
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F2F2F2]"
            aria-label="Open menu"
          >
            <Icon name="menu" size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}