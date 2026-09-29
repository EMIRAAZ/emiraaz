import Link from "next/link";
import { footerNav, footerSectors, siteConfig } from "@/lib/site";
import Container from "./Container";
import FollowJourney from "./FollowJourney";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white pt-12 pb-8 md:pt-[74px] md:pb-11">
      <FollowJourney />

      <Container className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
        {/* Left: logo + sectors (centered on mobile/tablet) */}
        <div className="flex flex-col items-center lg:items-start">
          <Logo className="h-4 md:h-6" />
          <ul className="mt-4 flex items-center justify-center md:mt-5">
            {footerSectors.map((sector, i) => (
              <li
                key={sector}
                className={`text-[13px] leading-4 font-light text-black md:text-base md:leading-[25px] ${
                  i > 0 ? "ml-3 border-l border-black pl-3 md:ml-[27px] md:pl-[27px]" : ""
                }`}
              >
                {sector}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: links + copyright — centered under a rule on mobile, stacked right on desktop */}
        <div className="flex flex-col items-center gap-3 border-t border-black/10 pt-6 text-center md:gap-5 lg:items-end lg:border-t-0 lg:pt-0.5 lg:text-right">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-[31px] lg:justify-end">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[13px] text-black transition-opacity hover:opacity-60 md:text-[15px]">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-xs text-black/60 md:text-[15px] md:text-black">
            Copyright All Rights Reserved © {siteConfig.domain}
          </p>
        </div>
      </Container>
    </footer>
  );
}
