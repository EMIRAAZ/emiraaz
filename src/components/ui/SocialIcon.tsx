import type { SocialLink } from "@/lib/site";

/** Outline brand glyphs for the social links (Instagram, LinkedIn, YouTube) — same 2px stroke style. */
export default function SocialIcon({
  icon,
  className = "size-6",
}: {
  icon: SocialLink["icon"];
  className?: string;
}) {
  const common = { "aria-hidden": true, viewBox: "0 0 24 24", className } as const;

  switch (icon) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <path d="M8 11v5.5" />
          <circle cx="8" cy="7.8" r="1" fill="currentColor" stroke="none" />
          <path d="M12 16.5V11M12 13.6c0-1.6 1-2.6 2.3-2.6s2.2.9 2.2 2.6v2.9" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
          <rect x="2.5" y="5" width="19" height="14" rx="5" />
          {/* Solid play triangle */}
          <path d="M10.2 9.4v5.2l4.4-2.6z" fill="currentColor" />
        </svg>
      );
  }
}
