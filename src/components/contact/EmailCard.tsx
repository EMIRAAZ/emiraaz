/** Rounded email pill — envelope | divider | address. The whole pill opens the mail app. */
export default function EmailCard({ email }: { email: string }) {
  return (
    <a
      href={`mailto:${email}`}
      aria-label={`Email us at ${email}`}
      className="group inline-flex h-[72px] max-w-full items-center rounded-full bg-[#F1F4FA] px-7 transition-colors hover:bg-[#E7ECF6] md:h-[96px] md:px-12 lg:h-[112px] lg:px-14"
    >
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-8 shrink-0 text-black md:size-11 lg:size-12"
      >
        <rect x="2.5" y="5" width="19" height="14" rx="2" />
        <path d="M3 6l9 7 9-7" />
      </svg>

      <span
        aria-hidden
        className="mx-5 h-10 w-px shrink-0 bg-linear-to-b from-transparent via-black/15 to-transparent md:mx-8 md:h-14 lg:mx-9 lg:h-16"
      />

      <span className="truncate text-lg font-medium tracking-[-0.01em] text-black md:text-2xl lg:text-[30px]">
        {email}
      </span>
    </a>
  );
}
