import todoBotMock from "../assets/images/todo-bot-mock.png";
// import portfolioMock from "../assets/images/portfolio-demo.jpg";
import gongSoccerDemo from "../assets/images/gong-soccer-demo.jpg";
import { useInView } from "../hooks/useInView";
import { MediaFrame } from "./MediaFrame";

const projects = [
  {
    title: "Todo Bot — Full-Stack MERN",
    description:
      "A full-stack task management app with reusable UI components and MongoDB persistence.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    accent: "#AD5A36",
    status: "In Progress",
    demoVideo: null,
    previewImage: todoBotMock,
    githubUrl: "https://github.com/mikeyvu/todo-bot",
    liveUrl: null,
  },
  {
    title: "Online Ordering System",
    description:
      "A restaurant ordering and admin system with QR ordering, menu management, and reporting.",
    tech: ["Java", "MySQL", "JSP", "JavaScript", "HTML/CSS"],
    accent: "#AD5A36",
    status: "Live",
    demoVideo: "https://www.youtube.com/embed/Wyt5HsjooLg?si=C-Yvvj0YtYaNL9Z3",
    githubUrl: "https://github.com/mikeyvu/online-ordering-system",
    liveUrl: "https://www.youtube.com/watch?v=Wyt5HsjooLg",
  },
  /* {
    title: "Portfolio — Mike Vu",
    description:
      "This personal portfolio showcasing projects, experience, and technical skills with a bold visual theme.",
    tech: ["React", "TypeScript", "Tailwind CSS", "GitHub Pages"],
    color: "#d97706",
    accent: "#fbbf24",
    gradient: "linear-gradient(135deg, #1a0e00 0%, #3d2200 100%)",
    status: "Live",
    demoVideo: null,
    previewImage: portfolioMock,
    githubUrl: "https://github.com/mikeyvu/hong-minh-vu",
    liveUrl: "https://mikeyvu.github.io/hong-minh-vu/",
  }, */
  {
    title: "Gong Soccer",
    description:
      "An in-progress football management experience with team stats, fixtures, and roster updates.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    accent: "#4B6355",
    status: "In Progress",
    demoVideo: null,
    previewImage: gongSoccerDemo,
    githubUrl: null,
    liveUrl: null,
  },
];

const statusColors: Record<string, string> = {
  Live: "#4B6355",
  "Open Source": "#4B6355",
  "In Progress": "#9A9285",
};

export function Projects() {
  const { ref, visible } = useInView<HTMLDivElement>(0.05);
  return (
    <div ref={ref} className="px-4 sm:px-8 py-16">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase">Things I&apos;ve Built</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-ink">
            My <span className="italic text-accent">Projects</span>
          </h2>
          <p className="text-ink-muted max-w-lg mx-auto">
            Real-world applications I&apos;ve designed, built, and shipped — from idea to production.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden bg-surface border border-border transition-all duration-300 hover:-translate-y-0.5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.2 + i * 0.12}s, transform 0.6s ease ${0.2 + i * 0.12}s, box-shadow 0.3s ease, border-color 0.3s ease`,
                boxShadow: "0 2px 8px rgba(28,26,23,0.04)",
              }}
            >
              <div className="px-5 pt-5">
                <MediaFrame accent={project.accent} video={project.demoVideo} images={project.previewImage ? [project.previewImage] : undefined} />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-ink font-bold text-base leading-snug flex-1 mr-3">{project.title}</h3>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[project.status] || "#9A9285" }} />
                    <span className="text-xs font-mono whitespace-nowrap" style={{ color: statusColors[project.status] || "#9A9285" }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed line-clamp-2">{project.description}</p>
                {!project.demoVideo && !project.liveUrl && (
                  <p className="text-xs font-mono text-ink-faint">Demo coming soon</p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-lg font-mono bg-canvas-alt text-ink-muted">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2 pt-1">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors duration-200 no-underline text-ink-muted hover:text-ink"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors duration-200 hover:bg-ink/85 no-underline bg-ink text-white"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
