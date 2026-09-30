import Link from "next/link";
import type { BlogPost } from "@/data/blogs";

export default function RelatedPosts({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="text-2xl font-semibold tracking-[-0.02em] text-black lg:text-[28px]">
        You May Also Like
      </h2>

      <ol className="mt-4 flex flex-col lg:mt-6">
        {posts.map((post, i) => (
          <li
            key={post.slug}
            className="[&:not(:first-child)]:pt-3 lg:pb-5 lg:last:pb-0 lg:[&:not(:first-child)]:pt-5"
          >
            <Link href={`/blogs/${post.slug}`} className="group flex gap-4">
              <span className="w-4 shrink-0 pt-px text-[15px] font-medium text-black">{i + 1}</span>
              <span className="text-[15px] font-medium leading-[1.45] text-black transition-opacity group-hover:opacity-70">
                {post.title}
              </span>
            </Link>
            {/* Divider — same fading hairline as under the header */}
            {i < posts.length - 1 && (
              <div
                aria-hidden
                className="mt-3 h-px w-full bg-linear-to-r from-transparent via-black/20 to-transparent lg:mt-5"
              />
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}
