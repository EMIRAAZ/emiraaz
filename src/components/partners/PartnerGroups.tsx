import Image from "next/image";
import Container from "@/components/layout/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { partnerGroups, type Partner, type PartnerGroup } from "@/data/partners";
import { PartnerLogo } from "@/components/partners/PartnerLogo";

function GroupIcon({ id }: { id: PartnerGroup["id"] }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
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

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("");
}

/** Real partner: white tile with logo, name and category (initials badge until a logo file is added). */
function NamedPartnerTile({ partner }: { partner: Partner }) {
  return (
    <li className="flex flex-col items-center rounded-lg border border-black/[0.07] bg-white px-2 py-5 text-center sm:border-transparent sm:shadow-[0_1px_8px_rgba(0,0,0,0.03)] md:px-3 md:py-6">
      <div className="flex h-10 items-center justify-center md:h-12">
        {partner.logo ? (
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={160}
            height={48}
            className={
              // SVG icons have no intrinsic size: give them a fixed height. Raster wordmarks shrink to fit the tile.
              partner.logo.endsWith(".svg")
                ? "h-9 w-auto md:h-11"
                : "h-auto max-h-8 w-auto max-w-[70%] object-contain sm:max-h-9 sm:max-w-[85%] md:max-h-11"
            }
          />
        ) : (
          <span
            aria-hidden
            className="flex size-10 items-center justify-center rounded-lg bg-[#EEF1F8] text-xs font-semibold tracking-[0.04em] text-black/55 md:size-11"
          >
            {initials(partner.name)}
          </span>
        )}
      </div>
      <p className="mt-3 text-[13px] font-semibold leading-[1.3] text-black md:text-sm">{partner.name}</p>
      {partner.category && (
        <p className="mt-0.5 text-[11px] font-light leading-[1.35] text-black/50 md:text-xs">{partner.category}</p>
      )}
    </li>
  );
}

/** Placeholder partner: logo-only EMIRAAZ tile. */
function PartnerTile({ partner }: { partner: Partner }) {
  return (
    <li
      className="flex h-12 items-center justify-center p-1 sm:h-16 sm:p-2"
      title={partner.category ? `${partner.name} - ${partner.category}` : partner.name}
    >
      <div className="flex h-full w-full items-center justify-center opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-105 active:opacity-100">
        <PartnerLogo name={partner.name} />
      </div>
    </li>
  );
}

export default function PartnerGroups() {
  return (
    <section className="pt-10 md:pt-14">
      <Container>
        <div className="flex-col gap-8 sm:gap-5">
          {partnerGroups.map((group, groupIndex) => (
            <div key={group.id}>
              <div
                className="bg-transparent p-0 sm:rounded-lg sm:bg-[#F7F8FC] mt-6 sm:p-6 md:p-8"
                aria-labelledby={`partners-${group.id}`}
              >
                <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
                  <div className="flex items-center gap-3 md:gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#F1F4FA] text-black md:size-14">
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

                {group.partners.every((p) => p.placeholder) ? (
                  <ul className="mt-6 grid grid-cols-3 items-center gap-x-3 gap-y-4 sm:gap-6 md:grid-cols-5 lg:grid-cols-6">
                    {group.partners.map((partner, i) => (
                      <PartnerTile key={`${group.id}-partner-${i}`} partner={partner} />
                    ))}
                  </ul>
                ) : (
                  <ul className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:gap-3 lg:grid-cols-5">
                    {group.partners.map((partner) => (
                      <NamedPartnerTile key={`${group.id}-${partner.name}`} partner={partner} />
                    ))}
                  </ul>
                )}
              </div>

              {groupIndex < partnerGroups.length - 1 && (
                <div
                  aria-hidden
                  className="mt-8 h-px w-full bg-linear-to-r from-transparent via-black/15 to-transparent sm:hidden"
                />
              )}
            </div>
          ))}

          {/* Closing statement */}
          <div className="mt-10 rounded-lg bg-[#F1F4FA] px-5 py-10 text-center md:mt-6 md:px-10 md:py-12">
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
