type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

/** Small spaced-out uppercase label above section headings ("OUR VISION", "ABOUT EMIRAAZ"). */
export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p className={`text-sm font-light uppercase tracking-[0.15em] text-black md:text-lg lg:text-xl ${className}`}>
      {children}
    </p>
  );
}
