import React from "react"
import { Button } from "@/ui/button"
import { PopInAnimation, SlideInAnimation } from "@/ui/Animations"

export default function ElevatingSection() {
  return (
    <section className="bg-slate-800 text-white py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SlideInAnimation direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              ELEVATING THE
              EXPERIENCE
            </h2>
          </SlideInAnimation>
          
          <SlideInAnimation direction="up" delay={0.3}>
            <p className="text-lg text-gray-300 max-w-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Immerse yourself in seamless productivity and unparalleled performance with our meticulously crafted laptops.
            </p>
          </SlideInAnimation>
          
          <SlideInAnimation direction="up" delay={0.5}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Shop Now
            </Button>
          </SlideInAnimation>
        </div>
        
        <PopInAnimation delay={0.4}>
          <div className="relative">
            <img 
              src="f.png" 
              alt="Desktop Setup" 
              style={{
               width: '600px',
                border: 'none',
                outline: 'none',
                boxShadow: 'none',
                height: '600px'
              }}
            />
          </div>
        </PopInAnimation>
      </div>
    </section>
  )
}