import Eyebrow from "@/components/ui/Eyebrow";
import SocialIcon from "@/components/ui/SocialIcon";
import { socialLinks } from "@/lib/site";
import Container from "./Container";

function ArrowUpRight() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="absolute top-1/2 left-full ml-1 size-3 -translate-y-1/2 transition-transform sm:static sm:ml-0 sm:size-3.5 sm:translate-y-0 lg:size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

/** "Stay Connected" social block shown at the top of the footer on every page. */
export default function FollowJourney() {
  return (
    <section aria-labelledby="follow-heading">
      <Container>
        <div className="relative flex flex-col items-center pt-12 pb-12 text-center md:pt-[72px] md:pb-14 lg:pb-16">
          {/* Top divider — same fading hairline as under the header */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-black/20 to-transparent"
          />
          <Eyebrow>Stay Connected</Eyebrow>

          <h2
            id="follow-heading"
            className="mt-3 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-5 md:text-[32px] lg:text-[36px]"
          >
            Follow the Journey
          </h2>

          <p className="mt-4 max-w-[680px] text-[15px] font-light leading-[1.7] text-black sm:text-base md:mt-5 lg:text-xl lg:leading-[1.8]">
            Stay connected with EMIRAAZ for company updates, new platforms, technology, real estate
            and what we’re building next.
          </p>

          <ul className="mt-8 flex w-full max-w-[840px] md:mt-10 lg:max-w-[960px]">
            {socialLinks.map((social, i) => {
              const external = social.href.startsWith("http");
              return (
                <li key={social.label} className="relative flex flex-1 justify-center">
                  {/* Divider fading out top and bottom, same style as the other hairlines */}
                  {i > 0 && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-px bg-linear-to-b from-transparent via-black/25 to-transparent"
                    />
                  )}
                  <a
                    href={social.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex flex-col items-center gap-2 py-1 text-black transition-opacity hover:opacity-70 sm:flex-row sm:gap-3 sm:py-2.5 lg:gap-4 lg:py-3"
                  >
                    <SocialIcon icon={social.icon} className="size-5 sm:size-6 lg:size-[30px]" />
                    {/* Mobile: arrow is positioned outside the flow so the label centers exactly under the icon */}
                    <span className="relative flex items-center sm:gap-3 lg:gap-4">
                      <span className="text-[13px] font-semibold sm:text-sm lg:text-lg">{social.label}</span>
                      <ArrowUpRight />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
