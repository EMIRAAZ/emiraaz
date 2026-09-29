import Link from "next/link";
import BlogCard from "@/components/blogs/BlogCard";
import Eyebrow from "@/components/ui/Eyebrow";
import type { BlogPost } from "@/data/blogs";

/**
 * Mobile: horizontal swipe row (one card + a peek of the next).
 * Tablet: 2 columns. Desktop: 3 columns.
 */
export default function RecommendedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="recommended-heading" className="relative pt-12 md:pt-16">
      {/* Top divider — same fading hairline used across the site */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent"
      />

      <div className="flex items-end justify-between gap-4">
        <div>
          <Eyebrow>Keep Reading</Eyebrow>
          <h2
            id="recommended-heading"
            className="mt-3 text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-4 md:text-[32px] lg:text-[36px]"
          >
            Recommended for You
          </h2>
        </div>
        <Link
          href="/blogs"
          className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-black hover:underline sm:inline-flex"
        >
          View All
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      <div className="-mx-5 mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:px-0 sm:pb-0 md:mt-9 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className={`w-[85%] shrink-0 snap-start sm:w-auto ${i === 2 ? "sm:hidden lg:block" : ""}`}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      <Link
        href="/blogs"
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-black hover:underline sm:hidden"
      >
        View All Articles
        <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12h16M14 6l6 6-6 6" />
        </svg>
      </Link>
    </section>
  );
}
