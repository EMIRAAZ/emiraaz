import Image from "next/image";
import type { Product } from "@/data/products";

/**
 * Whole card opens the platform's live site (or app store page) in a new tab.
 * Platforms without a live link yet (href "#") render as a static card marked "Coming soon".
 * Same card on every screen size, with tighter padding and slightly smaller type on phones.
 */
export default function PlatformCard({ product }: { product: Product }) {
  const live = product.href.startsWith("http");
  const Card = live ? "a" : "div";

  return (
    <Card
      {...(live && {
        href: product.href,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `${product.name} — ${product.subtitle} (opens in a new tab)`,
      })}
      className={`group relative flex flex-col justify-between rounded-lg border border-black/[0.08] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.03)] md:p-7 ${live
        ? ""
        : ""
        }`}
    >
      <div>
        {/* Header: app icon + subtitle/name + arrow */}
        <div className="flex items-start justify-between gap-3 md:gap-4">
          <div className="flex min-w-0 items-center gap-3 md:gap-4">
            <div className="relative size-14 shrink-0 overflow-hidden rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.08] md:size-16">
              <Image
                src={product.icon}
                alt=""
                fill
                sizes="64px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="min-w-0">
              <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.08em] text-black/50 md:text-xs">
                {product.subtitle}
              </span>
              <h2 className="mt-0.5 text-xl font-bold tracking-[-0.02em] text-black md:text-2xl">{product.name}</h2>
            </div>
          </div>

          {live && (
            <span
              aria-hidden
              className="inline-flex size-9 shrink-0 items-center justify-center rounded-full border border-black/10 bg-black/[0.03] text-black transition-all duration-300 group-hover:bg-black group-hover:text-white md:size-10"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M8 7h9v9" />
              </svg>
            </span>
          )}
        </div>

        {/* Full description on every screen size */}
        <p className="mt-4 text-sm font-light leading-[1.65] text-black/65 md:mt-5 md:text-[15px]">
          {product.description}
        </p>
      </div>

      {/* Footer */}
      {live ? (
        <div className="mt-5 flex items-center gap-2 pt-1 text-sm font-semibold text-black md:mt-7 md:pt-2">
          <span className="group-hover:underline">Visit Platform</span>
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
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          >
            <path d="M7 17L17 7M8 7h9v9" />
          </svg>
        </div>
      ) : (
        <div className="mt-5 pt-1 md:mt-7 md:pt-2">
          <span className="inline-block rounded-full bg-black/[0.05] px-3 py-1 text-xs font-semibold text-black/55">
            Coming soon
          </span>
        </div>
      )}
    </Card>
  );
}
