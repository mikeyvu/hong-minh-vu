import { useEffect, useRef, useState } from "react";

const skills = [
  { name: "Claude Code", level: 84, color: "#d97706", category: "AI" },
  { name: "GitHub Copilot", level: 86, color: "#8b5cf6", category: "AI" },
  { name: "Computer Vision", level: 78, color: "#14b8a6", category: "AI" },
  { name: "LLM", level: 80, color: "#06b6d4", category: "AI" },
  { name: "GAN", level: 72, color: "#ec4899", category: "AI" },
  { name: "RAG", level: 81, color: "#10b981", category: "AI" },
  { name: "Java", level: 80, color: "#f97316", category: "Backend" },
  { name: "Spring Boot", level: 78, color: "#22c55e", category: "Backend" },
  { name: "FastAPI", level: 76, color: "#38bdf8", category: "Backend" },
  { name: "PostgreSQL", level: 74, color: "#336791", category: "Backend" },
  { name: "MySQL", level: 72, color: "#fbbf24", category: "Backend" },
  { name: "React", level: 88, color: "#61dafb", category: "Frontend" },
  { name: "TypeScript", level: 85, color: "#3178c6", category: "Frontend" },
  { name: "JavaScript", level: 82, color: "#f7df1e", category: "Frontend" },
  { name: "Tailwind CSS", level: 86, color: "#38bdf8", category: "Frontend" },
  { name: "Docker", level: 70, color: "#2496ed", category: "DevOps" },
  { name: "Git", level: 75, color: "#f05626", category: "DevOps" },
  { name: "Flutter", level: 60, color: "#60a5fa", category: "Mobile" },
];

const techStack = [
  { name: "Claude Code", icon: "🤖", color: "#d9770622" },
  { name: "GitHub Copilot", icon: "✍️", color: "#8b5cf622" },
  { name: "Computer Vision", icon: "👁️", color: "#14b8a622" },
  { name: "LLM", icon: "🧠", color: "#06b6d422" },
  { name: "GAN", icon: "🌀", color: "#ec489922" },
  { name: "RAG", icon: "🔎", color: "#10b98122" },
  { name: "Java", icon: "☕", color: "#f9731622" },
  { name: "Spring Boot", icon: "🌱", color: "#22c55e22" },
  { name: "FastAPI", icon: "⚡", color: "#38bdf822" },
  { name: "PostgreSQL", icon: "🐘", color: "#33679122" },
  { name: "MySQL", icon: "🐬", color: "#fbbf2422" },
  { name: "React", icon: "⚛️", color: "#61dafb22" },
  { name: "TypeScript", icon: "🔷", color: "#3178c622" },
  { name: "Docker", icon: "🐳", color: "#2496ed22" },
  { name: "Git", icon: "🔱", color: "#f0562622" },
  { name: "Tailwind", icon: "🎨", color: "#38bdf822" },
  { name: "Shadcn UI", icon: "🧩", color: "#ffffff22" },
  { name: "Flutter", icon: "📱", color: "#60a5fa22" },
];

const categories = ["All", "AI", "Backend", "Frontend", "DevOps", "Mobile"];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const filtered = activeCategory === "All" ? skills : skills.filter((s) => s.category === activeCategory);
  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 py-16"
      style={{ background: "linear-gradient(180deg, #0a0a1a 0%, #111128 100%)" }}
    >
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-purple-400 font-mono text-sm tracking-widest uppercase">What I Work With</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Skills &{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Technologies
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            A snapshot of the tools and technologies I use to build scalable applications.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-2" style={{ opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.2s" }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200"
              style={
                activeCategory === cat
                  ? { background: "linear-gradient(135deg, #7c3aed, #06b6d4)", color: "white", transform: "scale(1.05)" }
                  : { background: "rgba(255,255,255,0.05)", color: "#94a3b8", border: "1px solid rgba(255,255,255,0.1)" }
              }
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="space-y-5">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateX(-20px)",
                transition: `all 0.6s ease ${0.3 + i * 0.08}s`,
              }}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <div className="flex justify-between mb-2">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }} />
                  <span className="text-slate-200 font-semibold text-sm">{skill.name}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full font-mono" style={{ background: "rgba(255,255,255,0.06)", color: "#64748b" }}>
                    {skill.category}
                  </span>
                </div>
                <span className="text-slate-400 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                    background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                    boxShadow: hoveredIdx === i ? `0 0 12px ${skill.color}88` : "none",
                    transitionDelay: `${0.3 + i * 0.08}s`,
                    transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="space-y-4" style={{ opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.8s" }}>
          <h3 className="text-slate-400 font-mono text-sm tracking-widest uppercase text-center">Full Tech Stack</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {techStack.map((tech, i) => (
              <div
                key={tech.name}
                className="rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default group transition-all duration-200 hover:scale-110"
                style={{
                  background: tech.color || "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "scale(0.8)",
                  transition: `all 0.4s ease ${0.9 + i * 0.04}s`,
                }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="text-slate-400 text-xs font-mono group-hover:text-white transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
