import type { Metadata } from "next";
import BlogsHero from "@/components/blogs/BlogsHero";
import BlogsListing from "@/components/blogs/BlogsListing";

export const metadata: Metadata = {
  title: "Blogs",
  description:
    "Explore our latest articles on real estate technology, tourism and industry trends, practical insights to keep you informed and ahead.",
  alternates: { canonical: "/blogs" },
};

export default function BlogsPage() {
  return (
    <>
      <BlogsHero />
      <BlogsListing />
    </>
  );
}
