import React from "react";
import { Marquee } from "@/ui/marquee";
import { PopInAnimation, SlideInAnimation } from "@/ui/Animations";

export default function PoweredBySection() {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1547082299-de196ea013d6",
      alt: "High-performance laptop"
    },
    {
      src: "h.avif",
      alt: "Modern workstation"
    },
    {
      src: "g.jpg",
      alt: "Tech setup"
    },
    {
      src: "e.webp",
      alt: "Gaming PC"
    },
    {
      src: "d.jpg",
      alt: "Creative workstation"
    },
    {
        src: "c.jpg",
        alt: "Premium Laptop"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-amber-200 to-amber-300 py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <PopInAnimation delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-16" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
            POWERED BY INTEL
          </h2>
        </PopInAnimation>
        
        <SlideInAnimation direction="up" delay={0.3}>
          <Marquee 
            speed={80}
            gap={48}
            className="py-8"
          >
            {images.map((img, i) => (
              <div 
                key={`marquee-img-${i}`}
                className="flex-shrink-0 relative bg-black rounded-xl overflow-hidden shadow-lg"
                style={{
                  width: '400px',
                  height: '300px',
                  outline: '1px solid rgba(255,0,0,0.2)'
                }}
              >
                <img
                  src={`${img.src}?w=400&h=300&fit=crop`}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            ))}
          </Marquee>
        </SlideInAnimation>
      </div>
    </section>
  );
}
