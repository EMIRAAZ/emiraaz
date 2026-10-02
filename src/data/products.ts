export type Product = {
  /** Stable identifier for the product. */
  slug: string;
  name: string;
  /** Two-line tagline shown under the name. */
  tagline: [string, string];
  icon: string;
  /** Live site or app store link; "#" means not launched yet. */
  href: string;
  /** Position on desktop (4 columns). The array order is the mobile order. */
  desktopOrder: 1 | 2 | 3 | 4;
  /** Our Platforms page: uppercase line under the name. */
  subtitle: string;
  /** Our Platforms page: short description (copy from the design). */
  description: string;
  /** Our Platforms page: card background tint (literal class so Tailwind generates it). */
  cardClass: string;
};

export const products: Product[] = [
  {
    slug: "propertyseller",
    name: "PropertySeller",
    tagline: ["Real Estate", "Platform"],
    icon: "/products/propertyseller.webp",
    href: "https://propertyseller.com",
    desktopOrder: 1,
    subtitle: "Real Estate Sales Platform",
    description:
      "A real estate sales platform focused on helping buyers discover properties and connect with the right opportunities.",
    cardClass: "bg-[#F1F4FA]",
  },
  {
    slug: "holidayindubai",
    name: "HolidayInDubai",
    tagline: ["Tourism", "Platform"],
    icon: "/products/holidayindubai.webp",
    href: "https://holidayindubai.com/",
    desktopOrder: 3,
    subtitle: "Tourism Platform",
    description:
      "A digital platform to help people discover and experience Dubai, with a wide range of activities, attractions, and experiences.",
    cardClass: "bg-[#FAF3F0]",
  },
  {
    slug: "ps-agent",
    name: "PS AGENT",
    tagline: ["Agent", "Application"],
    icon: "/products/ps-agent.webp",
    href: "https://apps.apple.com/us/app/ps-agent/id6741741558",
    desktopOrder: 2,
    subtitle: "Real Estate Agent Application",
    description:
      "An application for real estate professionals to manage their sales activities, leads, and clients from one place.",
    cardClass: "bg-[#F1F4FA]",
  },
  {
    slug: "hid-partner",
    name: "HID PARTNER",
    tagline: ["Partner", "Application"],
    icon: "/products/hid-partner.webp",
    href: "#",
    desktopOrder: 4,
    subtitle: "Tourism Partner Application",
    description:
      "An application for tourism and experience partners to connect their services with the HolidayInDubai ecosystem.",
    cardClass: "bg-[#FBF0F4]",
  },
];
