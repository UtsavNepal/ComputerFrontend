import React from "react"
import { Button } from "@/ui/button"
import { PopInAnimation, SlideInAnimation } from "@/ui/Animations"

export default function WorkspaceSection() {
  return (
    <section className="bg-gradient-to-br from-amber-100 to-amber-200 py-12 lg:py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Flex container with reversed order on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text Content - appears second on mobile, first on desktop */}
          <div className="lg:w-1/2 space-y-6 lg:space-y-8">
            <SlideInAnimation direction="up" delay={0.1}>
              <h2 className="text-3xl lg:text-5xl font-bold text-slate-800">
                WORKSPACE ELEVATED
              </h2>
            </SlideInAnimation>
            
            <SlideInAnimation direction="up" delay={0.3}>
              <p className="text-base lg:text-lg text-slate-600 max-w-lg">
                Enhance your productivity and enjoy a seamless computing experience with our premium laptops
              </p>
            </SlideInAnimation>
            
            <SlideInAnimation direction="up" delay={0.5}>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 lg:px-8 lg:py-3 text-base lg:text-lg">
                Explore Now
              </Button>
            </SlideInAnimation>
          </div>
          
          {/* Image - appears first on mobile, second on desktop */}
          <div className="lg:w-1/2">
            <PopInAnimation delay={0.4}>
              <img 
                src="k-mobile.png" 
                alt="Workspace Setup" 
                className=""
              />
            </PopInAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}