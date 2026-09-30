import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

/**
 * Whole card links to the platform's detail page.
 * Mobile: compact row (icon, name, subtitle, arrow). Tablet up: adds description + "Read More".
 */
export default function PlatformCard({ product }: { product: Product }) {
  return (
    <>
      {/* Mobile: exact original compact row */}
      <Link
        href={`/platforms/${product.slug}`}
        aria-label={`${product.name} — ${product.subtitle}`}
        className={`group relative flex items-center gap-4 rounded-lg p-4 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] md:hidden ${product.cardClass}`}
      >
        <Image
          src={product.icon}
          alt=""
          width={96}
          height={96}
          className="size-14 shrink-0"
        />

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold tracking-[-0.02em] text-black">{product.name}</h2>
          <p className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-black/60">
            {product.subtitle}
          </p>
        </div>

        <span
          aria-hidden
          className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-black text-black transition-colors group-hover:bg-black group-hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </Link>

      {/* Tablet & Desktop: redesigned modern card */}
      <Link
        href={`/platforms/${product.slug}`}
        aria-label={`${product.name} — ${product.subtitle}`}
        className="group relative hidden md:flex flex-col justify-between rounded-2xl border border-black/[0.08] bg-white p-7 shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-black/20 hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)]"
      >
        <div>
          {/* Header: App icon + Title/Subtitle + Arrow Button */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.08]">
                <Image
                  src={product.icon}
                  alt=""
                  fill
                  sizes="64px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="min-w-0">
                <span className="inline-block text-xs font-semibold uppercase tracking-[0.08em] text-black/50">
                  {product.subtitle}
                </span>
                <h2 className="mt-0.5 text-2xl font-bold tracking-[-0.02em] text-black">
                  {product.name}
                </h2>
              </div>
            </div>

            <span
              aria-hidden
              className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black transition-all duration-300 group-hover:bg-black group-hover:text-white group-hover:translate-x-0.5"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* Description */}
          <p className="mt-5 text-[15px] font-light leading-[1.65] text-black/65">
            {product.description}
          </p>
        </div>

        {/* Footer */}
        <div className="mt-7 flex items-center gap-2 pt-2 text-sm font-semibold text-black">
          <span className="group-hover:underline">Explore Platform</span>
          <svg
            aria-hidden
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </>
  );
}
