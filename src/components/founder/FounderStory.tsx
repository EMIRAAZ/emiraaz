import Container from "@/components/layout/Container";
import FollowUs from "@/components/ui/FollowUs";
import { founderQuote, founderStory } from "@/data/founder";
import { siteConfig } from "@/lib/site";

export default function FounderStory() {
  return (
    <section className="pt-12 md:pt-16">
      <Container>
        <div className="mx-auto max-w-[960px]">
          {founderStory.map((chapter, i) => (
            <div key={chapter.title} className={i > 0 ? "mt-10 md:mt-14" : undefined}>
              {/* Label with a trailing hairline */}
              <div className="flex items-center gap-3">
                <p className="shrink-0 text-xs uppercase tracking-[0.04em] text-black md:text-sm">{chapter.eyebrow}</p>
                <div aria-hidden className="h-px w-24 bg-linear-to-r from-black/40 to-transparent md:w-36" />
              </div>

              <h2 className="mt-3 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-4 md:text-[30px] lg:text-[32px]">
                {chapter.title}
              </h2>

              {chapter.paragraphs.map((paragraph, j) => (
                <p
                  key={j}
                  className={`text-[15px] font-light leading-[1.7] text-black/60 md:text-base ${j === 0 ? "mt-3 md:mt-4" : "mt-3"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          {/* Quote */}
          <figure className="mt-12 rounded-md bg-[#F1F4FA] px-5 py-8 text-center md:mt-16 md:px-10 md:py-10">
            <div aria-hidden className="mx-auto flex max-w-[340px] items-center gap-3">
              <div className="h-px flex-1 bg-linear-to-r from-transparent to-black/25" />
              <svg viewBox="0 0 24 24" className="size-6 text-[#5B6B8C]" fill="currentColor">
                <path d="M10 6.5C7 7.4 5 9.9 5 13v4.5h5.5V12H8c0-1.8 1-3.2 2.6-3.8zM19 6.5c-3 .9-5 3.4-5 6.5v4.5h5.5V12H17c0-1.8 1-3.2 2.6-3.8z" />
              </svg>
              <div className="h-px flex-1 bg-linear-to-l from-transparent to-black/25" />
            </div>

            <blockquote className="mt-4 text-base font-medium leading-[1.5] text-black md:mt-5 md:text-lg">
              <p>
                “{founderQuote.lines[0]}
                <br className="hidden sm:block" /> {founderQuote.lines[1]}”
              </p>
            </blockquote>

            <div aria-hidden className="mx-auto mt-5 h-px w-28 bg-linear-to-r from-transparent via-black/25 to-transparent md:w-36" />

            <figcaption className="mt-4 text-xs uppercase tracking-[0.04em] text-black/80 md:text-sm">
              {siteConfig.founder}
            </figcaption>
          </figure>

          <div className="mt-12 md:mt-14">
            <FollowUs />
          </div>
        </div>
      </Container>
    </section>
  );
}
