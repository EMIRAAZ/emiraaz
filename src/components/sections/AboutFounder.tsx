import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import PillLink from "@/components/ui/PillLink";

const headingClass =
  "mt-4 text-[clamp(20px,6.7vw,28px)] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-5 md:text-[32px] lg:text-[36px]";
// Top margin is ~3px less than the heading's so the visible gap label→heading equals heading→paragraph
// (the paragraph's taller line-height adds that much space above its first line).
const bodyClass =
  "mt-[13px] text-base font-light leading-[1.7] text-black md:mt-[17px] lg:text-lg";
// Columns are flex so the buttons sit on the same line on desktop, whatever the text length.
const columnClass = "flex flex-col lg:py-8";
const actionClass = "mt-6 lg:mt-auto lg:pt-7";

export default function AboutFounder() {
  return (
    <section className="pt-14 md:pt-[72px]">
      <Container>
        <div className="grid lg:grid-cols-2">
          {/* About */}
          <div className={`${columnClass} pb-10 lg:pr-16`}>
            <Eyebrow>About Emiraaz</Eyebrow>
            <h2 className={headingClass}>
              Innovation
              <br />
              Across Industries
            </h2>
            <p className={`${bodyClass} max-w-[480px]`}>
              EMIRAAZ is a forward-thinking company specializing in technology, real estate and
              tourism. We build and operate innovative platforms that simplify experiences, create
              opportunities, and connect people.
            </p>
            <div className={actionClass}>
              <PillLink href="/about">Learn More</PillLink>
            </div>
          </div>

          {/* Founder */}
          <div className={`${columnClass} relative pt-10 lg:pl-16`}>
            {/* Divider fading out at both ends (same style as the header hairline):
                horizontal above the column when stacked, vertical on its left side-by-side. */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/25 to-transparent lg:inset-x-auto lg:inset-y-0 lg:left-0 lg:h-auto lg:w-px lg:bg-linear-to-b"
            />
            <Eyebrow>Our Founder</Eyebrow>
            <h2 className={headingClass}>
              Ashiq Emiraaz
              <br />
              Founder &amp; CEO
            </h2>
            {/* Same width as About; copy kept to 4 lines so both columns match. */}
            <p className={`${bodyClass} max-w-[480px]`}>
              With a vision to build innovative technology-driven products that create real value,
              simplify lives, and shape a smarter future, he leads EMIRAAZ across technology, real
              estate and tourism.
            </p>
            <div className={actionClass}>
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
