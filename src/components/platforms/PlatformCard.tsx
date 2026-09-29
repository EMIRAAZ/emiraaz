import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

/**
 * Whole card links to the platform's detail page.
 * Mobile: compact row (icon, name, subtitle, arrow). Tablet up: adds description + "Read More".
 */
export default function PlatformCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/platforms/${product.slug}`}
      aria-label={`${product.name} — ${product.subtitle}`}
      className={`group relative flex items-center gap-4 rounded-lg p-4 transition-shadow hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] md:items-stretch md:gap-5 md:p-6 ${product.cardClass}`}
    >
      <Image
        src={product.icon}
        alt=""
        width={96}
        height={96}
        className="size-14 shrink-0 md:size-[92px]"
      />

      <div className="flex min-w-0 flex-1 flex-col md:pr-9">
        <h2 className="text-lg font-bold tracking-[-0.02em] text-black md:text-[26px]">{product.name}</h2>
        <p className="mt-0.5 text-[11px] uppercase tracking-[0.1em] text-black/60 md:mt-1 md:text-[13px] md:tracking-[0.12em]">
          {product.subtitle}
        </p>
        <p className="mt-2 hidden text-[15px] font-light leading-[1.5] text-black/60 md:block">{product.description}</p>

        <span className="mt-auto hidden items-center gap-2 self-start pt-5 text-xs font-semibold text-black group-hover:underline md:inline-flex">
          Read More
          <svg aria-hidden width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </span>
      </div>

      {/* Arrow: end of the row on mobile, top-right corner from tablet up */}
      <span
        aria-hidden
        className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-black text-black transition-colors group-hover:bg-black group-hover:text-white md:absolute md:top-6 md:right-6"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </Link>
  );
}
