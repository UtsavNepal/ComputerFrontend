import { PopInAnimation, SlideInAnimation } from "@/ui/Animations"
import React from "react"

export default function VersatileSection() {
  return (
    <section className="bg-slate-800 text-white py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <PopInAnimation delay={0.1}>
          <div className="relative">
            <img 
              src="a.webp" 
              alt="Premium Gold Laptop" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </PopInAnimation>
        
        <div className="space-y-8">
          <SlideInAnimation direction="right" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              VERSATILE LAPTOP LINEUP
            </h2>
          </SlideInAnimation>
          
          <SlideInAnimation direction="right" delay={0.4}>
            <p className="text-lg text-gray-300" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Explore our diverse range of laptops, each with unique features and capabilities to suit your specific requirements. Whether you need a device for work, entertainment, or gaming.
            </p>
          </SlideInAnimation>
          
          <SlideInAnimation direction="right" delay={0.6}>
            <div className="space-y-4">
              <p className="text-gray-400" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Uncompromising Performance</p>
            </div>
          </SlideInAnimation>
        </div>
      </div>
    </section>
  )
}