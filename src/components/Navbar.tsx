"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Cerita", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Rute", href: "#schedule" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-cream shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="font-poppins font-bold text-xl text-brand-green-dark">
              Mie Ayam <span className="text-brand-mustard-dark">Mas Pur</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-brand-green font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6283182171871?text=Halo%20Mas%20Pur,%20saya%20mau%20pesan%20Mie%20Ayam"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-brand-green hover:bg-brand-green-dark transition-colors"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Hubungi Mas Pur
            </a>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-brand-green focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-brand-cream shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-green hover:bg-brand-cream/50"
              >
                {link.name}
              </a>
            ))}
            <a
              href="https://wa.me/6283182171871?text=Halo%20Mas%20Pur,%20saya%20mau%20pesan%20Mie%20Ayam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-brand-green hover:bg-brand-green-dark"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Hubungi Mas Pur
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
