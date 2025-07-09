import { Button } from "@/ui/button"
import { Monitor, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-slate-800 text-white px-4 md:px-6 lg:px-8 py-4 shadow-md"
      style={{ fontFamily: 'Abyssinica SIL, serif' }}
    >
      <div className="max-w-[2000px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Monitor className="w-8 h-8" />
          <span className="text-xl font-semibold">Utsav Software Store</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6">FAQ</Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Menu className="w-8 h-8" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <a href="#home" className="block text-gray-300 hover:text-white transition-colors">Home</a>
          <a href="#about" className="block text-gray-300 hover:text-white transition-colors">About</a>
          <a href="#products" className="block text-gray-300 hover:text-white transition-colors">Products</a>
          <a href="#contact" className="block text-gray-300 hover:text-white transition-colors">Contact</a>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white w-full">FAQ</Button>
        </div>
      )}
    </header>
  )
}
