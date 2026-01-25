const projects = [
  {
    title: "Job Portal",
    desc: "A fast and lightweight product landing page created using HTML, CSS and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
    preview: "https://job-portal-frontend-ten-ashy.vercel.app/",
    github: "https://github.com/Ak-Anuj",
  },
  {
    title: "Portfolio Website",
    desc: "A modern personal portfolio built using React and Tailwind CSS with a clean UI and responsive layout.",
    stack: ["React", "Tailwind", "JavaScript"],
    preview: "https://anuj-portfolio-eight.vercel.app/",
    github: "https://github.com/Ak-Anuj",
  },
  {
    title: "Todo App",
    desc: "A simple task manager allowing users to add, delete and track daily tasks with local storage support.",
    stack: ["React", "CSS"],
    preview: "#",
    github: "https://github.com/Ak-Anuj",
  },
  {
    title: "Weather App",
    desc: "A weather forecast app fetching real-time API data and displaying it in a clean UI.",
    stack: ["JavaScript", "API", "CSS"],
    preview: "#",
    github: "https://github.com/Ak-Anuj",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8"
      
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Featured Projects
        </h2>

        <p className="text-white/70 max-w-2xl text-sm sm:text-base">
          A collection of projects showcasing my skills in frontend development,
          clean UI design and responsive web applications.
        </p>

        {/* Projects Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-[#0d0d0d] rounded-2xl shadow-lg p-6 sm:p-8 border border-white/10 
              hover:-translate-y-2 hover:shadow-2xl hover:border-[#6049ea] 
              transition-all duration-300"
            >
              <h3 className="text-lg sm:text-xl font-semibold">
                {p.title}
              </h3>

              <p className="mt-3 text-white/70 text-sm sm:text-base leading-relaxed">
                {p.desc}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2 text-xs sm:text-sm">
                {p.stack.map((s, j) => (
                  <span
                    key={j}
                    className="bg-white/10 border border-white/10 px-3 py-1 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={p.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center border border-white/20 rounded-xl py-2 
                  hover:bg-white hover:text-black transition duration-300"
                >
                  Live Preview
                </a>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center rounded-xl py-2 
                  bg-[#6049ea] hover:bg-white hover:text-black transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
