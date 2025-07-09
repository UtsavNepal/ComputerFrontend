import React from "react"
import { Button } from "@/ui/button"
import { PopInAnimation, SlideInAnimation } from "@/ui/Animations"

export default function WorkspaceSection() {
  return (
    <section className="bg-gradient-to-br from-amber-100 to-amber-200 py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <SlideInAnimation direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              WORKSPACE ELEVATED
            </h2>
          </SlideInAnimation>
          
          <SlideInAnimation direction="up" delay={0.3}>
            <p className="text-lg text-slate-600 max-w-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Enhance your productivity and enjoy a seamless computing experience with our premium laptops
            </p>
          </SlideInAnimation>
          
          <SlideInAnimation direction="up" delay={0.5}>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              Explore Now
            </Button>
          </SlideInAnimation>
        </div>
        
        <PopInAnimation delay={0.4}>
          <div className="relative">
            <img 
              src="k.jpg" 
              alt="Workspace Setup" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </PopInAnimation>
      </div>
    </section>
  )
}