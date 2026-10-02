export type Partner = {
  name: string;
  /** Optional short line under the name, e.g. the service they provide. */
  category?: string;
  /** Path to the partner's logo in /public (e.g. "/partners/acme.svg"). An initials badge is shown when omitted. */
  logo?: string;
  /** Placeholder entry — rendered as a logo-only EMIRAAZ tile until the real partner is added. */
  placeholder?: boolean;
};

export type PartnerGroup = {
  id: "technology" | "real-estate" | "tourism";
  eyebrow: string;
  title: string;
  description: string;
  partners: Partner[];
};

export const partnerGroups: PartnerGroup[] = [
  {
    id: "technology",
    eyebrow: "Technology Ecosystem",
    title: "Global Technology Partners",
    description:
      "We work with leading technology and service providers to build, operate, and scale our digital platforms.",
    partners: [
      { name: "Apple", category: "Devices & Ecosystem", logo: "/partners/apple.svg" },
      { name: "Amazon Web Services", category: "Cloud Infrastructure", logo: "/partners/aws.webp" },
      { name: "Meta", category: "Marketing & Growth", logo: "/partners/meta.svg" },
      { name: "Google", category: "Cloud & Marketing", logo: "/partners/google.svg" },
      { name: "GoDaddy", category: "Domains & Domain Services", logo: "/partners/godaddy.svg" },
      { name: "Cloudways", category: "Managed Cloud Hosting", logo: "/partners/cloudways.svg" },
      { name: "Cloudflare", category: "Security & Performance", logo: "/partners/cloudflare.svg" },
      { name: "Microsoft", category: "Productivity & Business Tools", logo: "/partners/microsoft.webp" },
      { name: "Adobe", category: "Design & Creative Tools", logo: "/partners/adobe.webp" },
      { name: "Figma", category: "Design & Collaboration", logo: "/partners/figma.svg" },
    ],
  },
  {
    id: "real-estate",
    eyebrow: "Real Estate Ecosystem",
    title: "Our Real Estate Partners",
    description: "We work with leading real estate developers and industry partners across Dubai and the UAE.",
    partners: [
      { name: "Emaar", logo: "/partners/emaar.webp" },
      { name: "DAMAC Properties", logo: "/partners/damac.webp" },
      { name: "Azizi Developments", logo: "/partners/azizi.webp" },
      { name: "SOBHA Realty", logo: "/partners/sobha.webp" },
      { name: "Ellington Properties", logo: "/partners/ellington.webp" },
      { name: "Meraas", logo: "/partners/meraas.webp" },
      { name: "Nakheel", logo: "/partners/nakheel.webp" },
      { name: "MAG", logo: "/partners/mag.webp" },
      { name: "Binghatti", logo: "/partners/binghatti.webp" },
      { name: "Deyaar", logo: "/partners/deyaar.webp" },
    ],
  },
  {
    id: "tourism",
    eyebrow: "Tourism Ecosystem",
    title: "Our Tourism Partners",
    description:
      "We collaborate with leading tourism destinations and attractions to support Dubai’s growing tourism ecosystem.",
    partners: [
      { name: "Dubai Tourism", category: "Economy & Tourism", logo: "/partners/dubai-tourism.webp" },
      { name: "Visit Dubai", category: "Destination Brand", logo: "/partners/visit-dubai.webp" },
      { name: "Yas Island", category: "Destination", logo: "/partners/yas-island.webp" },
      { name: "Ferrari World Abu Dhabi", category: "Theme Park", logo: "/partners/ferrari-world.svg" },
      { name: "Burj Khalifa", category: "Destination", logo: "/partners/burj-khalifa.svg" },
      { name: "Dubai Mall", category: "Destination", logo: "/partners/dubai-mall.webp" },
      { name: "Ain Dubai", category: "Destination", logo: "/partners/ain-dubai.webp" },
      { name: "Museum of the Future", category: "Destination", logo: "/partners/museum-of-the-future.svg" },
      { name: "Atlantis The Palm", category: "Destination", logo: "/partners/atlantis.webp" },
      { name: "Global Village", category: "Destination", logo: "/partners/global-village-logo.webp" },
    ],
  },
];
