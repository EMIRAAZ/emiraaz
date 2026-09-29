import Container from "@/components/layout/Container";
import Eyebrow from "./Eyebrow";

type StatusMessageProps = {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  /** Buttons shown under the text (PillLink / PillButton). */
  children?: React.ReactNode;
};

/** Centered full-height message used by the 404 and error pages. */
export default function StatusMessage({ code, eyebrow, title, description, children }: StatusMessageProps) {
  return (
    <section className="flex flex-1 items-center py-20 md:py-28">
      <Container className="flex flex-col items-center text-center">
        <Eyebrow>{eyebrow}</Eyebrow>

        <p aria-hidden className="mt-4 text-[96px] font-bold leading-none tracking-[-0.04em] text-black md:mt-6 md:text-[160px]">
          {code}
        </p>

        <h1 className="mt-4 text-[26px] font-bold leading-[1.2] tracking-[-0.02em] text-black md:mt-6 md:text-[40px]">
          {title}
        </h1>

        <p className="mt-4 max-w-[520px] text-base font-light leading-[1.45] text-black md:text-xl">
          {description}
        </p>

        {children && <div className="mt-8 flex flex-wrap justify-center gap-3 md:mt-10 md:gap-4">{children}</div>}
      </Container>
    </section>
  );
}
