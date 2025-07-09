import React from "react"
import { Button } from "@/ui/button"
import { SlideInAnimation } from "@/ui/Animations"

export default function HeroSection() {
  return (
    <section className="bg-slate-800 text-white min-h-screen flex items-center" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SlideInAnimation direction="left" delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              INTRODUCING OUR<br />
              COMPUTER- EDGE TECH
            </h1>
          </SlideInAnimation>
          
          <SlideInAnimation direction="left" delay={0.4}>
            <p className="text-lg text-gray-300 max-w-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Discover the latest in computer technology with our top-of-the-line laptops designed to power your digital world. From sleek ultrabooks to powerful gaming machines, we offer a diverse selection to meet your computing needs.
            </p>
          </SlideInAnimation>
          
          <SlideInAnimation direction="left" delay={0.6}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Shop Now
            </Button>
          </SlideInAnimation>
        </div>
        
        <SlideInAnimation direction="right" delay={0.3}>
          <div className="relative">
            <div className="w-[600px] h-[600px]">
              <img 
                src="b.jpg" 
                alt="Premium Laptop Setup" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl" 
                style={{
                  width: '715px',
                  height: '500px'
                }}
              />
            </div>
          </div>
        </SlideInAnimation>
      </div>
    </section>
  )
}
