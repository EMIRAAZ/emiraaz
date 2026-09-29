type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d={dir === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
    </svg>
  );
}

const baseBtn =
  "inline-flex size-9 cursor-pointer items-center justify-center rounded-full text-sm transition-colors md:size-10 md:text-[15px]";

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Blog pagination" className="flex items-center justify-center gap-2">
      <button
        type="button"
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        aria-label="Previous page"
        className={`${baseBtn} border border-black/15 text-black hover:bg-[#F1F4FA] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent`}
      >
        <Chevron dir="left" />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          onClick={() => onChange(n)}
          aria-current={n === page ? "page" : undefined}
          className={`${baseBtn} ${n === page ? "bg-black text-white" : "bg-[#F1F4FA] text-black hover:bg-[#E4E9F4]"}`}
        >
          {n}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        aria-label="Next page"
        className={`${baseBtn} border border-black/15 text-black hover:bg-[#F1F4FA] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent`}
      >
        <Chevron dir="right" />
      </button>
    </nav>
  );
}
