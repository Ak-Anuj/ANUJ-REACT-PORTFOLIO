export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center md:text-left">
          <span className="inline-block border border-[#6049ea] text-[#6049ea] px-3 py-1 rounded-full text-xs sm:text-sm animate-pulse">
            • Available for opportunities
          </span>

          <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
            Web Developer
          </h1>

          <h2 className="text-lg sm:text-xl mt-2 font-semibold text-white/80">
            Anuj Kumar
          </h2>

          <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a frontend-focused developer specializing in building clean,
            modern, and responsive web interfaces using HTML, CSS, Tailwind CSS,
            JavaScript, and React. I enjoy writing efficient code and creating
            smooth user experiences with simple and scalable designs.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="w-full sm:w-auto px-6 py-3 border border-white/20 rounded-xl 
              hover:bg-white hover:text-black transition duration-300 text-center"
            >
              View Projects
            </a>

            <a
              href="/AnujKumarResume.pdf"
              download
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#6049ea] 
              hover:bg-white hover:text-black transition duration-300 text-center"
            >
              Download Resume
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6 text-center md:text-left">
            <div className="hover:-translate-y-1 transition duration-300">
              <p className="text-xl sm:text-2xl font-bold">4+</p>
              <p className="text-xs sm:text-sm text-white/60">Projects</p>
            </div>
            <div className="hover:-translate-y-1 transition duration-300">
              <p className="text-lg sm:text-2xl font-bold">B.Tech CSE</p>
              <p className="text-xs sm:text-sm text-white/60">2022–2026</p>
            </div>
            <div className="hover:-translate-y-1 transition duration-300">
              <p className="text-lg sm:text-2xl font-bold">India</p>
              <p className="text-xs sm:text-sm text-white/60">Location</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 
            rounded-full overflow-hidden border border-white/10 shadow-2xl 
            hover:-translate-y-2 hover:shadow-[0_0_35px_#6049ea] 
            transition duration-300 bg-[#0d0d0d]"
          >
            <img
              src="/Anuj.jpeg"
              alt="Anuj Kumar"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
