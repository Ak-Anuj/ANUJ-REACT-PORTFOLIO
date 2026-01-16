export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-10">Education & Strengths</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-[#0d0d0d] rounded-2xl shadow-xl p-8 border border-white/10 hover:border-[#6049ea] transition">
          <h3 className="text-xl font-semibold">NIMS University</h3>
          <p className="text-white/60 text-sm mt-1">2022 – 2026</p>
          <p className="mt-3 font-medium">B.Tech Computer Science</p>
          <p className="text-white/60 mt-2">Key Skills</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {['HTML','CSS','Tailwind CSS','JavaScript','React.js', 'Express.js'].map(s=>
              <span key={s} className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">{s}</span>
            )}
          </div>
        </div>

        <div className="bg-[#0d0d0d] rounded-2xl shadow-xl p-8 border border-white/10 hover:border-[#6049ea] transition">
          <h3 className="text-xl font-semibold">Heritage School</h3>
          <p className="text-white/60 text-sm mt-1">Non-Medical (Science)</p>
          <p className="text-white/60 mt-2">Foundation Subjects</p>
          <div className="mt-4 flex flex-wrap gap-2 text-sm">
            {['Mathematics','Physics','Chemistry'].map(s=>
              <span key={s} className="bg-white/10 border border-white/10 px-3 py-1 rounded-full">{s}</span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
