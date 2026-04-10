import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SectionTitle from "@/components/ui/SectionTitle";
import CTASection from "@/components/sections/CTASection";
import Button from "@/components/ui/Button";
import BlogCard from "@/components/cards/BlogCard";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blog";
import type { ContentBlock } from "@/data/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Post não encontrado" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderBlock(block: ContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] text-gray-900 mt-10 mb-4"
        >
          {block.text}
        </h2>
      ) : (
        <h3
          key={index}
          className="text-xl md:text-2xl font-semibold font-[family-name:var(--font-display)] text-gray-900 mt-8 mb-3"
        >
          {block.text}
        </h3>
      );

    case "paragraph":
      return (
        <p
          key={index}
          className="text-text-light leading-relaxed mb-4"
        >
          {block.text}
        </p>
      );

    case "list":
      return block.style === "bullet" ? (
        <ul key={index} className="space-y-2 mb-6 ml-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-light">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-medium shrink-0 mt-2" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <ol key={index} className="space-y-2 mb-6 ml-1 counter-reset-list">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-light">
              <span className="text-sm font-semibold text-primary-medium min-w-[1.5rem] text-right shrink-0">
                {i + 1}.
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "callout": {
      const variants = {
        info: "bg-blue-50 border-blue-200 text-blue-900",
        warning: "bg-amber-50 border-amber-200 text-amber-900",
        tip: "bg-emerald-50 border-emerald-200 text-emerald-900",
      };
      const labels = { info: "Informação", warning: "Atenção", tip: "Dica" };
      return (
        <div
          key={index}
          className={`rounded-xl border p-5 mb-6 ${variants[block.variant]}`}
        >
          <span className="text-xs font-bold uppercase tracking-wider mb-1 block opacity-70">
            {labels[block.variant]}
          </span>
          <p className="text-sm leading-relaxed">{block.text}</p>
        </div>
      );
    }

    case "quote":
      return (
        <blockquote
          key={index}
          className="border-l-4 border-primary-medium pl-5 py-2 my-6 italic text-text-light"
        >
          <p className="mb-2">{block.text}</p>
          {block.attribution && (
            <cite className="text-sm not-italic font-medium text-text-medium">
              — {block.attribution}
            </cite>
          )}
        </blockquote>
      );
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, post.category);

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      {/* Breadcrumb strip */}
      <section className="pt-24 md:pt-32 pb-4 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: post.title },
            ]}
          />
        </div>
      </section>

      {/* Article */}
      <article className="pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Category badge */}
          <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary-medium text-white mb-4">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-5 text-sm text-text-light mb-8">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formattedDate}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readingTime} min de leitura
            </span>
          </div>

          {/* Cover image */}
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-10">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              priority
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Lead paragraph */}
          <div className="border-l-4 border-primary-medium pl-5 py-2 mb-10">
            <p className="text-lg text-text-light leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </div>

          {/* Content blocks */}
          <div className="prose-custom">
            {post.content.map((block, index) => renderBlock(block, index))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-12 pt-8 border-t border-gray-200">
            <Tag className="w-4 h-4 text-text-light" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-bg-surface text-text-light border border-gray-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Back button */}
          <div className="mt-8">
            <Button href="/blog" variant="ghost" icon={ArrowLeft} iconPosition="left">
              Voltar para o Blog
            </Button>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-bg-surface">
          <div className="max-w-7xl mx-auto px-6">
            <SectionTitle
              badge="Leia Também"
              title="Artigos Relacionados"
              description="Continue sua leitura com outros artigos sobre o mesmo tema."
              align="center"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <CTASection
        title="Ficou com alguma dúvida?"
        description="Nossa equipe técnica está pronta para esclarecer suas dúvidas sobre segurança em altura e normas regulamentadoras."
      />
    </>
  );
}
