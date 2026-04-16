import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

interface AdsGalleryProps {
  title: string;
  subtitle: string;
  images: GalleryImage[];
}

export default function AdsGallery({
  title,
  subtitle,
  images,
}: AdsGalleryProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-gray-900">
            {title}
          </h2>
          <p className="mt-4 text-lg text-text-light leading-relaxed">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image) => (
            <div
              key={image.src}
              className="group relative overflow-hidden rounded-xl aspect-[4/3] bg-gray-100 border border-gray-200"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover card-image-zoom"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
