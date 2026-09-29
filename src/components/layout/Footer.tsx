import CurrentYear from "@/components/ui/CurrentYear";
import { siteConfig } from "@/lib/site";
import Container from "./Container";
import FollowJourney from "./FollowJourney";

export default function Footer() {
  return (
    <footer className="bg-white pt-14 pb-8 md:pt-[88px] md:pb-10 lg:pt-[104px]">
      <FollowJourney />

      {/* Copyright — centered under a fading hairline, same style as the header line */}
      <Container>
        <div className="relative pt-6 text-center md:pt-7">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent"
          />
          <p className="whitespace-nowrap text-[clamp(9px,2.9vw,12px)] leading-[1.7] text-black/60 md:text-sm">
            Copyright ⓒ {siteConfig.foundedYear} - <CurrentYear /> {siteConfig.domain.toUpperCase()}. All
            Rights Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
