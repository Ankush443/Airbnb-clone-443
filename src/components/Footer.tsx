import { Icon } from "../lib/icons";

const columns: { title: string; links: string[] }[] = [
  {
    title: "Support",
    links: [
      "Help Centre",
      "AirCover",
      "Anti-discrimination",
      "Supporting people with disabilities",
      "Cancellation options",
      "Report neighbourhood concern",
    ],
  },
  {
    title: "Hosting",
    links: [
      "Goanista your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
      "Goanista-friendly apartments",
    ],
  },
  {
    title: "Goanista",
    links: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Guest referrals",
      "Goanista.org emergency stays",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-4 border-t border-line bg-white">
      <div className="mx-auto max-w-[1154px] px-[80px] py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col) => (
            <div key={col.title}>
              <div className="mb-5 text-[14px] font-semibold text-ink">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-[14px] text-ink hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1154px] flex-wrap items-center justify-between gap-4 px-[80px] py-6">
          <div className="text-[14px] text-ink">
            <span className="font-medium">© 2026 Goanista, Inc.</span>
            <span className="mx-2 text-gray-70">·</span>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <span className="mx-2 text-gray-70">·</span>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <span className="mx-2 text-gray-70">·</span>
            <a href="#" className="hover:underline">
              Sitemap
            </a>
          </div>

          <div className="flex items-center gap-6 text-[14px] font-medium text-ink">
            <button type="button" className="flex items-center gap-1.5 hover:underline">
              <Icon name="globe" size={16} />
              English (US)
            </button>
            <button type="button" className="flex items-center gap-1 hover:underline">
              USD
              <Icon name="chevron-down" size={12} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}