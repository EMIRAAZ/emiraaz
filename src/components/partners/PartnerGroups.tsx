import Image from "next/image";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { partnerGroups, type Partner, type PartnerGroup } from "@/data/partners";

function GroupIcon({ id }: { id: PartnerGroup["id"] }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "size-6 md:size-7",
  };
  switch (id) {
    case "technology":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="2" />
          <path d="M10 10h4v4h-4z" />
          <path d="M9.5 3.5V7M14.5 3.5V7M9.5 17v3.5M14.5 17v3.5M3.5 9.5H7M3.5 14.5H7M17 9.5h3.5M17 14.5h3.5" />
        </svg>
      );
    case "real-estate":
      return (
        <svg {...common}>
          <path d="M3.5 10.5L12 4l8.5 6.5" />
          <path d="M5.5 9v10.5h13V9" />
          <path d="M10 19.5v-5h4v5" />
        </svg>
      );
    case "tourism":
      return (
        <svg {...common}>
          <path d="M12 21v-9" />
          <path d="M12 12c-1-3-3.5-4.5-7-4 1.5-2.5 4.5-3 7 0 2.5-3 5.5-2.5 7 0-3.5-.5-6 1-7 4z" />
          <path d="M12 12c-2.5-.5-5 .5-6 3M12 12c2.5-.5 5 .5 6 3" />
          <path d="M7 21h10" />
        </svg>
      );
  }
}

function initials(text: string) {
  return text
    .split(/[\s&]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

function PartnerTile({ partner }: { partner: Partner }) {
  return (
    <li className="flex flex-col items-center rounded-md bg-white px-3 py-5 text-center">
      {partner.logo ? (
        <Image src={partner.logo} alt={`${partner.name} logo`} width={96} height={40} className="h-9 w-auto object-contain" />
      ) : (
        <span
          aria-hidden
          className="flex size-9 items-center justify-center rounded-lg bg-[#EEF1F8] text-[11px] font-semibold tracking-[0.04em] text-black/55"
        >
          {initials(partner.category)}
        </span>
      )}
      <p className="mt-3 text-[13px] font-semibold text-black">{partner.name}</p>
      <p className="mt-0.5 text-[11px] font-light text-black/50">{partner.category}</p>
    </li>
  );
}

export default function PartnerGroups() {
  return (
    <section className="pt-10 md:pt-14">
      <Container>
        <div className="mx-auto flex max-w-[1080px] flex-col gap-4 md:gap-5">
          {partnerGroups.map((group) => (
            <div key={group.id} className="rounded-lg bg-[#F7F8FC] p-4 md:p-6" aria-labelledby={`partners-${group.id}`}>
              <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E3ECFA] text-accent md:size-14">
                    <GroupIcon id={group.id} />
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.08em] text-black/55 md:text-xs">{group.eyebrow}</p>
                    <h2
                      id={`partners-${group.id}`}
                      className="mt-0.5 text-lg font-bold tracking-[-0.02em] text-black md:text-[22px]"
                    >
                      {group.title}
                    </h2>
                  </div>
                </div>
                <p className="text-sm font-light leading-[1.55] text-black/70 lg:max-w-[400px] lg:pt-1 lg:text-[15px]">
                  {group.description}
                </p>
              </div>

              <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:mt-6 md:gap-3 lg:grid-cols-5">
                {group.partners.map((partner, i) => (
                  <PartnerTile key={`${partner.name}-${i}`} partner={partner} />
                ))}
              </ul>
            </div>
          ))}

          {/* Closing statement */}
          <div className="mt-10 rounded-lg bg-[#F1F4FA] px-5 py-10 text-center md:mt-16 md:px-10 md:py-12">
            <Eyebrow>Our Partners</Eyebrow>
            <h2 className="mt-3 text-[clamp(22px,6.6vw,26px)] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-4 md:text-[32px] lg:text-[36px]">
              Technology. Real Estate. Tourism.
            </h2>
            <p className="mx-auto mt-3 max-w-[900px] text-[15px] leading-[1.6] text-black md:mt-4 md:text-lg">
              We work with leading technology providers, real estate developers, and tourism destinations to
              strengthen our ecosystem and create better experiences through our products.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
