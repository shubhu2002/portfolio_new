const SKILL_GROUPS = [
  {
    title: "Frontend",
    smoke: "smoke-gradient-3",
    skills: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "SASS", "Framer Motion", "Three.js"],
    doodle: (
      <>
        {/* Browser window */}
        <svg className="absolute right-6 top-6 opacity-[0.07]" width="120" height="90" viewBox="0 0 120 90" fill="none">
          <rect x="1" y="1" width="118" height="88" rx="8" stroke="white" strokeWidth="1.5" />
          <line x1="1" y1="22" x2="119" y2="22" stroke="white" strokeWidth="1" />
          <circle cx="14" cy="12" r="4" stroke="white" strokeWidth="1" />
          <circle cx="28" cy="12" r="4" stroke="white" strokeWidth="1" />
          <circle cx="42" cy="12" r="4" stroke="white" strokeWidth="1" />
          <rect x="14" y="32" width="50" height="6" rx="3" fill="white" />
          <rect x="14" y="46" width="92" height="4" rx="2" fill="white" opacity="0.5" />
          <rect x="14" y="56" width="72" height="4" rx="2" fill="white" opacity="0.3" />
          <rect x="14" y="66" width="82" height="4" rx="2" fill="white" opacity="0.4" />
        </svg>
        {/* React-like orbit */}
        <svg className="skill-spin absolute bottom-8 right-10 opacity-[0.06]" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <ellipse cx="40" cy="40" rx="35" ry="14" stroke="white" strokeWidth="1" />
          <ellipse cx="40" cy="40" rx="35" ry="14" stroke="white" strokeWidth="1" transform="rotate(60 40 40)" />
          <ellipse cx="40" cy="40" rx="35" ry="14" stroke="white" strokeWidth="1" transform="rotate(120 40 40)" />
          <circle cx="40" cy="40" r="5" fill="white" />
        </svg>
      </>
    ),
  },
  {
    title: "Backend",
    smoke: "smoke-gradient-1",
    skills: ["Node.js", "Express.js", "Supabase", "MongoDB", "MySQL", "Firebase", "Appwrite", "Python", "Kafka", "AWS", "Docker", "Redis"],
    doodle: (
      <>
        {/* Server rack */}
        <svg className="absolute right-6 top-6 opacity-[0.07]" width="100" height="100" viewBox="0 0 100 100" fill="none">
          <rect x="10" y="5" width="80" height="25" rx="4" stroke="white" strokeWidth="1.5" />
          <rect x="10" y="37" width="80" height="25" rx="4" stroke="white" strokeWidth="1.5" />
          <rect x="10" y="69" width="80" height="25" rx="4" stroke="white" strokeWidth="1.5" />
          <circle cx="25" cy="17" r="3" fill="white" />
          <circle cx="25" cy="49" r="3" fill="white" />
          <circle cx="25" cy="81" r="3" fill="white" />
          <line x1="35" y1="17" x2="75" y2="17" stroke="white" strokeWidth="1" />
          <line x1="35" y1="49" x2="75" y2="49" stroke="white" strokeWidth="1" />
          <line x1="35" y1="81" x2="75" y2="81" stroke="white" strokeWidth="1" />
        </svg>
        {/* Database cylinder */}
        <svg className="skill-float absolute bottom-8 right-12 opacity-[0.06]" width="60" height="70" viewBox="0 0 60 70" fill="none">
          <ellipse cx="30" cy="12" rx="25" ry="10" stroke="white" strokeWidth="1.5" />
          <line x1="5" y1="12" x2="5" y2="58" stroke="white" strokeWidth="1.5" />
          <line x1="55" y1="12" x2="55" y2="58" stroke="white" strokeWidth="1.5" />
          <ellipse cx="30" cy="58" rx="25" ry="10" stroke="white" strokeWidth="1.5" />
          <ellipse cx="30" cy="35" rx="25" ry="10" stroke="white" strokeWidth="1" strokeDasharray="4 3" />
        </svg>
      </>
    ),
  },
  {
    title: "Web3 & AI",
    smoke: "smoke-gradient-5",
    skills: ["Mesh JS", "Blockchain", "CrewAI", "AI Agents", "Smart Contracts", "MCP"],
    doodle: (
      <>
        {/* Blockchain chain */}
        <svg className="absolute right-6 top-6 opacity-[0.07]" width="120" height="50" viewBox="0 0 120 50" fill="none">
          <rect x="2" y="10" width="28" height="28" rx="6" stroke="white" strokeWidth="1.5" />
          <rect x="46" y="10" width="28" height="28" rx="6" stroke="white" strokeWidth="1.5" />
          <rect x="90" y="10" width="28" height="28" rx="6" stroke="white" strokeWidth="1.5" />
          <line x1="30" y1="24" x2="46" y2="24" stroke="white" strokeWidth="1.5" />
          <line x1="74" y1="24" x2="90" y2="24" stroke="white" strokeWidth="1.5" />
        </svg>
        {/* Neural network */}
        <svg className="skill-pulse absolute bottom-6 right-8 opacity-[0.06]" width="100" height="80" viewBox="0 0 100 80" fill="none">
          <circle cx="15" cy="15" r="6" stroke="white" strokeWidth="1" />
          <circle cx="15" cy="40" r="6" stroke="white" strokeWidth="1" />
          <circle cx="15" cy="65" r="6" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="25" r="6" stroke="white" strokeWidth="1" />
          <circle cx="50" cy="55" r="6" stroke="white" strokeWidth="1" />
          <circle cx="85" cy="40" r="6" stroke="white" strokeWidth="1" />
          <line x1="21" y1="15" x2="44" y2="25" stroke="white" strokeWidth="0.5" />
          <line x1="21" y1="15" x2="44" y2="55" stroke="white" strokeWidth="0.5" />
          <line x1="21" y1="40" x2="44" y2="25" stroke="white" strokeWidth="0.5" />
          <line x1="21" y1="40" x2="44" y2="55" stroke="white" strokeWidth="0.5" />
          <line x1="21" y1="65" x2="44" y2="25" stroke="white" strokeWidth="0.5" />
          <line x1="21" y1="65" x2="44" y2="55" stroke="white" strokeWidth="0.5" />
          <line x1="56" y1="25" x2="79" y2="40" stroke="white" strokeWidth="0.5" />
          <line x1="56" y1="55" x2="79" y2="40" stroke="white" strokeWidth="0.5" />
        </svg>
      </>
    ),
  },
  {
    title: "Tools",
    smoke: "smoke-gradient-2",
    skills: ["Git", "Vercel", "VS Code", "Zustand", "Redux", "Swagger", "Lenis", "GSAP", "Zapier"],
    doodle: (
      <>
        {/* Terminal window */}
        <svg className="absolute right-6 top-6 opacity-[0.07]" width="110" height="80" viewBox="0 0 110 80" fill="none">
          <rect x="1" y="1" width="108" height="78" rx="8" stroke="white" strokeWidth="1.5" />
          <line x1="1" y1="18" x2="109" y2="18" stroke="white" strokeWidth="1" />
          <circle cx="12" cy="10" r="3" stroke="white" strokeWidth="1" />
          <circle cx="22" cy="10" r="3" stroke="white" strokeWidth="1" />
          <circle cx="32" cy="10" r="3" stroke="white" strokeWidth="1" />
          <path d="M15 30 L28 40 L15 50" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <line x1="34" y1="50" x2="60" y2="50" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        {/* Git branch */}
        <svg className="skill-float absolute bottom-8 right-10 opacity-[0.06]" width="70" height="80" viewBox="0 0 70 80" fill="none">
          <circle cx="20" cy="12" r="6" stroke="white" strokeWidth="1.5" />
          <circle cx="20" cy="68" r="6" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="40" r="6" stroke="white" strokeWidth="1.5" />
          <line x1="20" y1="18" x2="20" y2="62" stroke="white" strokeWidth="1.5" />
          <path d="M20 30 Q20 40, 44 40" stroke="white" strokeWidth="1.5" fill="none" />
        </svg>
      </>
    ),
  },
];

const Skills = () => {
  return (
      <section id="skills" className="bg-primary px-4 py-16 md:px-16 md:py-28 lg:px-24">
        <div className="mb-10 md:mb-16">
          <h2 className="font-thunder-extrabold text-4xl uppercase tracking-wide text-white md:text-7xl lg:text-8xl">
            Skills &
            <br />
            Technologies
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.title}
              className={`${group.smoke} relative overflow-hidden rounded-2xl p-5 md:p-10`}
            >
              <div className="absolute inset-0 bg-black/40" />

              {/* Doodles */}
              {group.doodle}

              {/* Grid pattern */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px"
              }} />

              <div className="relative z-10">
                <h3 className="mb-6 font-thunder-bold text-3xl uppercase tracking-wider text-white md:text-4xl">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/20 bg-black/30 px-4 py-2 font-helvetica-light text-[11px] uppercase tracking-[0.15em] text-white/90 backdrop-blur-sm transition-colors hover:border-white/40 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
  );
};

export default Skills;
