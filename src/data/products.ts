export type FeatureTone = "blue" | "green" | "orange" | "purple";
export type FeatureIcon = "home" | "shield" | "check" | "pin";

export type PlatformFeature = {
  title: string;
  description: string;
  icon: FeatureIcon;
  tone: FeatureTone;
};

export type Product = {
  /** URL segment for /platforms/[slug]. */
  slug: string;
  name: string;
  /** Two-line tagline shown under the name. */
  tagline: [string, string];
  icon: string;
  href: string;
  /** Position on desktop (4 columns). The array order is the mobile order. */
  desktopOrder: 1 | 2 | 3 | 4;
  /** Our Platforms page: uppercase line under the name. */
  subtitle: string;
  /** Our Platforms page: short description (copy from the design). */
  description: string;
  /** Our Platforms page: card background tint (literal class so Tailwind generates it). */
  cardClass: string;
  /** Platform detail page: overrides for the uppercase line and description. */
  detailSubtitle?: string;
  detailDescription?: string;
  /** Platform detail page: feature tiles (copy from the design). */
  features?: PlatformFeature[];
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
    detailSubtitle: "Real Estate Buying & Selling Platform",
    detailDescription:
      "A real estate sales platform focused on helping buyers discover properties and connect with the right opportunities. PropertySeller offers a wide range of properties including off-plan projects, off-plan resale, secondary properties, and land across all emirates.",
    features: [
      {
        title: "Wide Property Selection",
        description: "Explore off-plan, off-plan resale, secondary properties, and land across all emirates.",
        icon: "home",
        tone: "blue",
      },
      {
        title: "Verified Listings",
        description: "Accurate and up-to-date property information from trusted developers and sources.",
        icon: "shield",
        tone: "green",
      },
      {
        title: "Right Opportunities",
        description: "Helps buyers discover the right properties based on their needs and preferences.",
        icon: "check",
        tone: "orange",
      },
      {
        title: "All Emirates",
        description: "Properties and projects from Dubai and across the UAE in one platform.",
        icon: "pin",
        tone: "purple",
      },
    ],
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
