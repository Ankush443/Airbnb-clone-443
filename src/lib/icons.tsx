import type React from "react";

export type IconName =
  | "airbnb"
  | "globe"
  | "menu"
  | "search"
  | "close"
  | "chevron-left"
  | "chevron-right"
  | "chevron-down"
  | "chevron-up"
  | "heart"
  | "share"
  | "star"
  | "expanding"
  | "back"
  | "forward"
  | "bed"
  | "king"
  | "queen"
  | "check"
  | "plus"
  | "map-pin"
  | "calendar"
  | "users"
  | "kitchen"
  | "wifi"
  | "pool"
  | "jacuzzi"
  | "parking"
  | "washer"
  | "dryer"
  | "iron"
  | "tv"
  | "coffee"
  | "ac"
  | "shower"
  | "hot-water"
  | "fire"
  | "shield"
  | "smoke"
  | "first-aid"
  | "key"
  | "lock"
  | "bath"
  | "home"
  | "house"
  | "beach"
  | "self-checkin"
  | "couples"
  | "arrow-right"
  | "info"
  | "sparkles"
  | "suites"
  | "elevator"
  | "gym"
  | "phone"
  | "link"
  | "bulk"
  | "spray"
  | "circle-check"
  | "chat"
  | "map-fold"
  | "tag"
  | "fan"
  | "flag"
  | "laptop"
  | "paw"
  | "camera"
  | "door"
  | "calendar-x"
  | "kbd"
  | "verified"
  | "cake"
  | "school"
  | "grid";

