import type { Metadata } from "next";
import FounderStory from "@/components/founder/FounderStory";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.founder} — Founder & CEO`,
  description: `${siteConfig.founder}, Founder & CEO of EMIRAAZ. Turning ideas into meaningful products for a better and more connected tomorrow.`,
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return (
    <>
      <section className="pt-12 md:pt-[60px]">
        <Container className="flex flex-col items-center text-center">
          <Eyebrow>Founder</Eyebrow>

          <h1 className="mt-3 text-[clamp(32px,10vw,40px)] font-bold leading-[1.15] tracking-[-0.02em] text-black md:mt-4 md:text-[48px] lg:text-[56px]">
            {siteConfig.founder}
          </h1>

          <p className="mt-4 text-sm uppercase tracking-[0.02em] text-black md:mt-6 md:text-lg">
            Founder &amp; CEO, {siteConfig.name}
          </p>

          {/* Short divider — same fading hairline used across the site */}
          <div
            aria-hidden
            className="mt-6 h-px w-28 bg-linear-to-r from-transparent via-black/30 to-transparent md:mt-7 md:w-36"
          />

          <p className="mt-6 max-w-[420px] text-[15px] font-light leading-[1.6] text-black md:mt-7 md:text-base">
            Turning ideas into meaningful products
            <br />
            for a better and more connected tomorrow.
          </p>
        </Container>
      </section>
      <FounderStory />
    </>
  );
}
