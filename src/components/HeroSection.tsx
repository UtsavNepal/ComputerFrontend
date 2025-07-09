import React, { useState } from "react"
import { Button } from "@/ui/button"
import { SlideInAnimation } from "@/ui/Animations"

export default function HeroSection() {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const [attempts, setAttempts] = useState(0)
  const [showToast, setShowToast] = useState(false)

  const moveButton = () => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)
    
    // Generate random position
    const directions = [
      { x: 200, y: 0 },      // right
      { x: -200, y: 0 },     // left
      { x: 0, y: -100 },     // up
      { x: 0, y: 100 },      // down
      { x: 150, y: -80 },    // diagonal up-right
      { x: -150, y: -80 },   // diagonal up-left
      { x: 150, y: 80 },     // diagonal down-right
      { x: -150, y: 80 }     // diagonal down-left
    ]
    
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    setButtonPosition(randomDirection)
    
    // Show toast after 3 attempts
    if (newAttempts >= 3) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    }
  }

  const handleButtonClick = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }
  return (
    <section
      className="bg-slate-800 text-white min-h-screen flex items-center overflow-hidden"
      style={{ fontFamily: 'Abyssinica SIL, serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Image Section - Shows first on mobile, second on desktop */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <SlideInAnimation direction="right" delay={0.3}>
              <div className="flex justify-center">
                <img
                  src="b.jpg"
                  alt="Premium Laptop Setup"
                  className="rounded-2xl shadow-2xl object-cover w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-full lg:h-[500px]"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </SlideInAnimation>
          </div>

          {/* Text Section - Shows second on mobile, first on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6 lg:space-y-8 text-center lg:text-left">
            <SlideInAnimation direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                INTRODUCING OUR<br />
                COMPUTER- EDGE TECH
              </h1>
            </SlideInAnimation>

            <SlideInAnimation direction="left" delay={0.4}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 px-4 lg:px-0">
                Discover the latest in computer technology with our top-of-the-line laptops designed to power your digital world. From sleek ultrabooks to powerful gaming machines, we offer a diverse selection to meet your computing needs.
              </p>
            </SlideInAnimation>

            <SlideInAnimation direction="left" delay={0.6}>
              <div className="flex justify-center lg:justify-start pt-4 relative">
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer"
                  style={{
                    transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                  }}
                  onMouseEnter={moveButton}
                  onClick={handleButtonClick}
                >
                  Shop Now
                </Button>
              </div>
            </SlideInAnimation>
          </div>
        </div>
      </div>
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-4 right-4 bg-slate-900 text-white px-6 py-3 rounded-lg shadow-lg border border-amber-500 z-50 animate-bounce">
          <div className="flex items-center gap-2">
            <span className="text-amber-500">😄</span>
            <span className="text-sm font-medium">This is just a frontend demo!</span>
          </div>
        </div>
      )}
    </section>
  )
}