import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import RecommendedPosts from "@/components/blogs/detail/RecommendedPosts";
import RelatedPosts from "@/components/blogs/detail/RelatedPosts";
import ShareArticle from "@/components/blogs/detail/ShareArticle";
import ShareSave from "@/components/blogs/detail/ShareSave";
import TableOfContents from "@/components/blogs/detail/TableOfContents";
import {
  formatLongDate,
  getBlogBody,
  getReadingMinutes,
  getRecommendedPosts,
  getRelatedPosts,
  placeholderAuthor,
  placeholderReviewer,
} from "@/data/blogContent";
import { blogPosts } from "@/data/blogs";
import { siteConfig } from "@/lib/site";

// Only the posts listed in data/blogs.ts exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const getPost = (slug: string) => blogPosts.find((post) => post.slug === slug);

export async function generateMetadata(props: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blogs/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/blogs/${post.slug}`,
      images: [{ url: post.image }],
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  };
}

export default async function BlogDetailPage(props: PageProps<"/blogs/[slug]">) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const sections = getBlogBody(post);
  const minutes = getReadingMinutes(sections);
  const related = getRelatedPosts(post);
  const recommended = getRecommendedPosts(post, related);
  const author = placeholderAuthor;
  const reviewer = placeholderReviewer;

  return (
    <article className="pt-8 md:pt-12">
      <Container>
        {/* Header — same width as the article column */}
        <header className="mx-auto max-w-[640px]">
          <p className="text-[13px] font-semibold uppercase tracking-[0.04em] text-black">
            Insights /{" "}
            <Link href="/blogs" className="hover:underline">
              Blog
            </Link>
          </p>

          <h1 className="mt-3 text-[clamp(26px,7.4vw,32px)] font-medium leading-[1.2] tracking-[-0.02em] text-black md:mt-4 md:text-[36px] lg:text-[40px]">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-col gap-4 md:mt-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
            <div className="text-[13px] leading-[1.6] text-black/80 md:text-sm">
              <p>
                By <span className="font-medium text-black">{author.name}</span>
                {author.bio && <>. {author.bio}</>}
              </p>
              <p className="mt-2 flex items-center gap-1.5">
                <span className="font-semibold text-black">Reviewed By:</span>
                <span className="text-black">{reviewer.name}</span>
                <svg aria-label="Verified" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-black">
                  <path d="M12 2.5l2.4 1.8 3-.2.9 2.9 2.5 1.7-1 2.8 1 2.8-2.5 1.7-.9 2.9-3-.2L12 21.5l-2.4-1.8-3 .2-.9-2.9-2.5-1.7 1-2.8-1-2.8 2.5-1.7.9-2.9 3 .2z" />
                  <path d="M8.5 12l2.3 2.3 4.7-4.6" />
                </svg>
              </p>
              <p className="mt-2 text-xs text-black/60 md:text-[13px]">
                Published in Blog on <time dateTime={post.date}>{formatLongDate(post.date)}</time>
                <span aria-hidden className="mx-1.5">•</span>
                {minutes} {minutes === 1 ? "min" : "mins"} read
              </p>
            </div>
            <div className="-ml-2 sm:ml-0">
              <ShareSave slug={post.slug} title={post.title} />
            </div>
          </div>
        </header>

        {/* Cover — wider than the text column */}
        <div className="relative mx-auto mt-7 aspect-[16/10] w-full max-w-[920px] overflow-hidden bg-black/5 md:mt-10">
          <Image src={post.image} alt="" fill priority sizes="(min-width: 1024px) 920px, 100vw" className="object-cover" />
        </div>

        {/* Body — mobile: stacked; desktop: TOC | article | related */}
        <div className="mt-8 flex flex-col gap-10 md:mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,640px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* Both side columns stay in view on desktop while the article scrolls */}
          <aside className="lg:sticky lg:top-8">
            <TableOfContents items={sections} />
          </aside>

          <div className="text-base leading-[1.8] text-black/85 md:text-[17px]">
            {sections.map((section, i) => (
              <section key={section.id} aria-labelledby={section.id} className={i > 0 ? "mt-10" : undefined}>
                <h2 id={section.id} className="scroll-mt-8 text-[22px] font-semibold leading-[1.3] tracking-[-0.01em] text-black md:text-2xl">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, j) => (
                  <p key={j} className="mt-4">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}

            <div className="mt-12">
              <ShareArticle url={`${siteConfig.url}/blogs/${post.slug}`} title={post.title} />
            </div>
          </div>

          <aside className="relative pt-10 lg:sticky lg:top-8 lg:pt-0">
            {/* Mobile/tablet divider above "You May Also Like" — same fading hairline */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent lg:hidden"
            />
            <RelatedPosts posts={related} />
          </aside>
        </div>

        <div className="mt-16 md:mt-20">
          <RecommendedPosts posts={recommended} />
        </div>
      </Container>
    </article>
  );
}
