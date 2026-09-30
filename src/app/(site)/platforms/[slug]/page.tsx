import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import FeatureTile from "@/components/platforms/FeatureTile";
import { products } from "@/data/products";

export const dynamicParams = false;

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

const getProduct = (slug: string) => products.find((product) => product.slug === slug);

export async function generateMetadata(props: PageProps<"/platforms/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) return {};
  const description = product.detailDescription ?? product.description;
  return {
    title: product.name,
    description,
    alternates: { canonical: `/platforms/${product.slug}` },
    openGraph: { title: product.name, description, url: `/platforms/${product.slug}` },
  };
}

export default async function PlatformDetailPage(props: PageProps<"/platforms/[slug]">) {
  const { slug } = await props.params;
  const product = getProduct(slug);
  if (!product) notFound();

  const external = product.href.startsWith("http");
  const subtitle = product.detailSubtitle ?? product.subtitle;
  const description = product.detailDescription ?? product.description;

  return (
    <section className="pt-8 md:pt-12">
      <Container>
        <Link
          href="/platforms"
          className="inline-flex items-center gap-2 text-sm text-black/60 transition-colors hover:text-black"
        >
          <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 12H4M10 6l-6 6 6 6" />
          </svg>
          Our Platforms
        </Link>

        <article className="mt-5 border-0 p-0 sm:rounded-2xl sm:border sm:border-black/10 sm:p-6 md:mt-6">
          <div className="flex flex-col gap-5 md:flex-row md:gap-7">
            <div className="flex items-center gap-4 md:block">
              <Image
                src={product.icon}
                alt={`${product.name} logo`}
                width={136}
                height={136}
                priority
                className="size-[72px] shrink-0 md:size-[120px] lg:size-[136px]"
              />
              {/* Name sits beside the icon on phones */}
              <h1 className="text-[clamp(28px,8vw,34px)] font-bold leading-[1.05] tracking-[-0.03em] text-black md:hidden">
                {product.name}
              </h1>
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-6">
                <h1 className="hidden text-[48px] font-bold leading-[1.05] tracking-[-0.03em] text-black md:block lg:text-[64px]">
                  {product.name}
                </h1>
                {external && (
                  <a
                    href={product.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden h-11 shrink-0 items-center gap-3 rounded-full bg-black px-5 text-base font-medium text-white transition-colors hover:bg-black/80 md:inline-flex"
                  >
                    Explore
                    <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 12h16M14 6l6 6-6 6" />
                    </svg>
                  </a>
                )}
              </div>

              <p className="text-sm font-light uppercase tracking-[0.08em] text-black/65 md:mt-4 md:text-lg lg:text-[22px]">
                {subtitle}
              </p>
              <p className="mt-3 text-[15px] font-light leading-[1.55] text-black/60 md:text-lg lg:text-xl lg:leading-[1.45]">
                {description}
              </p>

              {external && (
                <a
                  href={product.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex h-11 w-full items-center justify-center gap-3 rounded-full bg-black px-5 text-base font-medium text-white transition-colors hover:bg-black/80 md:hidden"
                >
                  Explore
                  <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12h16M14 6l6 6-6 6" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {product.features && product.features.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 md:mt-8 lg:grid-cols-4">
              {product.features.map((feature) => (
                <FeatureTile key={feature.title} feature={feature} />
              ))}
            </div>
          )}
        </article>
      </Container>
    </section>
  );
}
