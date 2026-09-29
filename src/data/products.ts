export type Product = {
  name: string;
  /** Two-line tagline shown under the name. */
  tagline: [string, string];
  icon: string;
  href: string;
};

export const products: Product[] = [
  {
    name: "PropertySeller",
    tagline: ["Real Estate", "Platform"],
    icon: "/products/propertyseller.webp",
    href: "https://propertyseller.com",
  },
  {
    name: "PS AGENT",
    tagline: ["Agent", "Application"],
    icon: "/products/ps-agent.webp",
    href: "#",
  },
  {
    name: "HolidayInDubai",
    tagline: ["Tourism", "Platform"],
    icon: "/products/holidayindubai.webp",
    href: "#",
  },
  {
    name: "HID PARTNER",
    tagline: ["Partner", "Application"],
    icon: "/products/hid-partner.webp",
    href: "#",
  },
];
