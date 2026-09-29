import Eyebrow from "@/components/ui/Eyebrow";
import { socialLinks, type SocialLink } from "@/lib/site";
import Container from "./Container";

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  const common = { "aria-hidden": true, viewBox: "0 0 24 24", className: "size-6 sm:size-7 lg:size-8" } as const;

  switch (icon) {
    case "instagram":
      return (
        <svg {...common} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor" />
          <circle cx="7.5" cy="7.6" r="1.6" fill="white" />
          <rect x="6.1" y="10" width="2.8" height="8" fill="white" />
          <path
            d="M11 10h2.7v1.2c.5-.8 1.5-1.4 2.8-1.4 2.3 0 3.2 1.5 3.2 3.8V18h-2.8v-4c0-1-.3-1.8-1.3-1.8s-1.6.8-1.6 1.8v4H11z"
            fill="white"
          />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <rect x="1.5" y="4.5" width="21" height="15" rx="4.5" fill="currentColor" />
          <path d="M10 8.8v6.4l5.4-3.2z" fill="white" />
        </svg>
      );
  }
}

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
      className="size-3.5 transition-transform sm:size-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:size-5"
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
        <div className="flex flex-col items-center border-t border-black/10 pt-12 pb-10 text-center md:pt-20 md:pb-20 lg:pb-24">
          <Eyebrow>Stay Connected</Eyebrow>

          <h2
            id="follow-heading"
            className="mt-3 text-[28px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-5 md:text-[36px] lg:text-[44px]"
          >
            Follow the Journey
          </h2>

          <p className="mt-4 max-w-[780px] text-[15px] font-light leading-[1.45] text-black sm:text-lg md:mt-5 lg:text-2xl lg:leading-[1.4]">
            Stay connected with EMIRAAZ for company updates, new platforms, technology, real estate
            and what we’re building next.
          </p>

          <ul className="mt-8 flex w-full max-w-[1095px] md:mt-16">
            {socialLinks.map((social, i) => {
              const external = social.href.startsWith("http");
              return (
                <li
                  key={social.label}
                  className={`flex flex-1 justify-center ${i > 0 ? "border-l border-black/25" : ""}`}
                >
                  <a
                    href={social.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="group flex flex-col items-center gap-2 py-1 text-black transition-opacity hover:opacity-70 sm:flex-row sm:gap-3 sm:py-2.5 lg:gap-4 lg:py-3"
                  >
                    <SocialIcon icon={social.icon} />
                    <span className="flex items-center gap-1 sm:gap-3 lg:gap-4">
                      <span className="text-sm font-semibold sm:text-base lg:text-xl">{social.label}</span>
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
