export const siteConfig = {
  name: "Emiraaz",
  domain: "emiraaz.com",
  description: "Emiraaz — technology and real estate.",
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
