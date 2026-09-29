import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillLink from "@/components/ui/PillLink";

const headingClass =
  "mt-4 text-[32px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-5 lg:text-[44px] lg:leading-[1.3]";
const bodyClass =
  "mt-5 max-w-[530px] text-base font-light leading-[1.45] text-black sm:text-lg md:mt-6 lg:text-[22px] lg:leading-[1.4]";

export default function AboutFounder() {
  return (
    <section className="pt-16 md:pt-[95px]">
      <Container>
        <div className="grid lg:grid-cols-2">
          {/* About */}
          <div className="pb-12 lg:py-11 lg:pr-12">
            <Eyebrow>About Emiraaz</Eyebrow>
            <h2 className={headingClass}>
              Innovation
              <br />
              Across Industries
            </h2>
            <p className={bodyClass}>
              EMIRAAZ is a forward-thinking company specializing in technology, real estate and
              tourism. We build and operate innovative platforms that simplify experiences, create
              opportunities, and connect people
            </p>
            <div className="mt-6">
              <PillLink href="/explore">Learn More</PillLink>
            </div>
          </div>

          {/* Founder — divider is a top border when stacked, a left border side-by-side */}
          <div className="border-t border-black/25 pt-12 lg:border-t-0 lg:border-l lg:py-11 lg:pl-[69px]">
            <Eyebrow>Our Founder</Eyebrow>
            <h2 className={headingClass}>Ashiq Emiraaz</h2>
            <p className={bodyClass}>
              Founder &amp; CRO of EMIRAAZ, with a vision to build innovative technology-driven
              products that create real value, simplify lives, and shape a smarter future.
            </p>
            <div className="mt-6">
              <PillLink href="/founder" variant="outline">
                Read More
              </PillLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
