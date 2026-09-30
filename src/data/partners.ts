export type Partner = {
  name: string;
  /** Short line under the name, e.g. the service they provide. */
  category: string;
  /** Path to the partner's logo in /public (e.g. "/partners/acme.svg"). Placeholder badge is shown when omitted. */
  logo?: string;
};

export type PartnerGroup = {
  id: "technology" | "real-estate" | "tourism";
  eyebrow: string;
  title: string;
  description: string;
  partners: Partner[];
};

// PLACEHOLDER PARTNERS — replace each entry with a real partner's name, category and logo file.
// Do not list a real company here unless EMIRAAZ actually partners with them.
const placeholders = (categories: string[]): Partner[] =>
  categories.map((category) => ({ name: "Partner Name", category }));

export const partnerGroups: PartnerGroup[] = [
  {
    id: "technology",
    eyebrow: "Technology Ecosystem",
    title: "Global Technology Partners",
    description:
      "We work with leading technology and service providers to build, operate, and scale our digital platforms.",
    partners: Array.from({ length: 9 }, (_, i) => ({
      name: "EMIRAAZ",
      category: `Technology Ecosystem Partner ${i + 1}`,
    })),
  },
  {
    id: "real-estate",
    eyebrow: "Real Estate Ecosystem",
    title: "Our Real Estate Partners",
    description: "We work with leading real estate developers and industry partners across Dubai and the UAE.",
    partners: Array.from({ length: 9 }, (_, i) => ({
      name: "EMIRAAZ",
      category: `Real Estate Ecosystem Partner ${i + 1}`,
    })),
  },
  {
    id: "tourism",
    eyebrow: "Tourism Ecosystem",
    title: "Our Tourism Partners",
    description:
      "We collaborate with leading tourism destinations and attractions to support Dubai’s growing tourism ecosystem.",
    partners: Array.from({ length: 9 }, (_, i) => ({
      name: "EMIRAAZ",
      category: `Tourism Ecosystem Partner ${i + 1}`,
    })),
  },
];
