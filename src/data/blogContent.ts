import { blogPosts, categoryLabel, type BlogCategorySlug, type BlogPost } from "./blogs";

export type BlogSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type BlogPerson = {
  name: string;
  bio?: string;
};

// PLACEHOLDER CONTENT — generic author, reviewer and article body so the detail page can be
// designed. Replace with each article's real author, reviewer and body before launch.
export const placeholderAuthor: BlogPerson = {
  name: "EMIRAAZ Editorial Team",
  bio: "The EMIRAAZ editorial team writes about real estate, technology and tourism, sharing practical insights for buyers, investors, travellers and partners.",
};

export const placeholderReviewer: BlogPerson = { name: "EMIRAAZ Editorial Desk" };

const topicPhrase: Record<BlogCategorySlug, string> = {
  "real-estate": "the property market",
  technology: "digital products and platforms",
  tourism: "travel and hospitality",
  "company-updates": "our platforms and community",
};

export function getBlogBody(post: BlogPost): BlogSection[] {
  const topic = topicPhrase[post.category];
  const category = categoryLabel[post.category].toLowerCase();

  return [
    {
      id: "overview",
      heading: "Overview",
      paragraphs: [
        `${post.excerpt} In this article we look at what is shaping ${topic} today and why it matters for the people who depend on it every day.`,
        `Change in ${category} rarely happens overnight. It is usually the result of many small shifts in expectations, tools and habits that add up over time. Understanding those shifts early makes it easier to plan with confidence rather than react under pressure.`,
      ],
    },
    {
      id: "key-trends",
      heading: "Key Trends to Watch",
      paragraphs: [
        `Several themes keep coming up when we speak with customers and partners across ${topic}: clearer information, simpler journeys and more trust at every step. People want to compare options quickly, understand the details that matter and act without friction.`,
        `Technology plays a growing role in meeting those expectations. Better search, richer listings, faster communication and transparent processes all help people make decisions with less effort and more certainty.`,
      ],
    },
    {
      id: "what-it-means",
      heading: "What This Means for You",
      paragraphs: [
        `Whether you are a buyer, an investor, a traveller or a business partner, the practical takeaway is the same: take time to understand your goals, compare your options carefully and rely on sources that are clear and up to date.`,
        `Small steps such as setting a realistic budget, asking the right questions and reviewing the full picture before committing can make a meaningful difference to the outcome.`,
      ],
    },
    {
      id: "conclusion",
      heading: "Conclusion",
      paragraphs: [
        `${topic.charAt(0).toUpperCase()}${topic.slice(1)} will keep evolving, and staying informed is the best way to benefit from those changes. At EMIRAAZ we will keep sharing practical insights to help you stay informed and ahead.`,
      ],
    },
  ];
}

export function getReadingMinutes(sections: BlogSection[]) {
  const words = sections.flatMap((s) => [s.heading, ...s.paragraphs]).join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Up to `limit` other posts: same category first, then the most recent. */
export function getRelatedPosts(post: BlogPost, limit = 5) {
  const others = blogPosts.filter((p) => p.slug !== post.slug);
  const sameCategory = others.filter((p) => p.category === post.category);
  const rest = others.filter((p) => p.category !== post.category);
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Up to `limit` recent posts that aren't the current one or already listed in `exclude`. */
export function getRecommendedPosts(post: BlogPost, exclude: BlogPost[], limit = 3) {
  const skip = new Set([post.slug, ...exclude.map((p) => p.slug)]);
  return [...blogPosts]
    .filter((p) => !skip.has(p.slug))
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

/** "April 20, 2026" */
export function formatLongDate(iso: string) {
  return new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
}
