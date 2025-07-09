import React from "react"
import { Button } from "@/ui/button"
import { SlideInAnimation } from "@/ui/Animations"

export default function HPEnvySection() {
  return (
    <section className="bg-gradient-to-br from-amber-100 to-amber-200 py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SlideInAnimation direction="left" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              INTRODUCING THE HP ENVY
            </h2>
          </SlideInAnimation>
          
          <SlideInAnimation direction="left" delay={0.3}>
            <p className="text-lg text-slate-600 max-w-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Elevate your computing experience with the sleek and powerful HP Envy laptop. Featuring a stunning design, cutting-edge performance.
            </p>
          </SlideInAnimation>
          
          <SlideInAnimation direction="left" delay={0.5}>
            <Button className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 text-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Discover More
            </Button>
          </SlideInAnimation>
        </div>
        
        <SlideInAnimation direction="right" delay={0.2}>
          <div className="relative">
            <img 
              src="a.png" 
              alt="HP Envy Laptop" 
            />
          </div>
        </SlideInAnimation>
      </div>
    </section>
  )
}