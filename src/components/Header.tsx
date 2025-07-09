import { Button } from "@/ui/button"
import { Monitor } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-slate-800 text-white px-4 md:px-6 lg:px-8 py-4" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Monitor className="w-8 h-8" />
          <span className="text-xl font-semibold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Utsav Software Store</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Home</a>
          <a href="#about" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>About</a>
          <a href="#products" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Products</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Contact</a>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-6" style={{ fontFamily: 'Abyssinica SIL, serif' }}>FAQ</Button>
        </nav>
      </div>
    </header>
  )
}