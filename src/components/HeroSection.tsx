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
    
    const directions = [
      { x: 150, y: 0 },      // right
      { x: -50, y: 0 },     // left
      { x: 0, y: -50 },     // up
      { x: 0, y: 100 },      // down
      { x: 150, y: -80 },    // diagonal up-right
      { x: -50, y: -80 },   // diagonal up-left
      { x: 150, y: 80 },     // diagonal down-right
      { x: -50, y: 80 }     // diagonal down-left
    ]
    
    const randomDirection = directions[Math.floor(Math.random() * directions.length)]
    setButtonPosition(randomDirection)
    
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
      className="bg-slate-800 text-white min-h-screen flex items-center overflow-hidden relative"
      style={{ fontFamily: 'Abyssinica SIL, serif' }}
    >
      {/* Background Image/GIF Section - Now with min-height to ensure coverage */}
      <div className="absolute inset-0 w-full min-h-[120vh] z-0">
        <SlideInAnimation direction="right" delay={0.3}>
          <img
            src="a.gif"
            alt="Premium Laptop Setup"
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center',
              imageRendering: 'auto',
              minHeight: '120vh' // Ensures the GIF covers extra vertical space
            }}
            loading="eager"
            decoding="auto"
          />
        </SlideInAnimation>
      </div>

      {/* Dark overlay for better text readability - extended to match GIF height */}
      <div className="absolute inset-0 bg-black/40 z-0 min-h-[120vh]"></div>

      {/* Content Container - positioned properly within viewport */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10 w-full h-full flex items-center">
        {/* Content Section - Text in front of image */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* Text Section - Now with responsive padding and margins */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left px-4 sm:px-6 py-12 sm:py-16">
            <SlideInAnimation direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg mb-4 sm:mb-6">
                INTRODUCING OUR<br />
                COMPUTER EDGE TECH
              </h1>
            </SlideInAnimation>

            <SlideInAnimation direction="left" delay={0.4}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-100 max-w-2xl mx-auto lg:mx-0 drop-shadow-md mb-6 sm:mb-8">
                Discover the latest in computer technology with our top-of-the-line laptops designed to power your digital world. From sleek ultrabooks to powerful gaming machines, we offer a diverse selection to meet your computing needs.
              </p>
            </SlideInAnimation>

            <SlideInAnimation direction="left" delay={0.6}>
              <div className="flex justify-center lg:justify-start pt-4 relative">
                <Button 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer shadow-lg"
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

          {/* Spacer for right side on desktop */}
          <div className="hidden lg:block lg:w-1/2"></div>
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