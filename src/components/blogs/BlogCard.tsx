import Image from "next/image";
import Link from "next/link";
import { categoryChipClass, categoryLabel, formatBlogDate, type BlogPost } from "@/data/blogs";

export default function BlogCard({ post }: { post: BlogPost }) {
  const href = `/blogs/${post.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-black/[0.04] bg-white shadow-[0_2px_14px_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_28px_rgba(0,0,0,0.09)]">
      <Link href={href} className="relative block aspect-[16/9] overflow-hidden bg-black/5" tabIndex={-1} aria-hidden>
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <span className={`rounded-full px-3.5 py-1.5 text-[13px] font-medium md:text-sm ${categoryChipClass[post.category]}`}>
            {categoryLabel[post.category]}
          </span>
          <time dateTime={post.date} className="text-[13px] text-black/55">
            {formatBlogDate(post.date)}
          </time>
        </div>

        <h2 className="mt-4 line-clamp-2 text-lg font-semibold leading-[1.3] tracking-[-0.015em] text-black md:text-[20px]">
          <Link href={href} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        <p className="mt-2.5 line-clamp-3 text-[15px] leading-[1.55] text-black/50">{post.excerpt}</p>

        <Link
          href={href}
          className="mt-auto inline-flex items-center gap-3 self-start pt-5 text-sm font-semibold text-black"
          aria-label={`Read more: ${post.title}`}
        >
          Read More
          <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
