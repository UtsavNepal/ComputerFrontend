import React from "react"
import { Button } from "@/ui/button"
import { SlideInAnimation } from "@/ui/Animations"

export default function HPEnvySection() {
  return (
    <section className="bg-gradient-to-br from-amber-100 to-amber-200 py-12 lg:py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Image - Left side with fixed aspect ratio */}
          <SlideInAnimation direction="left" delay={0.2} className="lg:order-1 w-full lg:w-[50%]">
            <div className="relative w-full aspect-[4/3]">
              <img 
                src="a.png" 
                alt="HP Envy Laptop" 
                className="absolute w-full h-full object-contain"
              />
            </div>
          </SlideInAnimation>

          {/* Text Content - Right side */}
          <div className="lg:order-2 w-full lg:w-[45%] space-y-6 lg:space-y-8">
            <SlideInAnimation direction="right" delay={0.1}>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
                INTRODUCING THE HP ENVY
              </h2>
            </SlideInAnimation>
            
            <SlideInAnimation direction="right" delay={0.3}>
              <p className="text-base lg:text-lg text-slate-600 max-w-lg">
                Elevate your computing experience with the sleek and powerful HP Envy laptop. Featuring a stunning design, cutting-edge performance.
              </p>
            </SlideInAnimation>
            
            <SlideInAnimation direction="right" delay={0.5}>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg">
                Discover More
              </Button>
            </SlideInAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}