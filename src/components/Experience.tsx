import { useEffect, useRef, useState } from "react";

type TimelineItem = {
  kind: "work" | "education";
  icon: string;
  title: string;
  org: string;
  period: string;
  current?: boolean;
  description: string;
  points: string[];
  tags: string[];
  color: string;
  accent: string;
  demoUrl?: string;
};

const timeline: TimelineItem[] = [
  {
    kind: "work",
    icon: "🤖",
    title: "AI Engineer Intern",
    org: "Sample Assist | Wollongong, NSW",
    period: "Sep 2024 — Jun 2025",
    description:
      "Researched and fine-tuned PaddleOCR to automate patient identity verification, reducing manual data entry and enabling faster treatment workflows.",
    points: [
      "Built and validated OCR pipelines with synthetic datasets",
      "Delivered APIs for AI model integration across products",
      "Collaborated in Agile sprints with stakeholders",
    ],
    tags: ["Python", "FastAPI", "OpenCV", "PostgreSQL", "OCR"],
    color: "#7c3aed",
    accent: "#a78bfa",
    demoUrl: "https://www.youtube.com/embed/g3BSYlM0fOM?si=i9biTTluKwjGW6TV",
  },
  {
    kind: "education",
    icon: "🎓",
    title: "Bachelor of Computer Science",
    org: "University of Wollongong",
    period: "2019 — 2022",
    description:
      "Focused on software engineering, data structures, and database systems with project-based coursework.",
    points: [
      "Capstone project in data engineering",
      "Coursework in algorithms and distributed systems",
      "Collaborative team projects",
    ],
    tags: ["Algorithms", "Databases", "Software Engineering"],
    color: "#059669",
    accent: "#34d399",
  },
];

const kindBadge: Record<string, { label: string; bg: string; text: string }> = {
  work: { label: "Work", bg: "#7c3aed22", text: "#a78bfa" },
  education: { label: "Education", bg: "#05966922", text: "#34d399" },
};

function VideoSlot({ color, accent, demoUrl }: { color: string; accent: string; demoUrl?: string }) {
  const [hovered, setHovered] = useState(false);
  if (demoUrl) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden" style={{ aspectRatio: "16/9" }}>
        <iframe
          src={demoUrl}
          className="w-full h-full"
          title="Demo video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }
  return (
    <div
      className="relative w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300"
      style={{
        aspectRatio: "16/9",
        background: `${color}14`,
        border: `1px dashed ${color}55`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-5"
        style={{ background: "linear-gradient(to top,rgba(0,0,0,0.65),transparent)" }}
      >
        <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.12)" }}>
          <div className="h-full w-1/3 rounded-full" style={{ background: accent }} />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
            0:00
          </span>
          <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.3)" }}>
            2:34
          </span>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? accent : `${color}44`,
            color: hovered ? "#fff" : accent,
            transform: hovered ? "scale(1.12)" : "scale(1)",
            boxShadow: hovered ? `0 0 22px ${color}88` : "none",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-xs font-mono" style={{ color: "rgba(255,255,255,0.28)" }}>
          {hovered ? "Add demo video" : "Demo video"}
        </span>
      </div>
    </div>
  );
}

function EntryRow({ item, index, visible }: { item: TimelineItem; index: number; visible: boolean }) {
  const badge = kindBadge[item.kind];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 py-8"
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.65s ease ${0.15 + index * 0.12}s, transform 0.65s ease ${0.15 + index * 0.12}s`,
      }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
            style={{
              background: `linear-gradient(135deg,${item.color},${item.accent})`,
              boxShadow: `0 4px 16px ${item.color}44`,
            }}
          >
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span className="text-xs font-mono px-2 py-0.5 rounded-full" style={{ background: badge.bg, color: badge.text }}>
                {badge.label}
              </span>
              {item.current && (
                <span
                  className="text-xs font-mono px-2 py-0.5 rounded-full flex items-center gap-1"
                  style={{ background: "#22c55e18", color: "#22c55e" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <h3 className="text-white font-bold text-lg leading-tight">{item.title}</h3>
            <p className="font-semibold text-sm mt-0.5" style={{ color: item.accent }}>
              {item.org}
            </p>
          </div>
        </div>
        <VideoSlot color={item.color} accent={item.accent} demoUrl={item.demoUrl} />
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-lg font-mono"
              style={{ background: "rgba(255,255,255,0.06)", color: "#64748b" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4 pt-1">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono"
          style={{ background: `${item.color}14`, border: `1px solid ${item.color}33`, color: item.accent }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {item.period}
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
        <ul className="space-y-2">
          {item.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
              <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.04 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="min-h-screen px-4 sm:px-8 py-16" style={{ background: "linear-gradient(180deg,#0a0a1a 0%,#080818 100%)" }}>
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase">My Journey</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Experience &{" "}
            <span
              style={{
                background: "linear-gradient(90deg,#a78bfa,#06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Education
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            From internships to real-world systems, here are the roles and milestones that shaped my journey.
          </p>
        </div>
        <div className="flex justify-center gap-6" style={{ opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.1s" }}>
          {[
            { label: "Work Experience", color: "#7c3aed", icon: "💼" },
            { label: "Education", color: "#059669", icon: "🎓" },
          ].map((l) => (
            <div key={l.label} className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: l.color, boxShadow: `0 0 6px ${l.color}` }} />
              <span className="text-slate-400 text-sm font-mono">
                {l.icon} {l.label}
              </span>
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {timeline.map((item, i) => (
            <EntryRow key={`${item.title}-${i}`} item={item} index={i} visible={visible} />
          ))}
        </div>
        <div className="text-center pt-2" style={{ opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.9s" }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <span className="text-slate-500 text-sm">Want the full picture?</span>
            <a
              href={`${process.env.PUBLIC_URL}/cv/${encodeURIComponent("Minh Vu(Mike) - CV.pdf")}`}
              className="text-sm font-semibold px-4 py-1.5 rounded-xl transition-all duration-200 hover:scale-105 text-white no-underline"
              style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
