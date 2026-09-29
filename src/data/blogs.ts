export type BlogCategorySlug = "real-estate" | "technology" | "tourism" | "company-updates";

export type BlogCategory = {
  label: string;
  /** URL-friendly id, "all" shows every post. */
  slug: BlogCategorySlug | "all";
};

export const blogCategories: BlogCategory[] = [
  { label: "All", slug: "all" },
  { label: "Real Estate", slug: "real-estate" },
  { label: "Technology", slug: "technology" },
  { label: "Tourism", slug: "tourism" },
  { label: "Company Updates", slug: "company-updates" },
];

export const categoryLabel: Record<BlogCategorySlug, string> = {
  "real-estate": "Real Estate",
  technology: "Technology",
  tourism: "Tourism",
  "company-updates": "Company Updates",
};

/** Pastel chip colours per category (literal classes so Tailwind generates them). */
export const categoryChipClass: Record<BlogCategorySlug, string> = {
  "real-estate": "bg-[#EEF2FF] text-[#4F6BD8]",
  technology: "bg-[#F0E8FC] text-[#7C4DCC]",
  tourism: "bg-[#FDEBD3] text-[#C57A34]",
  "company-updates": "bg-[#E3F6E5] text-[#3E9A52]",
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategorySlug;
  /** ISO date (YYYY-MM-DD). */
  date: string;
  image: string;
};

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`;

const EXCERPT =
  "Explore our latest articles on real estate technology, tourism and industry trends, practical insights to keep you informed and ahead.";

// PLACEHOLDER CONTENT — dummy posts for layout only. Replace with real articles before launch.
const placeholderPosts: (Omit<BlogPost, "excerpt"> & { excerpt?: string })[] = [
  { slug: "why-dubai-attracts-global-investors", title: "Why Dubai Continues to Attract Global Real Estate Investors", excerpt: "Discover the key factors that make Dubai one of the most attractive real estate markets in the world.", category: "real-estate", date: "2026-03-20", image: unsplash("photo-1512453979798-5ea266f8880c") },
  { slug: "future-of-proptech-in-uae", title: "The Future Of PropTech In The UAE Property Market", category: "technology", date: "2026-03-18", image: unsplash("photo-1518770660439-4636190af475") },
  { slug: "top-experiences-in-dubai", title: "Top Experiences Every Visitor Should Try In Dubai", category: "tourism", date: "2026-03-15", image: unsplash("photo-1518684079-3c830dcef090") },
  { slug: "emiraaz-platform-milestones", title: "EMIRAAZ Platform Milestones And What Comes Next", category: "company-updates", date: "2026-03-12", image: unsplash("photo-1522202176988-66273c2fd55f") },
  { slug: "off-plan-vs-ready-property", title: "Off-Plan vs Ready Property: What Buyers Should Know", category: "real-estate", date: "2026-03-10", image: unsplash("photo-1600596542815-ffad4c1539a9") },
  { slug: "smart-homes-in-the-gulf", title: "How Smart Home Technology Is Changing Gulf Living", category: "technology", date: "2026-03-07", image: unsplash("photo-1451187580459-43490279c0fa") },
  { slug: "planning-a-family-holiday", title: "Planning The Perfect Family Holiday In The Emirates", category: "tourism", date: "2026-03-05", image: unsplash("photo-1507525428034-b723cf961d3e") },
  { slug: "luxury-villa-market-trends", title: "Luxury Villa Market Trends To Watch This Year", category: "real-estate", date: "2026-03-02", image: unsplash("photo-1613490493576-7fde63acd811") },
  { slug: "new-partner-program", title: "Introducing Our New Partner Program For Local Businesses", category: "company-updates", date: "2026-02-27", image: unsplash("photo-1497366216548-37526070297c") },
  { slug: "ai-in-property-search", title: "How AI Is Making Property Search Faster And Smarter", category: "technology", date: "2026-02-24", image: unsplash("photo-1580674684081-7617fbf3d745") },
  { slug: "desert-adventures-guide", title: "A Beginner's Guide To Desert Adventures Near Dubai", category: "tourism", date: "2026-02-20", image: unsplash("photo-1546412414-e1885259563a") },
  { slug: "rental-yields-explained", title: "Rental Yields Explained For First-Time Investors", category: "real-estate", date: "2026-02-17", image: unsplash("photo-1560518883-ce09059eeffa") },
  { slug: "digital-payments-for-travel", title: "Digital Payments Are Reshaping How Tourists Travel", category: "technology", date: "2026-02-13", image: unsplash("photo-1488646953014-85cb44e25828") },
  { slug: "team-growth-2026", title: "Growing Our Team To Build Better Platforms In 2026", category: "company-updates", date: "2026-02-10", image: unsplash("photo-1522202176988-66273c2fd55f") },
  { slug: "waterfront-living", title: "Why Waterfront Living Remains In High Demand", category: "real-estate", date: "2026-02-06", image: unsplash("photo-1582407947304-fd86f028f716") },
  { slug: "hidden-gems-for-travellers", title: "Hidden Gems Travellers Often Miss In The UAE", category: "tourism", date: "2026-02-03", image: unsplash("photo-1526495124232-a04e1849168c") },
  { slug: "virtual-property-tours", title: "Virtual Property Tours And The Future Of Viewings", category: "technology", date: "2026-01-30", image: unsplash("photo-1486406146926-c627a92ad1ab") },
  { slug: "commercial-real-estate-outlook", title: "Commercial Real Estate Outlook For The Year Ahead", category: "real-estate", date: "2026-01-27", image: unsplash("photo-1600585154340-be6161a56a0c") },
  { slug: "holidayindubai-new-features", title: "New Features Coming To Our Tourism Platform", category: "company-updates", date: "2026-01-23", image: unsplash("photo-1518684079-3c830dcef090") },
  { slug: "best-time-to-visit-dubai", title: "The Best Time Of Year To Visit Dubai", category: "tourism", date: "2026-01-20", image: unsplash("photo-1512453979798-5ea266f8880c") },
];

export const blogPosts: BlogPost[] = placeholderPosts.map((post) => ({ ...post, excerpt: post.excerpt ?? EXCERPT }));

/** "Mar 20, 2026" — fixed locale/timezone so server and client render the same text. */
export function formatBlogDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
