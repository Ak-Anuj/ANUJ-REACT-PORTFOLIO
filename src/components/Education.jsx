export default function Education() {
  return (
    <section
      id="education"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
          Education & Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* University Card */}
          <div
            className="bg-[#0d0d0d] rounded-2xl shadow-lg p-6 sm:p-8 
            border border-white/10 
            hover:-translate-y-2 hover:shadow-2xl hover:border-[#6049ea] 
            transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              NIMS University
            </h3>

            <p className="text-white/60 text-sm mt-1">
              2022 – 2026
            </p>

            <p className="mt-4 font-medium text-sm sm:text-base">
              B.Tech Computer Science
            </p>

            <p className="text-white/60 mt-4 text-sm">
              Key Skills
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
              {[
                "HTML",
                "CSS",
                "Tailwind CSS",
                "JavaScript",
                "React.js",
                "Express.js",
              ].map((s) => (
                <span
                  key={s}
                  className="bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* School Card */}
          <div
            className="bg-[#0d0d0d] rounded-2xl shadow-lg p-6 sm:p-8 
            border border-white/10 
            hover:-translate-y-2 hover:shadow-2xl hover:border-[#6049ea] 
            transition-all duration-300"
          >
            <h3 className="text-lg sm:text-xl font-semibold">
              Heritage School
            </h3>

            <p className="text-white/60 text-sm mt-1">
              Non-Medical (Science)
            </p>

            <p className="text-white/60 mt-4 text-sm">
              Foundation Subjects
            </p>

            <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
              {["Mathematics", "Physics", "Chemistry"].map((s) => (
                <span
                  key={s}
                  className="bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
