// SEO copy below is taken verbatim from the site's own content (hero + about sections).
export const siteConfig = {
  name: "EMIRAAZ",
  domain: "emiraaz.com",
  foundedYear: 2019,
  url: "https://www.emiraaz.com",
  tagline: "Technology. Real Estate. Tourism.",
  description:
    "EMIRAAZ is a technology-driven company building innovative products in real estate and tourism, shaping a smarter and more connected future.",
  founder: "Ashiq Emiraaz",
  email: "hello@emiraaz.com",
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

// Only pages that exist. Add a page here once it's built.
export const mainNav: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Platforms", href: "/platforms" },
  { label: "Founder", href: "/founder" },
  { label: "Partners", href: "/partners" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export const footerNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Our Platforms", href: "/#platforms" },
  { label: "About", href: "/about" },
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
