import { useState } from "react";

export default function HostLogo({
  src,
  alt = "",
  size,
}: {
  src: string;
  alt?: string;
  size: number;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span
        aria-hidden="true"
        className="flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0F4A3A] px-1 text-center font-bold tracking-wide text-[#F5F1E6] leading-[1.1]"
        style={{ width: size, height: size, borderRadius: "50%", fontSize: size / 8 }}
      >
        MIRASHYA
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className="rounded-full object-cover"
      style={{ width: size, height: size }}
    />
  );
}