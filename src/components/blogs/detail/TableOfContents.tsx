"use client";

import { useEffect, useState } from "react";
import type { BlogSection } from "@/data/blogContent";

type Item = Pick<BlogSection, "id" | "heading">;

/** Highlights the section currently in view while scrolling. */
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "0px 0px -65% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

/** Smoothly scrolls to the section (instant if the visitor prefers reduced motion) and updates the URL hash. */
function scrollToSection(event: React.MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  history.replaceState(null, "", `#${id}`);
}

function Links({ items, active }: { items: Item[]; active: string | null }) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            onClick={(event) => scrollToSection(event, item.id)}
            aria-current={active === item.id ? "location" : undefined}
            className="block text-[15px] leading-[1.45] text-black/65 transition-colors hover:text-black aria-[current=location]:font-medium aria-[current=location]:text-black"
          >
            {item.heading}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function TableOfContents({ items }: { items: Item[] }) {
  const active = useActiveSection(items.map((i) => i.id));
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile / tablet: smooth collapsible box above the article */}
      <div className="rounded-md border border-black/10 px-4 py-3.5 lg:hidden">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-toc-content"
          className="flex w-full cursor-pointer items-center justify-between text-left text-base font-semibold text-black"
        >
          <span>Table of Contents</span>
          <svg
            aria-hidden
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>

        <div
          id="mobile-toc-content"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
          }`}
        >
          <div className="overflow-hidden">
            <div className="pt-4">
              <Links items={items} active={active} />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop: sticky left column */}
      <nav aria-label="Table of contents" className="hidden lg:block">
        <p className="text-base font-semibold text-black">Table of Contents</p>
        <div className="mt-5">
          <Links items={items} active={active} />
        </div>
      </nav>
    </>
  );
}
