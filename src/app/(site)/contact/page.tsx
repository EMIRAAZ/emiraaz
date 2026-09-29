import type { Metadata } from "next";
import EmailCard from "@/components/contact/EmailCard";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import FollowUs from "@/components/ui/FollowUs";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "We're always open to new opportunities, partnerships, and conversations across our platforms. Reach out to EMIRAAZ anytime via email.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="pt-12 md:pt-[60px]">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Contact</Eyebrow>

        <h1 className="mt-3 text-[clamp(30px,9vw,36px)] font-bold leading-[1.15] tracking-[-0.02em] text-black md:mt-4 md:text-[44px] lg:text-[52px]">
          Let’s Build
          <br />
          What’s Next.
        </h1>

        <p className="mt-4 max-w-[600px] text-base font-light leading-[1.7] text-black md:mt-5 md:text-lg lg:text-xl">
          We’re always open to new opportunities, partnerships, and conversations across our platforms.
          Feel free to reach out to us anytime via email.
        </p>

        <div className="mt-8 flex w-full justify-center md:mt-10">
          <EmailCard email={siteConfig.email} />
        </div>

        <div className="mt-12 w-full md:mt-14">
          <FollowUs />
        </div>
      </Container>
    </section>
  );
}
