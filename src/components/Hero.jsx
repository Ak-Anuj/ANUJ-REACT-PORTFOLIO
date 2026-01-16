export default function Hero() {
  return (
    <section id="home" className="py-20 grid md:grid-cols-2 gap-10 items-center">
      <div>
        <span className="inline-block border border-[#6049ea] text-[#6049ea] px-3 py-1 rounded-full text-sm animate-pulse">
          • Available for opportunities
        </span>

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
          Web Developer
        </h1>
        <h2 className="text-xl mt-2 font-semibold text-white/80">Anuj Kumar</h2>

        <p className="mt-4 text-white/70">
          I am a frontend-focused developer specializing in building clean, modern,
          and responsive web interfaces using HTML, CSS, Tailwind CSS, JavaScript,
          and React. I enjoy writing efficient code and creating smooth user
          experiences with simple and scalable designs.
        </p>

        <div className="mt-6 flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-6 py-3 border border-white/20 rounded-xl hover:bg-white hover:text-black transition duration-300"
          >
            View Projects
          </a>

          <a
            href="/AnujKumarResume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-[#6049ea] hover:bg-white hover:text-black transition duration-300"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-6 text-center">
          <div className="hover:-translate-y-1 transition duration-300">
            <p className="text-2xl font-bold">4+</p>
            <p className="text-sm text-white/60">Projects</p>
          </div>
          <div className="hover:-translate-y-1 transition duration-300">
            <p className="text-2xl font-bold">B.Tech CSE</p>
            <p className="text-sm text-white/60">2022–2026</p>
          </div>
          <div className="hover:-translate-y-1 transition duration-300">
            <p className="text-2xl font-bold">India</p>
            <p className="text-sm text-white/60">Location</p>
          </div>
        </div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center">
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-white/10 shadow-2xl hover:-translate-y-1 hover:shadow-[0_0_35px_#6049ea] transition duration-300 bg-[#0d0d0d]">
          
          <img
            src="/Anuj.jpeg"
            alt="Anuj Kumar"
            className="w-full h-full object-cover object-top"
          />

        </div>
      </div>

    </section>
  )
}
