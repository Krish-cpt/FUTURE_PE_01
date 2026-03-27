import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const images = [
  { src: g1, alt: "Elegant hairstyles" },
  { src: g2, alt: "Glamorous waves" },
  { src: g3, alt: "Modern men's cut" },
  { src: g4, alt: "Bridal updo" },
  { src: g5, alt: "Hair coloring" },
  { src: g6, alt: "Hair spa treatment" },
];

const GallerySection = () => {
  const [idx, setIdx] = useState(0);
  const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));

  return (
    <section id="gallery" className="py-24 bg-salon-cream">
      <div className="container mx-auto px-4">
        <p className="text-center text-gold tracking-[0.3em] uppercase text-sm mb-3 font-medium">Our Work</p>
        <h2 className="font-display text-3xl md:text-4xl text-center text-foreground mb-16">Style Gallery</h2>

        {/* Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="overflow-hidden rounded-lg aspect-[4/3]">
            <img
              src={images[idx].src}
              alt={images[idx].alt}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
              width={800}
              height={800}
            />
          </div>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-salon-black/70 flex items-center justify-center text-gold hover:bg-gold hover:text-salon-black transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-salon-black/70 flex items-center justify-center text-gold hover:bg-gold hover:text-salon-black transition-all"
          >
            <ChevronRight size={20} />
          </button>
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === idx ? "bg-gold w-6" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => setIdx(i)}
              className="cursor-pointer overflow-hidden rounded-lg group"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
