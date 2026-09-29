// SEO copy below is taken verbatim from the site's own content (hero + about sections).
export const siteConfig = {
  name: "EMIRAAZ",
  domain: "emiraaz.com",
  url: "https://www.emiraaz.com",
  tagline: "Technology. Real Estate. Tourism",
  description:
    "EMIRAAZ is a technology-driven company building innovative products in real estate and tourism, shaping a smarter and more connected future.",
  founder: "Ashiq Emiraaz",
  logo: {
    src: "/emiraaz-logo.png",
    width: 813,
    height: 120,
  },
} as const;

export type NavLink = {
  label: string;
  href: string;
};

export const mainNav: NavLink[] = [
  { label: "Explore Emiraaz", href: "/explore" },
  { label: "Technology", href: "/technology" },
  { label: "Real Estate", href: "/real-estate" },
  { label: "Founder", href: "/founder" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Platforms", href: "/#platforms" },
  { label: "About", href: "/explore" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

/** Shown under the footer logo, separated by vertical rules. */
export const footerSectors = ["Technology", "Real Estate", "Tourism"];

export type SocialLink = {
  label: string;
  href: string;
  icon: "instagram" | "linkedin" | "youtube";
};

export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://www.instagram.com/emiraazdubai/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/emiraazgroup/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/@emiraaz", icon: "youtube" },
];
