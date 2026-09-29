import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function Vision() {
  return (
    <section className="pt-4 md:pt-10">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>Our Vision</Eyebrow>

        <h2 className="mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-black sm:text-[40px] md:mt-6 lg:text-[52px] lg:leading-[1.3]">
          Building a Smarter
          <br />
          and More Connected Future
        </h2>

        <p className="mt-5 text-base font-light leading-[1.45] text-black sm:text-lg md:mt-6 lg:text-2xl">
          Through innovative technology and customer-focused solutions,
          <br className="hidden md:block" /> we create platforms that add real value to people’s lives.
        </p>
      </Container>
    </section>
  );
}
