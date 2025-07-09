import { SlideInAnimation } from "@/ui/Animations"
import React from "react"

export default function RedefiningSection() {
    return (
  <section className="bg-gradient-to-br from-amber-100 to-amber-200 py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <SlideInAnimation direction="left" delay={0.1}>
          <div className="relative">
            <img 
              src="b.png" 
              alt="Premium Laptop" 
             
            />
          </div>
        </SlideInAnimation>
        
        <div className="space-y-8">
          <SlideInAnimation direction="right" delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              REDEFINING THE LAPTOP
            </h2>
          </SlideInAnimation>
          
          <SlideInAnimation direction="right" delay={0.4}>
            <p className="text-lg text-slate-600" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Welcome to our computer store, where we curate the finest laptops to elevate your digital experience. Explore our meticulously selected collection and discover the perfect device to power your passions
            </p>
          </SlideInAnimation>
        </div>
      </div>
    </section>
    )
}