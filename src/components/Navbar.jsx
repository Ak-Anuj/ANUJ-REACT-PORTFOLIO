export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <span className="text-xl font-bold">Anuj Kumar</span>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:text-[#6049ea] transition">Home</a>
          <a href="#education" className="hover:text-[#6049ea] transition">Education</a>
          <a href="#projects" className="hover:text-[#6049ea] transition">Projects</a>
          <a href="#contact" className="hover:text-[#6049ea] transition">Contact</a>
        </nav>
      </div>
    </header>
  )
}
