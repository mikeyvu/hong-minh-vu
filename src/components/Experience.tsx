import gradPhoto from "../assets/images/grad-photo.jpg";
import { useInView } from "../hooks/useInView";
import { MediaFrame } from "./MediaFrame";

type TimelineItem = {
  kind: "work" | "education" | "competition";
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
  images?: string[];
  imagePositions?: string[];
  demoLink?: string;
};

const timeline: TimelineItem[] = [
  {
    kind: "work",
    icon: "💼",
    title: "Full Stack Software Engineer Intern",
    org: "Annalink OSHC-Students | Sydney, NSW",
    period: "May 2026 — Present",
    current: true,
    description:
      "Developed and enhanced full-stack web applications in a collaborative environment, with emphasis on strengthening backend security, improving database performance, and building efficient administrative interfaces using NestJS while further developing frontend experience with Next.js.",
    points: [
      "Developed RBAC systems in NestJS, dynamically isolating resources and securing backend endpoints.",
      "Optimized full-stack systems by designing scalable PostgreSQL schemas and robust pipelines to efficiently process datasets of million+ records.",
      "Built responsive Next.js/TypeScript dashboards, improving administrative efficiency through advanced filtering and optimized UI components.",
    ],
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "RBAC"],
    color: "#AD5A36",
    accent: "#AD5A36",
    images: [`${process.env.PUBLIC_URL}/Annalink-website.png`],
    demoLink: "https://oshcstudents.com.au/client",
  },
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
    color: "#AD5A36",
    accent: "#AD5A36",
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
      "Graduated with Distinction with major in Big Data and AI",
      "Capstone project with Sample Assist in software development and AI engineering",
      "Coursework in algorithms and distributed systems",
      "Collaborative team projects",
    ],
    tags: ["Algorithms", "Databases", "Software Engineering", "AI", "Big Data"],
    color: "#4B6355",
    accent: "#4B6355",
    images: [gradPhoto],
  },
  {
    kind: "competition",
    icon: "🏆",
    title: "Hack The Gong 2026",
    org: "iAccelerate x Wollongong City Council | Wollongong, NSW",
    period: "Aug 22 — 23, 2026",
    description:
      "My first hackathon — and we walked away with a prize. Our team of five spent 48 hours at Hack The Gong 2026 tackling the Illawarra's Energy Equity challenge: rooftop solar is booming, but renters and low-income households are locked out, while solar owners sell surplus power back for a fraction of what they pay to buy it back at peak. We built Comrade Electricity, a community battery marketplace where solar households bank surplus power as Energy Credits to save or sell at fairer rates, and Priority Households get automated first rights to buy that cheap, clean power before it hits the open market.",
    points: [
      "Designed a community battery marketplace that lets solar households export surplus power for Energy Credits instead of selling at ~5c/kWh",
      "Built automated priority access so renters, apartment dwellers, and energy-hardship households get first rights to cheap solar power",
      "Won 'Best Meme of the Gong' among competing teams",
    ],
    tags: ["Hackathon", "Energy Equity", "Community Battery", "iAccelerate"],
    color: "#4B6355",
    accent: "#4B6355",
    images: [
      `${process.env.PUBLIC_URL}/hack-the-gong-2026/1787623449715.jpg`,
      `${process.env.PUBLIC_URL}/hack-the-gong-2026/1787623451485.jpg`,
    ],
    imagePositions: ["center", "center 20%"],
  },
];

const kindBadge: Record<string, { label: string; bg: string; text: string }> = {
  work: { label: "Work", bg: "#F3E7DE", text: "#7A3D22" },
  education: { label: "Education", bg: "#E9EFE9", text: "#33453A" },
  competition: { label: "Competition", bg: "#FFFFFF", text: "#1C1A17" },
};

