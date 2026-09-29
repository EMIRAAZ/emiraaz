"use client";

import { useRef, useState } from "react";
import Container from "@/components/layout/Container";
import { blogPosts } from "@/data/blogs";
import BlogCard from "./BlogCard";
import CategoryFilter from "./CategoryFilter";
import Pagination from "./Pagination";

const PAGE_SIZE = 9;

export default function BlogsListing() {
  const [category, setCategory] = useState("all");
  const [page, setPage] = useState(1);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = category === "all" ? blogPosts : blogPosts.filter((post) => post.category === category);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const changePage = (next: number) => {
    setPage(next);
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section>
      <Container>
        <div className="mt-6 md:mt-7">
          <CategoryFilter
            onChange={(slug) => {
              setCategory(slug);
              setPage(1);
            }}
          />
        </div>

        <div ref={gridRef} className="scroll-mt-6 pt-8 md:pt-10">
          {visible.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <p className="py-16 text-center text-black/55">No articles in this category yet.</p>
          )}
        </div>

        <div className="mt-10 md:mt-12">
          <Pagination page={page} totalPages={totalPages} onChange={changePage} />
        </div>
      </Container>
    </section>
  );
}
