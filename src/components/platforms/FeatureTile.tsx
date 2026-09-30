import type { FeatureIcon, FeatureTone, PlatformFeature } from "@/data/products";

// Literal classes per tone so Tailwind generates them.
const toneClass: Record<FeatureTone, { tile: string; badge: string }> = {
  blue: { tile: "bg-[#F3F6FC]", badge: "bg-[#DDE8FA] text-[#3565D6]" },
  green: { tile: "bg-[#F3FAF5]", badge: "bg-[#DDF2E4] text-[#2E8B57]" },
  orange: { tile: "bg-[#FCF6F0]", badge: "bg-[#FBE7D5] text-[#E07A2E]" },
  purple: { tile: "bg-[#F6F5FD]", badge: "bg-[#E7E3FA] text-[#6B4FD8]" },
};

function Icon({ icon }: { icon: FeatureIcon }) {
  const common = {
    "aria-hidden": true,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "size-5 sm:size-6",
  };
  switch (icon) {
    case "home":
      return (
        <svg {...common}>
          <path d="M3.5 10.5L12 4l8.5 6.5" />
          <path d="M5.5 9v10.5h13V9" />
          <path d="M10 19.5v-5h4v5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7.5 3v5.5c0 4.5-3.2 8-7.5 9.5-4.3-1.5-7.5-5-7.5-9.5V6z" />
          <path d="M8.8 12l2.2 2.2 4.3-4.4" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} strokeWidth={2.4}>
          <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
  }
}

export default function FeatureTile({ feature }: { feature: PlatformFeature }) {
  const tone = toneClass[feature.tone];
  return (
    <div className={`flex flex-col justify-between rounded-xl p-3 sm:rounded-2xl sm:p-5 ${tone.tile}`}>
      <div>
        <div className={`flex size-9 items-center justify-center rounded-full sm:size-12 ${tone.badge}`}>
          <Icon icon={feature.icon} />
        </div>
        <h3 className="mt-2.5 text-sm font-semibold tracking-[-0.01em] leading-[1.3] text-black sm:mt-4 sm:text-[17px]">
          {feature.title}
        </h3>
        <p className="mt-1 text-[11px] font-light leading-[1.4] text-black/60 sm:mt-1.5 sm:text-[13px] sm:leading-[1.5]">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
