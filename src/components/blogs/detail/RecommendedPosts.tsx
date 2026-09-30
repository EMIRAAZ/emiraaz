import Image from "next/image";
import Link from "next/link";
import BlogCard from "@/components/blogs/BlogCard";
import Eyebrow from "@/components/ui/Eyebrow";
import { categoryChipClass, categoryLabel, formatBlogDate, type BlogPost } from "@/data/blogs";

/**
 * Mobile: vertical list of compact horizontal cards (image left, category + date top, title below).
 * Tablet: 2 columns. Desktop: 3 columns.
 */
export default function RecommendedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="recommended-heading" className="relative pt-10 md:pt-16">
      {/* Top divider — same fading hairline used across the site */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent"
      />

      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="hidden sm:block">
            <Eyebrow>Keep Reading</Eyebrow>
          </div>
          <h2
            id="recommended-heading"
            className="text-xl font-bold tracking-[-0.02em] text-black sm:mt-3 sm:text-[26px] md:mt-4 md:text-[32px] lg:text-[36px]"
          >
            Recommended for You
          </h2>
        </div>
        <Link
          href="/blogs"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-black hover:underline"
        >
          View All
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </Link>
      </div>

      {/* Mobile: compact horizontal cards matching the reference mockup */}
      <div className="mt-5 flex flex-col gap-3 sm:hidden">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex items-center gap-3 rounded-xl border border-black/[0.06] bg-white p-2.5 shadow-[0_1px_6px_rgba(0,0,0,0.03)] transition-shadow hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <Link
              href={`/blogs/${post.slug}`}
              className="relative h-[80px] w-[110px] shrink-0 overflow-hidden rounded-lg bg-black/5"
              tabIndex={-1}
              aria-hidden
            >
              <Image
                src={post.image}
                alt=""
                fill
                sizes="110px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <div className="flex min-w-0 flex-1 flex-col justify-between self-stretch py-0.5">
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${categoryChipClass[post.category]}`}
                >
                  {categoryLabel[post.category]}
                </span>
                <time dateTime={post.date} className="shrink-0 text-[11px] text-black/50">
                  {formatBlogDate(post.date)}
                </time>
              </div>

              <h3 className="mt-1.5 line-clamp-2 text-[14px] font-semibold leading-[1.35] tracking-[-0.01em] text-black">
                <Link href={`/blogs/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
      </div>

      {/* Tablet & Desktop: grid of full BlogCards */}
      <div className="mt-7 hidden sm:grid sm:grid-cols-2 sm:gap-5 md:mt-9 lg:grid-cols-3">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className={i === 2 ? "sm:hidden lg:block" : ""}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </section>
  );
}
