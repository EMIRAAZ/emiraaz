import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="pt-12 md:pt-[60px]">
      <Container className="flex flex-col items-center text-center">
        <p className="whitespace-nowrap text-[clamp(10px,3.1vw,12px)] font-light uppercase tracking-[0.2em] text-black sm:text-[15px] sm:tracking-[0.25em] lg:text-base">
          A Forward Thinking Company
        </p>

        {/* Font scales with viewport on phones so each line stays on one row (max two lines). */}
        <h1 className="mt-4 text-[clamp(22px,7.6vw,32px)] font-bold leading-[1.1] tracking-[-0.02em] text-black sm:text-5xl md:mt-[26px] lg:text-[52px] lg:leading-[1.15]">
          <span className="whitespace-nowrap">Technology.</span>
          <br />
          <span className="whitespace-nowrap">Real Estate. Tourism.</span>
        </h1>

        <p className="mt-5 max-w-[700px] text-base font-light leading-[1.75] text-black sm:text-lg md:mt-7 lg:mt-8 lg:text-xl lg:leading-[1.8]">
          EMIRAAZ is a technology-driven company building innovative products in real estate and
          tourism, shaping a smarter and more connected future
        </p>
      </Container>
    </section>
  );
}
