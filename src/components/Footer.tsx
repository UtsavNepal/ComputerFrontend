import React from "react"
import { Monitor, Facebook, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer  id="detail" className="bg-slate-800 text-white py-16" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
      <div className="max-w-[2000px] mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Monitor className="w-8 h-8" />
              <span className="text-xl font-semibold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Utsav Software Store</span>
            </div>
            <p className="text-gray-400 text-sm" style={{ fontFamily: 'Abyssinica SIL, serif' }}>
              © 2025 Utsav Software Store, Inc.<br />
              All rights reserved.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Quick Links</h3>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Home</a>
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>About</a>
              <a href="#products" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Products</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Contact</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Our Company</h3>
            <div className="space-y-2">
              <a href="#overview" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Overview</a>
              <a href="#mission" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Mission</a>
              <a href="#team" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Team</a>
              <a href="#careers" className="block text-gray-400 hover:text-white transition-colors" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Careers</a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" style={{ fontFamily: 'Abyssinica SIL, serif' }}>Connect with Us</h3>
            <div className="space-y-3">
              <a 
                href="https://www.facebook.com/utsav.simpleguy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Abyssinica SIL, serif' }}
              >
                <Facebook className="w-5 h-5" />
                Facebook
              </a>
              <a 
                href="https://www.instagram.com/mr.utsavnepal__?igsh=Y2hyMmJ5czY3Z2Zv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Abyssinica SIL, serif' }}
              >
                <Instagram className="w-5 h-5" />
                Instagram
              </a>
              <a 
                href="mailto:utsavnepal021@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                style={{ fontFamily: 'Abyssinica SIL, serif' }}
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}