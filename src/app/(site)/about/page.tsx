import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import { aboutChapters, aboutIntro } from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description: aboutIntro.text,
  alternates: { canonical: "/about" },
};

const hairline = "h-px bg-linear-to-r from-transparent via-black/15 to-transparent";

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-xs uppercase tracking-[0.04em] text-black md:text-sm">{children}</p>;
}

function ChapterNumber({ n }: { n: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl font-extralight tabular-nums text-accent md:text-[26px]">
        {String(n).padStart(2, "0")}
      </span>
      <span aria-hidden className="h-px w-14 bg-linear-to-r from-accent/60 to-accent/20 lg:w-16" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <section className="pt-12 md:pt-[60px]">
      <Container>
        <div className="mx-auto max-w-[1040px]">
          {/* 01 — intro */}
          <div className="relative flex gap-10 pb-10 md:pb-12">
            <div className="max-w-[640px] flex-1">
              <div className="flex items-center gap-3">
                <Label>{aboutIntro.eyebrow}</Label>
                <span aria-hidden className="h-px w-24 bg-linear-to-r from-black/40 to-transparent md:w-28" />
              </div>
              <h1 className="mt-3 text-[clamp(30px,9vw,36px)] leading-[1.15] tracking-[-0.02em] text-black md:mt-4 md:text-[40px] lg:text-[44px]">
                <span className="block font-bold">{aboutIntro.titleBold}</span>
                <span className="block font-light">{aboutIntro.titleLight}</span>
              </h1>
              <p className="mt-4 text-[15px] font-light leading-[1.65] text-black/60 md:mt-5 md:text-base">
                {aboutIntro.text}
              </p>
            </div>

            {/* Large faint "01" — mobile & tablet */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-0 -top-1 select-none text-[64px] font-extralight leading-none tracking-[-0.04em] text-[#E3E7F7] sm:text-[88px] lg:hidden"
            >
              01
            </span>

            {/* Large faint "01" — desktop only */}
            <div className="relative hidden w-[240px] shrink-0 justify-end pl-10 lg:flex">
              <span
                aria-hidden
                className="absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-black/15 to-transparent"
              />
              <span aria-hidden className="text-[112px] font-extralight leading-none tracking-[-0.04em] text-[#E3E7F7]">
                01
              </span>
            </div>
          </div>

          {/* 02–06 — chapters */}
          {aboutChapters.map((chapter, i) => (
            <div key={chapter.eyebrow}>
              <div aria-hidden className={hairline} />
              <div className="py-8 md:grid md:grid-cols-[150px_1fr] md:gap-x-4 md:py-10">
                <div className="md:pt-0.5">
                  <ChapterNumber n={i + 2} />
                </div>
                <div className="mt-3 md:mt-0">
                  <Label>{chapter.eyebrow}</Label>
                  <h2 className="mt-2 text-[24px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-3 md:text-[28px]">
                    {chapter.title[0]}
                    <br />
                    {chapter.title[1]}
                  </h2>
                  {chapter.paragraphs.map((paragraph, j) => (
                    <p
                      key={j}
                      className={`text-[15px] font-light leading-[1.65] text-black/60 md:text-base ${j === 0 ? "mt-4 md:mt-5" : "mt-3"}`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
