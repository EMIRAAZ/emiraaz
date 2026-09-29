import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import PartnerGroups from "@/components/partners/PartnerGroups";
import Eyebrow from "@/components/ui/Eyebrow";

const description =
  "We work with leading technology providers, real estate developers, and tourism destinations to strengthen our ecosystem and create better experiences through our products.";

export const metadata: Metadata = {
  title: "Our Partners",
  description,
  alternates: { canonical: "/partners" },
};

export default function PartnersPage() {
  return (
    <>
      <section className="pt-12 md:pt-[60px]">
        <Container className="flex flex-col items-center text-center">
          <Eyebrow>Our Partners</Eyebrow>

          <h1 className="mt-3 text-[clamp(28px,8.4vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] text-black md:mt-4 md:text-[44px] lg:text-[52px]">
            Building Through
            <br />
            Trusted Ecosystems.
          </h1>

          <p className="mt-4 max-w-[640px] text-base font-light leading-[1.7] text-black md:mt-5 md:text-lg lg:text-xl">
            {description}
          </p>
        </Container>
      </section>
      <PartnerGroups />
    </>
  );
}
