import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-semibold tracking-[-0.02em] text-accent lg:text-[28px]">
        You May Also Like
      </h2>

      <ol className="mt-6 flex flex-col">
        {posts.map((post, i) => (
          <li key={post.slug} className="pb-5 [&:not(:first-child)]:pt-5">
            <Link href={`/blogs/${post.slug}`} className="group flex gap-4">
              <span className="w-4 shrink-0 pt-px text-[15px] font-medium text-accent">{i + 1}</span>
              <span className="text-[15px] font-medium leading-[1.45] text-black transition-colors group-hover:text-accent">
                {post.title}
              </span>
            </Link>
            {/* Divider — same fading hairline as under the header */}
            <div
              aria-hidden
              className="mt-5 h-px w-full bg-linear-to-r from-transparent via-black/20 to-transparent"
            />
          </li>
        ))}
      </ol>
    </section>
  );
}
