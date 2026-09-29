type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/** Page-width wrapper shared by header, footer and page sections (1200px content, as in the 1440 design). */
export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 md:px-10 ${className}`}>
      {children}
    </div>
  );
}
