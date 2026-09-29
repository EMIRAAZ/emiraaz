export type Product = {
  name: string;
  /** Two-line tagline shown under the name. */
  tagline: [string, string];
  icon: string;
  href: string;
  /** Position on desktop (4 columns). The array order is the mobile order. */
  desktopOrder: 1 | 2 | 3 | 4;
};

export const products: Product[] = [
  {
    name: "PropertySeller",
    tagline: ["Real Estate", "Platform"],
    icon: "/products/propertyseller.webp",
    href: "https://propertyseller.com",
    desktopOrder: 1,
  },
  {
    name: "HolidayInDubai",
    tagline: ["Tourism", "Platform"],
    icon: "/products/holidayindubai.webp",
    href: "https://holidayindubai.com/",
    desktopOrder: 3,
  },
  {
    name: "PS AGENT",
    tagline: ["Agent", "Application"],
    icon: "/products/ps-agent.webp",
    href: "https://apps.apple.com/us/app/ps-agent/id6741741558",
    desktopOrder: 2,
  },
  {
    name: "HID PARTNER",
    tagline: ["Partner", "Application"],
    icon: "/products/hid-partner.webp",
    href: "#",
    desktopOrder: 4,
  },
];
