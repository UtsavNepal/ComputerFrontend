import React from "react";
import { Button } from "@/ui/button";
import { PopInAnimation, SlideInAnimation } from "@/ui/Animations";

export default function ElevatingSection() {
  return (
    <section className="bg-slate-800 text-white py-12 lg:py-20">
      <div className="max-w-[2000px] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image - Top on mobile, Right on desktop */}
          <div className="lg:order-2">
            <PopInAnimation delay={0.4}>
              <img
                src="f.png"
                alt="Desktop Setup"
                width={500}
                height={500}
                className="block mx-auto w-[250px] h-[254px] lg:w-[500px] lg:h-[500px]"
              />
            </PopInAnimation>
          </div>

          {/* Text Content - Bottom on mobile, Left on desktop */}
          <div className="lg:order-1 lg:w-1/2 space-y-6 lg:space-y-8">
            <SlideInAnimation direction="up" delay={0.1}>
              <h2 className="text-3xl lg:text-5xl font-bold">
                ELEVATING THE EXPERIENCE
              </h2>
            </SlideInAnimation>
            
            <SlideInAnimation direction="up" delay={0.3}>
              <p className="text-base lg:text-lg text-gray-300 max-w-lg">
                Immerse yourself in seamless productivity and unparalleled performance.
              </p>
            </SlideInAnimation>
            
            <SlideInAnimation direction="up" delay={0.5}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg">
                Shop Now
              </Button>
            </SlideInAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}