function EntryRow({ item, index, visible }: { item: TimelineItem; index: number; visible: boolean }) {
  const badge = kindBadge[item.kind];
  const isCompetition = item.kind === "competition";
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8 rounded-xl bg-surface border border-border"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(24px)",
        transition: `opacity 0.65s ease ${0.15 + index * 0.12}s, transform 0.65s ease ${0.15 + index * 0.12}s`,
      }}
    >
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0 bg-canvas-alt border border-border">
            {item.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-0.5 flex-wrap">
              <span
                className="text-xs font-mono px-2 py-0.5 rounded-full"
                style={{
                  background: badge.bg,
                  color: badge.text,
                  border: isCompetition ? "1px solid #1C1A17" : "none",
                }}
              >
                {badge.label}
              </span>
              {item.current && (
                <span className="text-xs font-mono px-2 py-0.5 rounded-full flex items-center gap-1 bg-moss-pale text-moss-ink">
                  <span className="w-1.5 h-1.5 rounded-full bg-moss inline-block animate-pulse" />
                  Current
                </span>
              )}
            </div>
            <h3 className="text-ink font-bold text-lg leading-tight">{item.title}</h3>
            <p className="font-semibold text-sm mt-0.5" style={{ color: item.accent }}>
              {item.org}
            </p>
          </div>
        </div>
        <MediaFrame
          accent={item.accent}
          video={item.demoUrl}
          images={item.images}
          imagePositions={item.imagePositions}
          demoLink={item.demoLink}
        />
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-mono bg-canvas-alt text-ink-muted">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4 pt-1">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-mono bg-canvas-alt border border-border"
          style={{ color: item.accent }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4 flex-shrink-0">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          {item.period}
        </div>
        <p className="text-ink-muted text-sm leading-relaxed">{item.description}</p>
        <ul className="space-y-2">
          {item.points.map((pt, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: item.accent }} />
              {pt}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const workItems = timeline.filter((item) => item.kind === "work");
const eduItems = timeline.filter((item) => item.kind === "education" || item.kind === "competition");

function TimelineSection({
  items,
  eyebrow,
  titlePlain,
  titleGradient,
  subtitle,
  showCta,
}: {
  items: TimelineItem[];
  eyebrow: string;
  titlePlain: string;
  titleGradient: string;
  subtitle: string;
  showCta: boolean;
}) {
  const { ref, visible } = useInView<HTMLDivElement>(0.04);
  return (
    <div ref={ref} className="px-4 sm:px-8 py-16">
      <div className="max-w-5xl mx-auto w-full space-y-10">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-accent font-mono text-sm tracking-widest uppercase">{eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-ink">
            {titlePlain} <span className="italic text-accent">{titleGradient}</span>
          </h2>
          <p className="text-ink-muted max-w-lg mx-auto">{subtitle}</p>
        </div>
        <div className="space-y-6">
          {items.map((item, i) => (
            <EntryRow key={`${item.title}-${i}`} item={item} index={i} visible={visible} />
          ))}
        </div>
        {showCta && (
          <div className="text-center pt-2" style={{ opacity: visible ? 1 : 0, transition: "all 0.6s ease 0.9s" }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-surface border border-border">
              <span className="text-ink-muted text-sm">Want the full picture?</span>
              <a
                href={`${process.env.PUBLIC_URL}/cv/${encodeURIComponent("Minh Vu(Mike) - CV.pdf")}`}
                className="text-sm font-semibold px-4 py-1.5 rounded-xl transition-colors duration-200 bg-ink hover:bg-ink/85 text-white no-underline"
              >
                Download CV
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <TimelineSection
      items={workItems}
      eyebrow="My Journey"
      titlePlain="Professional"
      titleGradient="Experiences"
      subtitle="From internships to real-world systems, here are the roles that shaped my journey."
      showCta={false}
    />
  );
}

export function Education() {
  return (
    <TimelineSection
      items={eduItems}
      eyebrow="Academic Background"
      titlePlain="Education and"
      titleGradient="Competition"
      subtitle="The degrees and competitions that built my foundation."
      showCta={true}
    />
  );
}
