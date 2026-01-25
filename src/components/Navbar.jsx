import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <span className="text-lg sm:text-xl font-semibold tracking-wide">
            Anuj Kumar
          </span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-[#6049ea] transition duration-300">
              Home
            </a>
            <a href="#education" className="hover:text-[#6049ea] transition duration-300">
              Education
            </a>
            <a href="#projects" className="hover:text-[#6049ea] transition duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-[#6049ea] transition duration-300">
              Contact
            </a>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col items-center py-6 space-y-6 text-sm font-medium">
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#6049ea] transition"
            >
              Home
            </a>
            <a
              href="#education"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#6049ea] transition"
            >
              Education
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#6049ea] transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-[#6049ea] transition"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
