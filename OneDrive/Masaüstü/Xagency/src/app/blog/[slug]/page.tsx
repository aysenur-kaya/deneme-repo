import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Yazı Bulunamadı" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  return (
    <article className="relative section-padding pt-32">
      <div className="absolute inset-0 bg-grid-neon bg-grid opacity-10" />

      <div className="container-custom relative max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm text-soft-gray transition-colors hover:text-neon"
        >
          <ArrowLeft className="h-4 w-4" />
          Blog&apos;a Dön
        </Link>

        <span className="mb-4 inline-block rounded-full bg-neon/10 px-3 py-1 text-xs font-semibold text-neon">
          {post.category}
        </span>

        <h1 className="text-3xl font-black text-white sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-4 flex items-center gap-4 text-sm text-soft-gray">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} okuma</span>
        </div>

        <div className="mt-8 rounded-2xl glass p-8 sm:p-12 border border-white/10">
          <p className="text-lg leading-relaxed text-soft-gray">{post.excerpt}</p>
          <p className="mt-6 leading-relaxed text-soft-gray">
            Bu demo içeriktir. Gerçek blog yazısı yakında eklenecektir. XTRAGENCY
            olarak dijital dünyadaki en güncel trendleri ve stratejileri sizlerle
            paylaşmaya devam edeceğiz.
          </p>
        </div>
      </div>
    </article>
  );
}
