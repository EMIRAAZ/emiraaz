import type { SocialLink } from "@/lib/site";

/** Brand glyphs for the social links (Instagram, LinkedIn, YouTube). */
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
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
          <circle cx="7.5" cy="7.6" r="1.6" fill="white" />
          <rect x="6.1" y="10" width="2.8" height="8" fill="white" />
          <path
            d="M11 10h2.7v1.2c.5-.8 1.5-1.4 2.8-1.4 2.3 0 3.2 1.5 3.2 3.8V18h-2.8v-4c0-1-.3-1.8-1.3-1.8s-1.6.8-1.6 1.8v4H11z"
            fill="white"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor" />
          <path d="M10 8.8v6.4l5.4-3.2z" fill="white" />
        </svg>
      );
  }
}
