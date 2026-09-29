"use client";

import { useState } from "react";
import { blogCategories } from "@/data/blogs";

type CategoryFilterProps = {
  /** Called with the selected category slug ("all" for everything). */
  onChange?: (slug: string) => void;
};

export default function CategoryFilter({ onChange }: CategoryFilterProps) {
  const [active, setActive] = useState("all");

  return (
    <div role="tablist" aria-label="Blog categories" className="flex flex-wrap gap-2.5 md:gap-3.5">
      {blogCategories.map((category) => {
        const selected = category.slug === active;
        return (
          <button
            key={category.slug}
            type="button"
            role="tab"
            aria-selected={selected}
            onClick={() => {
              setActive(category.slug);
              onChange?.(category.slug);
            }}
            className={`h-9 cursor-pointer rounded-full px-4 text-sm transition-colors md:h-10 md:px-5 md:text-[15px] ${
              selected ? "bg-black text-white" : "bg-[#F1F4FA] text-black hover:bg-[#E4E9F4]"
            }`}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
