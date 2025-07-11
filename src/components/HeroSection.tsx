import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/ui/button"
import { SlideInAnimation } from "@/ui/Animations"

export default function HeroSection() {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const [attempts, setAttempts] = useState(0)
  const [showToast, setShowToast] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const directions = [
    { x: 150, y: 0 },    // Right
    { x: -50, y: 0 },    // Left
    { x: 0, y: 30 },     // Up (limited to 30px instead of -50)
    { x: 0, y: 100 },    // Down
    { x: 150, y: 30 },   // Diagonal up-right (safe zone)
    { x: -50, y: 30 },   // Diagonal up-left (safe zone)
    { x: 150, y: 80 },   // Diagonal down-right
    { x: -50, y: 80 }    // Diagonal down-left
  ]

  const moveButton = () => {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

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

  const isMouseNearButton = (mouseX: number, mouseY: number): boolean => {
    if (!buttonRef.current) return false

    const buttonRect = buttonRef.current.getBoundingClientRect()
    const threshold = 1.5

    return (
      mouseX >= buttonRect.left - threshold &&
      mouseX <= buttonRect.right + threshold &&
      mouseY >= buttonRect.top - threshold &&
      mouseY <= buttonRect.bottom + threshold
    )
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isMouseNearButton(e.clientX, e.clientY)) {
        moveButton()
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [attempts])

  return (
    <section
      ref={containerRef}
      className="bg-slate-800 text-white min-h-screen flex items-center overflow-hidden relative"
      style={{ fontFamily: 'Abyssinica SIL, serif' }}
    >
      {/* Background GIF */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="a.gif"
          alt="Background Tech Animation"
          className="w-full h-full object-cover absolute bottom-0"
          style={{ objectPosition: 'center bottom', minHeight: '100vh' }}
          loading="eager"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16 relative z-10 w-full h-full flex items-center">
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          
          {/* Left Text Section */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8 text-center lg:text-left px-4 sm:px-6 py-12 sm:py-16">
            <SlideInAnimation direction="left" delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg mb-4 sm:mb-6 whitespace-nowrap">
                <span className="block overflow-visible">INTRODUCING OUR</span>
                <span className="block overflow-visible">COMPUTER EDGE TECH</span>
              </h1>
            </SlideInAnimation>

            <SlideInAnimation direction="left" delay={0.4}>
              <p className="text-sm sm:text-base lg:text-lg text-gray-100 max-w-2xl mx-auto lg:mx-0 drop-shadow-md mb-6 sm:mb-8">
                Discover the latest in computer technology with our top-of-the-line laptops designed to power your digital world.
              </p>
            </SlideInAnimation>

            <SlideInAnimation direction="left" delay={0.6}>
              <div className="flex justify-center lg:justify-start pt-4 relative">
                <Button
                  ref={buttonRef}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out cursor-pointer shadow-lg"
                  style={{
                    transform: `translate(${buttonPosition.x}px, ${buttonPosition.y}px)`,
                  }}
                  onClick={handleButtonClick}
                >
                  Shop Now
                </Button>
              </div>
            </SlideInAnimation>
          </div>

          {/* Right Image Section */}
          <div className="hidden lg:block lg:w-1/2 relative">
            <SlideInAnimation direction="right" delay={0.4}>
              <img
                src="Z.png"
                alt="Featured Product Animation"
                className="w-full h-auto max-h-[90vh] max-w-[900px]"
                style={{ filter: 'drop-shadow(0 0 20px rgba(251, 191, 36, 0.3))' }}
                loading="eager"
              />
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
