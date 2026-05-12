import { useEffect, useRef, useState } from "react";
import todoBotMock from "../assets/images/todo-bot-mock.png";
import portfolioMock from "../assets/images/portfolio-demo.jpg"

const projects = [
  {
    title: "Todo Bot — Full-Stack MERN",
    description:
      "A full-stack task management app with reusable UI components and MongoDB persistence. Demo coming soon.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose"],
    color: "#7c3aed",
    accent: "#a78bfa",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1060 100%)",
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
    color: "#0891b2",
    accent: "#22d3ee",
    gradient: "linear-gradient(135deg, #031220 0%, #0c3244 100%)",
    status: "Live",
    demoVideo: "https://www.youtube.com/embed/Wyt5HsjooLg?si=C-Yvvj0YtYaNL9Z3",
    githubUrl: "https://github.com/mikeyvu/online-ordering-system",
    liveUrl: "https://www.youtube.com/watch?v=Wyt5HsjooLg",
  },
  {
    title: "Gong Soccer",
    description:
      "An in-progress football management experience with team stats, fixtures, and roster updates. Demo coming soon.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    color: "#059669",
    accent: "#34d399",
    gradient: "linear-gradient(135deg, #011a0f 0%, #053321 100%)",
    status: "In Progress",
    demoVideo: null,
    githubUrl: null,
    liveUrl: null,
  },
  {
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
  },
];

const statusColors: Record<string, string> = {
  Live: "#22c55e",
  "Open Source": "#3b82f6",
  "In Progress": "#f59e0b",
};

function VideoPlaceholder({
  color,
  accent,
  videoUrl,
  previewImage,
}: {
  color: string;
  accent: string;
  videoUrl: string | null;
  previewImage?: string;
}) {
  const [hovered, setHovered] = useState(false);
  if (videoUrl) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
        {videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be") ? (
          <iframe
            src={videoUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Project demo"
          />
        ) : (
          <video src={videoUrl} controls className="w-full h-full object-cover" />
        )}
      </div>
    );
  }
  if (previewImage) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <img src={previewImage} alt="Project preview" className="w-full h-full object-cover" />
      </div>
    );
  }
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{ aspectRatio: "16/9", background: `${color}18`, border: `1px dashed ${color}55` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-4"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
      >
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.15)" }}>
          <div className="h-full w-1/3 rounded-full" style={{ background: accent }} />
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
            0:00
          </span>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
            2:34
          </span>
        </div>
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? accent : `${color}44`,
            color: hovered ? "#fff" : accent,
            transform: hovered ? "scale(1.12)" : "scale(1)",
            boxShadow: hovered ? `0 0 24px ${color}88` : "none",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
          {hovered ? "Click to add demo video" : "Demo video"}
        </p>
      </div>
    </div>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className="min-h-screen px-4 sm:px-8 py-16"
      style={{ background: "linear-gradient(180deg, #080818 0%, #0d0d24 100%)" }}
    >
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">Things I&apos;ve Built</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            My{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Real-world applications I&apos;ve designed, built, and shipped — from idea to production.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1"
              style={{
                background: project.gradient,
                border: `1px solid ${project.color}33`,
                opacity: visible ? 1 : 0,
                transform: visible ? "none" : "translateY(30px)",
                transition: `opacity 0.6s ease ${0.2 + i * 0.12}s, transform 0.6s ease ${0.2 + i * 0.12}s, box-shadow 0.3s ease`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = `0 20px 40px ${project.color}22`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div className="px-5 pt-5">
                <VideoPlaceholder
                  color={project.color}
                  accent={project.accent}
                  videoUrl={project.demoVideo}
                  previewImage={project.previewImage}
                />
              </div>
              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-bold text-base leading-snug flex-1 mr-3">{project.title}</h3>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: statusColors[project.status] || "#888" }} />
                    <span className="text-xs font-mono whitespace-nowrap" style={{ color: statusColors[project.status] || "#888" }}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                {!project.demoVideo && !project.liveUrl && (
                  <p className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.45)" }}>
                    Demo coming soon
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-lg font-mono"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#94a3b8" }}
                    >
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
                      className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 hover:scale-105 no-underline"
                      style={{ background: `${project.color}33`, color: project.accent, border: `1px solid ${project.color}44` }}
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
                      className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all duration-200 hover:scale-105 no-underline"
                      style={{ background: "rgba(255,255,255,0.06)", color: "#cbd5e1", border: "1px solid rgba(255,255,255,0.1)" }}
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
