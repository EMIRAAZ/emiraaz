type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small spaced-out uppercase label above section headings ("OUR VISION", "ABOUT EMIRAAZ"). */
export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`text-xs font-light uppercase tracking-[0.2em] text-black md:text-[15px] lg:text-base ${className}`}>
      {children}
    </p>
  );
}
