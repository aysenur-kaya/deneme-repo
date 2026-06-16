import type { Metadata } from "next";
import { BlogGrid } from "@/components/sections/BlogSection";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "SEO, web tasarım ve dijital pazarlama hakkında güncel yazılar ve stratejiler.",
};

export default function BlogPage() {
  return <BlogGrid />;
}
