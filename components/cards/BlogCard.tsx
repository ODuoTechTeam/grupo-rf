import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative block rounded-xl bg-white shadow-sm hover:shadow-xl transition-all duration-500 h-full overflow-hidden border border-gray-100 hover:border-primary-medium/30 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.coverImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full bg-primary-medium text-white">
          {post.category}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-4 text-xs text-text-light mb-3">
          <span className="inline-flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {formattedDate}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {post.readingTime} min de leitura
          </span>
        </div>

        <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] text-text-primary mb-2 line-clamp-2 group-hover:text-primary-medium transition-colors">
          {post.title}
        </h3>

        <p className="text-sm text-text-light leading-relaxed mb-4 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-1.5 text-sm font-medium text-primary-medium group-hover:gap-3 transition-all">
          Ler artigo
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
