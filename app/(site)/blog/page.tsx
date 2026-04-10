import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import CTASection from "@/components/sections/CTASection";
import BlogFilter from "@/components/cards/BlogFilter";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artigos técnicos sobre segurança em altura, normas regulamentadoras, equipamentos e cases de projetos do Grupo RF Engenharia.",
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Breadcrumb items={[{ label: "Blog" }]} />

          <div className="mt-8">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-primary-pale border border-primary-medium/30 flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-primary-medium" />
              </div>
              <span className="px-4 py-1.5 text-sm font-semibold tracking-wider uppercase rounded-full bg-primary-pale text-primary-medium border border-primary-medium/30">
                Grupo RF Engenharia
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-display)] text-gray-900 mb-6">
              Blog de{" "}
              <span className="text-primary-medium">Segurança em Altura</span>
            </h1>

            <p className="text-lg text-text-light leading-relaxed max-w-2xl">
              Artigos técnicos, guias práticos e novidades sobre normas
              regulamentadoras, equipamentos de proteção e melhores práticas
              para trabalho seguro em altura.
            </p>
          </div>
        </div>
      </section>

      {/* Listing */}
      <section className="py-20 bg-bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <BlogFilter posts={blogPosts} />
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Precisa de consultoria em segurança em altura?"
        description="Fale com nossos especialistas e descubra como podemos ajudar sua empresa a se adequar às normas de segurança."
      />
    </>
  );
}
