import React from "react"
import { Button } from "@/ui/button"
import { PopInAnimation } from "@/ui/Animations"

export default function ExceptionalSection() {
  return (
    <section className="bg-gradient-to-br from-amber-100 to-amber-200 py-20" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <PopInAnimation delay={0.1}>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 text-center mb-16" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
            EXCEPTIONAL
          </h2>
        </PopInAnimation>
        
        <div className="grid md:grid-cols-3 gap-8">
          <PopInAnimation delay={0.2}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <img 
                src="j.jpg" 
                alt="Premium Laptop" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Abyssinica SIL, serif' }}>PREMIUM</h3>
              <p className="text-slate-600 mb-6" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Elevate your digital life with our premium laptops</p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Discover</Button>
            </div>
          </PopInAnimation>
          
          <PopInAnimation delay={0.4}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <img 
                src="i.jpg" 
                alt="Innovative Laptop" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Abyssinica SIL, serif' }}>INNOVATIVE</h3>
              <p className="text-slate-600 mb-6" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Unlock your full potential with our premium laptops</p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Explore</Button>
            </div>
          </PopInAnimation>
          
          <PopInAnimation delay={0.6}>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <img 
                src="k.avif" 
                alt="Digital Experience Laptop" 
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Elevate Your Digital Experience</h3>
              <p className="text-slate-600 mb-6" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Discover the perfect laptop to power your digital life</p>
              <Button className="bg-amber-600 hover:bg-amber-700 text-white" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Shop Now</Button>
            </div>
          </PopInAnimation>
        </div>
      </div>
    </section>
  )
}
