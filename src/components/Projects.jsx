const projects = [
  { title:'Job Portal', desc:'A fast and lightweight product landing page created using HTML, CSS and JavaScript.', stack:['HTML','CSS','JavaScript'], preview:'#', github:'#' },
  { title:'Portfolio Website', desc:'A modern personal portfolio built using React and Tailwind CSS with a clean UI and responsive layout.', stack:['React','Tailwind','JavaScript'], preview:'https://anuj-portfolio-eight.vercel.app/', github:'https://github.com/Ak-Anuj/Anuj-portfolio' },
  { title:'Todo App', desc:'A simple task manager allowing users to add, delete and track daily tasks with local storage support.', stack:['React','CSS'], preview:'#', github:'#' },
  { title:'Weather App', desc:'A weather forecast app fetching real-time API data and displaying it in a clean UI.', stack:['JavaScript','API','CSS'], preview:'#', github:'#' }
]

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
      <p className="text-white/70 max-w-2xl">
        A collection of projects showcasing my skills in frontend development,
        clean UI design and responsive web applications.
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8">
        {projects.map((p,i)=>(
          <div key={i} className="bg-[#0d0d0d] rounded-2xl shadow-xl p-8 border border-white/10 hover:-translate-y-1 hover:border-[#6049ea] transition duration-300">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-3 text-white/70">{p.desc}</p>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              {p.stack.map((s,j)=>(
                <span key={j} className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">{s}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a href={p.preview} target="_blank" className="flex-1 text-center border border-white/20 rounded-xl py-2 hover:bg-white hover:text-black transition duration-300">Preview</a>
              <a href={p.github} target="_blank" className="flex-1 text-center rounded-xl py-2 bg-[#6049ea] hover:bg-white hover:text-black transition duration-300">GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
