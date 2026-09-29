import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="pt-12 md:pt-[60px]">
      <Container className="flex flex-col items-center text-center">
        <p className="text-sm font-light uppercase tracking-[0.25em] text-black sm:text-lg lg:text-[26px]">
          A Forward Thinking Company
        </p>

        <h1 className="mt-4 text-[36px] font-bold leading-[1.1] tracking-[-0.02em] text-black sm:text-5xl md:mt-[26px] lg:text-[64px] lg:leading-[1.2]">
          Technology.
          <br />
          Real Estate. Tourism.
        </h1>

        <p className="mt-5 max-w-[840px] text-base font-light leading-[1.35] text-black sm:text-lg md:mt-[22px] lg:text-2xl">
          EMIRAAZ is a technology-driven company building innovative products in real estate and
          tourism, shaping a smarter and more connected future
        </p>
      </Container>
    </section>
  );
}
