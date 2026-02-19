"use client";

import { useState } from "react";
import type { BlogPost, BlogCategory } from "@/data/blog";
import BlogCard from "@/components/cards/BlogCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/Animations";

const categories: (BlogCategory | "Todos")[] = [
  "Todos",
  "Normas e Legislação",
  "Equipamentos",
  "Treinamentos",
  "Projetos e Laudos",
  "Obras e Cases",
];

interface BlogFilterProps {
  posts: BlogPost[];
}

export default function BlogFilter({ posts }: BlogFilterProps) {
  const [active, setActive] = useState<BlogCategory | "Todos">("Todos");

  const filtered =
    active === "Todos"
      ? posts
      : posts.filter((post) => post.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              active === cat
                ? "bg-primary-medium text-white shadow-md shadow-primary-medium/20"
                : "bg-white border border-gray-200 text-text-light hover:border-primary-medium/30 hover:text-primary-medium"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-text-light text-lg">
            Nenhum artigo encontrado nesta categoria.
          </p>
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post) => (
            <StaggerItem key={post.slug}>
              <BlogCard post={post} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}
    </>
  );
}
