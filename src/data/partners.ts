export type Partner = {
  name: string;
  /** Short line under the name, e.g. the service they provide. */
  category: string;
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
    // TODO: logos still needed for Amazon Web Services, Microsoft and Adobe (official brand files).
    partners: [
      { name: "Apple", category: "Devices & Ecosystem", logo: "/partners/apple.svg" },
      { name: "Amazon Web Services", category: "Cloud Infrastructure" },
      { name: "Meta", category: "Marketing & Growth", logo: "/partners/meta.svg" },
      { name: "Google", category: "Cloud & Marketing", logo: "/partners/google.svg" },
      { name: "GoDaddy", category: "Domains & Domain Services", logo: "/partners/godaddy.svg" },
      { name: "Cloudways", category: "Managed Cloud Hosting", logo: "/partners/cloudways.svg" },
      { name: "Cloudflare", category: "Security & Performance", logo: "/partners/cloudflare.svg" },
      { name: "Microsoft", category: "Productivity & Business Tools" },
      { name: "Adobe", category: "Design & Creative Tools" },
      { name: "Figma", category: "Design & Collaboration", logo: "/partners/figma.svg" },
    ],
  },
  {
    id: "real-estate",
    eyebrow: "Real Estate Ecosystem",
    title: "Our Real Estate Partners",
    description: "We work with leading real estate developers and industry partners across Dubai and the UAE.",
    // TODO: more real estate partners to be added (Ellington, Meraas, Nakheel, MAG, Deyaar, Binghatti…).
    partners: [
      { name: "Emaar", category: "Developer", logo: "/partners/emaar.webp" },
      { name: "DAMAC Properties", category: "Developer", logo: "/partners/damac.webp" },
      { name: "Azizi Developments", category: "Developer", logo: "/partners/azizi.webp" },
      { name: "SOBHA Realty", category: "Developer", logo: "/partners/sobha.webp" },
    ],
  },
  {
    id: "tourism",
    eyebrow: "Tourism Ecosystem",
    title: "Our Tourism Partners",
    description:
      "We collaborate with leading tourism destinations and attractions to support Dubai’s growing tourism ecosystem.",
    // TODO: official logo files needed for all tourism partners (drop into /public/partners and set `logo`).
    partners: [
      { name: "Dubai Tourism", category: "Department of Economy and Tourism" },
      { name: "Visit Dubai", category: "Destination Brand" },
      { name: "Yas Island", category: "Destination" },
      { name: "Ferrari World Abu Dhabi", category: "Theme Park" },
      { name: "Burj Khalifa", category: "Destination" },
      { name: "Dubai Mall", category: "Destination" },
      { name: "Ain Dubai", category: "Destination" },
      { name: "Museum of the Future", category: "Destination" },
      { name: "Atlantis The Palm", category: "Destination" },
      { name: "Global Village", category: "Destination" },
    ],
  },
];
