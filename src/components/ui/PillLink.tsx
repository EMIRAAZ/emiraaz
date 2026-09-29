import Link from "next/link";

type Variant = "solid" | "outline";

const baseClass =
  "inline-flex h-11 cursor-pointer items-center gap-3 rounded-full border-[1.5px] px-5 text-base font-semibold transition-colors lg:px-6 lg:text-[17px]";

const variants: Record<Variant, string> = {
  solid: "border-black bg-black text-white hover:bg-black/80",
  outline: "border-black bg-white text-black hover:bg-black hover:text-white",
};

function ArrowIcon() {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
    >
      <path d="M4 12h16M14 6l6 6-6 6" />
    </svg>
  );
}

type PillLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
};

/** Rounded "Learn More →" style button link. */
export default function PillLink({ href, children, variant = "solid" }: PillLinkProps) {
  return (
    <Link href={href} className={`${baseClass} ${variants[variant]}`}>
      {children}
      <ArrowIcon />
    </Link>
  );
}

type PillButtonProps = {
  onClick: () => void;
  children: React.ReactNode;
  variant?: Variant;
};

/** Same look as PillLink, for actions that aren't navigation (e.g. "Try again"). */
export function PillButton({ onClick, children, variant = "solid" }: PillButtonProps) {
  return (
    <button type="button" onClick={onClick} className={`${baseClass} ${variants[variant]}`}>
      {children}
      <ArrowIcon />
    </button>
  );
}
