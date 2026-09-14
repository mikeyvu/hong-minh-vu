import { useInView } from "../hooks/useInView";

const techStack = [
  { name: "Claude Code", icon: "🤖" },
  { name: "GitHub Copilot", icon: "✍️" },
  { name: "Computer Vision", icon: "👁️" },
  { name: "LLM", icon: "🧠" },
  { name: "GAN", icon: "🌀" },
  { name: "RAG", icon: "🔎" },
  { name: "Java", icon: "☕" },
  { name: "Spring Boot", icon: "🌱" },
  { name: "FastAPI", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔱" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Shadcn UI", icon: "🧩" },
  { name: "Flutter", icon: "📱" },
];

const rowSizes = [6, 5, 4, 3];

function chunkIntoRows<T>(items: T[], sizes: number[]) {
  const rows: T[][] = [];
  let offset = 0;
  for (const size of sizes) {
    rows.push(items.slice(offset, offset + size));
    offset += size;
  }
  return rows;
}

export function Skills() {
  const { ref, visible } = useInView<HTMLDivElement>(0.1);
  const rows = chunkIntoRows(techStack, rowSizes);
  return (
    <div ref={ref} className="px-4 sm:px-8 py-10">
      <div className="max-w-5xl mx-auto w-full space-y-12">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase">What I Work With</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-ink">
            Skills and <span className="italic text-accent">Technologies</span>
          </h2>
          <p className="text-ink-muted max-w-xl mx-auto">
            A snapshot of the tools and technologies I use to build scalable applications.
          </p>
        </div>
        <div className="space-y-3" style={{ opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.3s" }}>
          {rows.map((row, rowIdx) => (
            <div key={rowIdx} className="flex flex-wrap justify-center gap-3">
              {row.map((tech, i) => {
                const globalIdx = rowSizes.slice(0, rowIdx).reduce((a, b) => a + b, 0) + i;
                return (
                  <div
                    key={tech.name}
                    className="w-24 sm:w-28 rounded-2xl p-4 flex flex-col items-center gap-2 cursor-default group transition-all duration-200 hover:-translate-y-0.5 bg-surface-alt border border-border"
                    style={{
                      opacity: visible ? 1 : 0,
                      transform: visible ? "none" : "scale(0.8)",
                      transition: `all 0.4s ease ${0.4 + globalIdx * 0.04}s`,
                    }}
                  >
                    <span className="text-2xl">{tech.icon}</span>
                    <span className="text-ink-muted text-xs font-mono group-hover:text-ink transition-colors">{tech.name}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
