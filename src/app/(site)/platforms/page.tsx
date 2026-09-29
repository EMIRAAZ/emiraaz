import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PlatformCard from "@/components/platforms/PlatformCard";
import Eyebrow from "@/components/ui/Eyebrow";
import { products } from "@/data/products";
import { footerSectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Platforms",
  description:
    "Each platform is designed to create real value in its industry, powered by technology and a customer-focused approach.",
  alternates: { canonical: "/platforms" },
};

export default function PlatformsPage() {
  return (
    <section className="pt-12 md:pt-[60px]">
      <Container>
        {/* Label with a trailing hairline */}
        <div className="flex items-center gap-4">
          <Eyebrow className="shrink-0">Our Platforms</Eyebrow>
          <div aria-hidden className="h-px w-24 bg-linear-to-r from-black/40 to-transparent md:w-44" />
        </div>

        <h1 className="mt-3 text-[clamp(28px,8vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] text-black md:mt-4 md:text-[44px] lg:text-[48px]">
          Building Solutions for Real Needs.
        </h1>

        <p className="mt-4 max-w-[880px] text-base font-light leading-[1.5] text-black/55 md:mt-5 md:text-lg lg:text-[22px] lg:leading-[1.45]">
          Each platform is designed to create real value in its industry, powered by technology
          <br className="hidden lg:block" /> and a customer-focused approach.
        </p>

        {/* Platforms — 1 column on phones, 2 from tablet up */}
        <div className="mt-8 grid gap-3.5 md:mt-10 md:grid-cols-2">
          {products.map((product) => (
            <PlatformCard key={product.name} product={product} />
          ))}
        </div>

        {/* Vision */}
        <div className="mt-3.5 rounded-lg bg-[#F1F4FA] px-5 py-10 text-center md:px-10 md:py-12">
          <Eyebrow>Our Vision</Eyebrow>
          <h2 className="mt-3 text-[22px] font-bold leading-[1.25] tracking-[-0.02em] text-black md:mt-4 md:text-[28px]">
            Building a Smarter and More Connected Future.
          </h2>
          <p className="mx-auto mt-3 max-w-[800px] text-[15px] leading-[1.55] text-black md:mt-4 md:text-lg">
            Through technology, innovation, and customer-focused solutions, we create platforms that simplify
            everyday experiences, create opportunities, and deliver meaningful value.
          </p>

          <ul className="mt-5 flex items-center justify-center md:mt-6">
            {footerSectors.map((sector, i) => (
              <li
                key={sector}
                className={`relative text-[13px] leading-5 font-light text-black md:text-sm ${
                  i > 0 ? "ml-5 pl-5 md:ml-6 md:pl-6" : ""
                }`}
              >
                {i > 0 && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -inset-y-1.5 left-0 w-px bg-linear-to-b from-transparent via-black/45 to-transparent"
                  />
                )}
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
