import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function BlogsHero() {
  return (
    <section className="pt-12 md:pt-[60px]">
      <Container>
        <Eyebrow>Our Blogs</Eyebrow>

        <h1 className="mt-3 text-[clamp(20px,6.6vw,32px)] font-bold leading-[1.15] tracking-[-0.02em] text-black md:mt-4 md:text-[40px] lg:text-[48px]">
          Insights. Ideas. Real Value.
        </h1>

        <p className="mt-4 max-w-[860px] text-base font-light leading-[1.5] text-black/55 md:mt-5 md:text-lg lg:text-[22px] lg:leading-[1.45]">
          Explore our latest articles on real estate technology, tourism and industry trends,
          <br className="hidden md:block" /> practical insights to keep you informed and ahead.
        </p>
      </Container>
    </section>
  );
}