const PATHS: Record<IconName, string[]> = {
  airbnb: [
    "M12 6c-2.3 0-4.5 1.1-5.7 2.9C5 10.2 4.6 12 5.2 13.8l1.8 4.4 2.4-6c.3-.8.2-1.3-.1-1.9a2.9 2.9 0 0 1 4.6 1.9L14 20l-2 5",
  ],
  globe: [
    "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
    "M3 12h18",
    "M12 3c2.5 2.6 3.5 5.7 3.5 9s-1 6.4-3.5 9c-2.5-2.6-3.5-5.7-3.5-9S9.5 5.6 12 3Z",
  ],
  menu: ["M3 6h18", "M3 12h18", "M3 18h18"],
  search: ["M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z", "m21 21-4.3-4.3"],
  close: ["M6 6l12 12", "M18 6 6 18"],
  "chevron-left": ["m15 18-6-6 6-6"],
  "chevron-right": ["m9 18 6-6-6-6"],
  "chevron-down": ["m6 9 6 6 6-6"],
  "chevron-up": ["m18 15-6-6-6 6"],
  heart: [
    "M12 20.5C7 16.5 4 13.7 4 10.6 4 8.4 5.7 6.7 7.8 6.7c1.5 0 2.9.8 3.7 2 .8 0 1.6.1 2.3.4-.9-.4-1.6-.5-2.3-.5.8-1.2 2.2-2 3.7-2C17.3 6.7 19 8.4 19 10.6c0 3.1-3 5.9-7 9.9Z",
  ],
  share: [
    "M4 6.5C4 5.1 5.1 4 6.5 4S9 5.1 9 6.5 7.9 9 6.5 9 4 7.9 4 6.5Z",
    "M15 14.5C15 13.1 16.1 12 17.5 12S20 13.1 20 14.5 18.9 17 17.5 17 15 15.9 15 14.5Z",
    "M4 17.5C4 16.1 5.1 15 6.5 15S9 16.1 9 17.5 7.9 20 6.5 20 4 18.9 4 17.5Z",
    "M9 6.8l6.6 2.9M9 17.2l6.6-2.9",
  ],
  star: ["M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.1 5.9-.9L12 3.5Z"],
  expanding: [
    "M8 4H4v4",
    "M16 4h4v4",
    "M8 20H4v-4",
    "M16 20h4v-4",
  ],
  back: ["M15 18l-6-6 6-6"],
  forward: ["M9 18l6-6-6-6"],
  bed: ["M5 18v-8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8", "M5 14h14M3 12v6M21 12v6"],
  king: [
    "M4 16v-6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6",
    "M4 16v2M20 16v2",
    "M7 12h10",
    "M7 8V6M17 8V6",
  ],
  queen: [
    "M4 16v-5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5",
    "M4 16v2M20 16v2",
    "M8 13h8",
  ],
  check: ["m5 13 4 4L19 7"],
  plus: ["M12 5v14M5 12h14"],
  "map-pin": [
    "M12 21s-6.5-5.6-6.5-10.5A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.5C18.5 15.4 12 21 12 21Z",
    "M12 11.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  ],
  calendar: ["M6 5V3M18 5V3M3 9h18", "M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"],
  users: [
    "M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    "M3 21c0-3.3 2.2-5.5 5-5.5s5 2.2 5 5.5",
    "M16 8.5a2.5 2.5 0 1 0 0-5",
    "M17 15.5c2.2.5 3.5 2.5 3.5 5.5",
  ],
  kitchen: ["M7 4v16M7 4l6 4M7 8l6 4M7 12l6 4M7 16l6 4", "M4 4h3M4 20h3"],
  wifi: ["M5 12.6a10 10 0 0 1 14 0", "M8.3 15.9a5 5 0 0 1 7.4 0", "M12 19.5h.01"],
  pool: ["M4 19c1.2 0 1.9.8 3 1.2 1.1.5 1.9-.6 3-.2 1 .4 1.8 1.2 3 1.2 1.3 0 2.1-1 3-1 1 0 1.8.5 3 1", "M4 15c1.2 0 1.9.8 3 1.2 1.1.5 1.9-.6 3-.2 1 .4 1.8 1.2 3 1.2 1.3 0 2.1-1 3-1 1 0 1.8.5 3 1", "M5 11h14", "M7 8h10", "M4 3l2.5 5M20 3l-2.5 5", "M9.5 3 12 8l2.5-5"],
  jacuzzi: ["M12 4a8 8 0 0 0-8 8", "M12 8a4 4 0 0 0-4 4", "M4 20h16", "M7 17v.01M10 17v.01M13 17v.01M16 17v.01M19 17v.01"],
  parking: ["M6 20V4h7a4 4 0 0 1 0 8H6", "M6 12h8a4 4 0 0 1 0 8H6"],
  washer: ["M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z", "M8.5 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z", "M8 7h.01"],
  dryer: ["M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z", "M9 4h.01M12 4h.01", "M10 11a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z", "M11.5 13.5 10 16h4M12 9V7M12 9l1.5 1.5"],
  iron: ["M4 8h14a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H9", "M4 8l2 8M9 16H2M13 8l-3 8"],
  tv: ["M3 5h18v11H3z", "M8 20h8", "M12 16v3"],
  coffee: ["M4 9h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9Z", "M17 10h1.5a2.5 2.5 0 0 1 0 5H17", "M8 4c-.8.8-1.8 1.2-1 3M12 4c-.8.8-1.8 1.2-1 3"],
  ac: ["M12 3v18M5 7l14 10M19 7 5 17", "M12 3l2 3M12 3l-2 3M12 21l2-3M12 21l-2-3"],
  shower: ["M9 4h6a1 1 0 0 1 1 1v9H8V5a1 1 0 0 1 1-1Z", "M5 14h14", "M12 14v4M8 14v4M16 14v4", "M8 21h.01M12 21h.01M16 21h.01"],
  "hot-water": ["M12 4v8", "M9 8c-2 1-3 3-3 5a6 6 0 0 0 12 0c0-2-1-4-3-5", "M12 4a9 9 0 0 1 4-3"],
  fire: ["M12 3s5 4.5 5 9.5a5 5 0 0 1-10 0c0-1.6.4-3 1.2-4.2C8.7 9.5 9 11 10 12c-.3-3 1-6.2 2-9Z", "M8.5 13.5c0 1 .7 1.8 1.7 1.8 1.2 0 1.8-1 1.8-2.3 0-1-.3-1.7-1.5-3 .3 1.5-1.6 2.6-2 3.5Z"],
  shield: ["M12 3l8 3v6c0 4-3.2 7.3-8 9-4.8-1.7-8-5-8-9V6l8-3Z", "m9 12 2 2 4-4"],
  smoke: ["M4 13h16", "M6 17h12", "M8 9h8", "M6 13c0-4 1-7 3-9M18 13c0-4-1-7-3-9", "M10 4c-.5-1 0-2 1-2.5M14 4c.5-1 0-2-1-2.5"],
  "first-aid": ["M9 4h6a1 1 0 0 1 1 1v15H8V5a1 1 0 0 1 1-1Z", "M3 12h18", "M12 8v8M8 12h8"],
  key: ["M15 11a4 4 0 1 0-4 4", "M15 11a4 4 0 0 1-4 4", "M11 15l-3 3m0 0-2-2m2 2 2 2m-2-2 2-2"],
  lock: ["M7 10V7a5 5 0 0 1 10 0v3", "M5 10h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Z"],
  bath: ["M4 12h16", "M4 12v3a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5v-3", "M8 8a3 3 0 0 1 0-6c1.7 0 3 1.3 3 3M8 8c-.8-1.3-3-1-3 .7 0 1.5 1 2.3 1 2.3"],
  home: [
    "M4 11 12 4l8 7",
    "M6 9.5V20h12V9.5",
    "M10 20v-6h4v6",
  ],
  house: ["M3.5 11 12 3.5 20.5 11", "M6 9.5V20h12V9.5", "M10 20v-5.5h4V20", "M15.5 8.5V5.5h2.5"],
  beach: ["M3 18l18-6", "M8 17v-2M12 16v-2M16 15v-2", "M5 20c1 0 1-1 3-1s2 1 4 1 2-1 4-1 2 1 3 1", "M6 13a8 8 0 0 1 12 0", "M6 13l-1.5.8M18 13l1.5.8"],
  "self-checkin": ["M7 10V7a5 5 0 0 1 10 0v3", "M5 10h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1Z", "M12 13v4M10 15h4"],
  couples: ["M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "M14 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z", "M5 21c0-2 1.3-3 3-3s3 1 3 3", "M7 4c-1 1-1 2 0 3M9 4c1 1 1 2 0 3"],
  "arrow-right": ["M4 12h16", "m14 6 6 6-6 6"],
  info: ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "M12 11v5", "M12 8h.01"],
  sparkles: ["M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z", "M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z"],
  suites: ["M6 3h12a1 1 0 0 1 1 1v3H5V4a1 1 0 0 1 1-1Z", "M5 7h14v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7Z", "M9 7V5M15 7V5"],
  elevator: ["M5 3h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z", "M8 8l3-3 3 3M8 16l3 3 3-3"],
  gym: ["M4 9v6M20 9v6M6.5 8.5v7M17.5 8.5v7M8.5 7v10M15.5 7v10M11 5.5v13M13 5.5v13"],
  phone: ["M6 3h4l1.5 5-2 1.5a12 12 0 0 0 5 5l1.5-2 5 1.5v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z"],
  link: ["M9.5 14.5 14.5 9.5", "M11 6.5 13 4.5a4 4 0 0 1 5.7 5.7l-2 2", "M21 10.5 19 12.5A4 4 0 0 1 13.3 6.8l-2 2a4 4 0 0 1 5.7 5.7M13 17.5 11 19.5a4 4 0 0 1-5.7-5.7l2-2"],
  bulk: ["M3 9h18l-1 10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L3 9Z", "M7 9V6a5 5 0 0 1 10 0v3"],
  spray: [
    "M7.5 3.5h5v5.5a4 4 0 0 1-8 0V3.5h3Z",
    "M12.5 9a4 4 0 0 1-8 0",
    "M3 9H1.5M3 12.5h-1.5M3 15.5H1.5",
    "M10 2.5V1",
    "M20 19a2.5 2.5 0 0 1 0-5c1.6 0 3 1 3.5 2.5 1-.5 2.5-.5 3.5 0a2.5 2.5 0 0 1 0 5c-1-.5-2.5-.5-3.5 0-.5-1.5-1.9-2.5-3.5-2.5Z",
    "M20 21c-1.4 0-2-1-2-2 0-1 .6-2 2-2",
  ],
  "circle-check": ["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z", "m8.5 12 2.5 2.5 5-5.5"],
  chat: [
    "M21 12a8 8 0 0 1-8 8H4l2.2-2.6A8 8 0 1 1 21 12Z",
    "M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01",
  ],
  "map-fold": [
    "M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z",
    "M9 4v13M15 6.5v13",
  ],
  tag: [
    "M3 3h9l9 9-9 9-9-9V3Z",
    "M8.5 8.5h.01",
  ],
  fan: [
    "M12 12m-8 0a8 8 0 1 0 16 0 8 8 0 1 0-16 0",
    "M12 12c.6-1.1 3.2-1.4 5-.2 2 1.3.8 4.5-.8 5.8-1.9 1.7-5 .6-5.8-1.3-.6-1.5.2-3.9 1.6-4.3Z",
    "M12 12c-1 1.3-.2 4.8 1.6 6.4",
  ],
  flag: ["M6 3v18", "M6 4h12l-2.5 4L18 12H6"],
  laptop: ["M4 5h16v10H4z", "M8 19h8", "M12 15v4"],
  paw: [
    "M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
    "M5.5 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    "M18.5 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    "M8 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
    "M16 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
  ],
  camera: [
    "M5 8h2.5L9 6h6l1.5 2H19a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z",
    "M12 17a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
  ],
  door: ["M7 4h10a1 1 0 0 1 1 1v15H6V5a1 1 0 0 1 1-1Z", "M12 15h.01"],
  "calendar-x": [
    "M6 5V3M18 5V3M3 9h18",
    "M4 5h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z",
    "m9.5 13 5 5",
    "m14.5 13-5 5",
  ],
  kbd: ["M5 8h14v8H5z", "M8 12h.01M12 12h.01M16 12h.01"],
  verified: [
    "M12 3l2.3.9 2.1-1.1 1.4 2 .1 2.5 2.5.1 1.1 2.1-1.1 2.2 1.1 2.2-2.2 1.1-.1 2.5-2.5.1-1.4 2-2.1-1.1L12 21l-2.3-.9-2.1 1.1-1.4-2-.1-2.5-2.5-.1-1.1-2.1 1.1-2.2-1.1-2.2 2.2-1.1.1-2.5 2.5-.1 1.4-2 2.1 1.1L12 3Z",
    "m8.5 12 2.5 2.5 5-5.5",
  ],
  cake: [
    "M4 20h16v-2a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v2Z",
    "M12 8v3",
    "M12 8c.8.8 2 .7 2.5 0M12 8c-.8.8-2 .7-2.5 0M12 3.5c.9 0 1.5.6 1.5 1.5s-.6 1.5-1.5 1.5S10.5 5.9 10.5 5 11.1 3.5 12 3.5Z",
  ],
  school: ["M2 9l10-5 10 5-2 1M6 11v7l6 3 6-3v-7", "M4 17v-5", "M20 17v-5"],
  grid: [
    "M4 4h5v5H4zM4 15h5v5H4zM15 4h5v5h-5zM15 15h5v5h-5z",
  ],
};

export function Icon({
  name,
  size = 24,
  className = "",
  strokeWidth = 2,
  ...rest
}: {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}) {
  const d = PATHS[name];
  if (!d) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      {d.map((path, i) =>
        path.startsWith("M") ? (
          <path key={i} d={path} />
        ) : (
          <circle key={i} cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
        ),
      )}
    </svg>
  );
}

export function AirbnbLogo({ size = 30, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 1c2 3.2 3.4 5.9 4.2 8.4C21.9 8 24 5.6 27.2 4.3L16 1Zm1.2 30L16 29c1-.3 1.6-1.4 1.6-2.8 0-2.1-8-14.2-8-17.4C9.6 6 12.4 4 16 4s6.4 2 6.4 4.8c0 3.2-8 15.3-8 17.4 0 1.4.6 2.5 1.6 2.8m-1.2 0V31m0-2-1.2 2m6.8-20.3c3.2 1.3 5.3 3.7 7.2 5.4 0-3.8-.8-7.3-2.8-11.1M4.8 4.3C8 5.6 10.1 8 11.8 9.4 12.6 6.9 14 4.2 16 1 8.1 3.3 4.8 4.6 4.8 4.3Z"
        fill="#FF385C"
      />
    </svg>
  );
}

const WREATH_LEAVES: [number, number, number][] = [
  [6.2, 19.2, -35],
  [5.2, 15.6, -65],
  [5, 12, -90],
  [5.4, 8.6, -115],
  [6.8, 5.8, -140],
  [9, 3.8, -160],
];

export function Laurel({ size = 48, className = "" }: { size?: number; className?: string }) {
  const leaves = [...WREATH_LEAVES, ...WREATH_LEAVES.map(([x, y, d]) => [24 - x, y, -d] as [number, number, number])];
  leaves.push([12, 2.2, 180]);
  leaves.push([12, 20.8, 0]);
  return (
    <svg width={size} height={size * 1.8} viewBox="0 0 24 24" className={className} aria-hidden="true">
      {leaves.map(([x, y, deg], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx={1.9}
          ry={4.6}
          fill="currentColor"
          transform={`rotate(${deg} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}

export function StarSolid({
  size = 12,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M15.1 1.58l-4.13 8.88-9.86 1.27a1 1 0 0 0-.54 1.74l7.3 6.57-1.97 9.85a1 1 0 0 0 1.48 1.06l8.62-5 8.63 5a1 1 0 0 0 1.48-1.06l-1.97-9.85 7.3-6.57a1 1 0 0 0-.55-1.73l-9.86-1.28-4.12-8.88a1 1 0 0 0-1.82 0z"
        fill="currentColor"
      />
    </svg>
  );
}