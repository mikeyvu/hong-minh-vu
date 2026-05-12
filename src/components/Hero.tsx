import { useEffect, useRef, useState } from "react";
import avatar from "../assets/images/Mike Vu - avatar.jpg";

function useCountUp(target: number, duration = 1800, start = false) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return value;
}

const skills = [
  "TypeScript",
  "JavaScript",
  "Java",
  "React",
  "Tailwind CSS",
  "FastAPI",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Git",
  "GitHub",
];

const stats = [
  { label: "Projects Completed", value: 5, suffix: "" },
  { label: "Years Experience", value: 2, suffix: "" },
  { label: "Technologies", value: 10, suffix: "+" },
  { label: "GitHub Commits", value: 350, suffix: "+" },
];

const roles = [
  "Full Stack Software Engineer",
  "Backend Engineer",
  "AI Engineer",
  "Data Engineer",
];

export function Hero() {
  const [visible, setVisible] = useState(false);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  const s0 = useCountUp(stats[0].value, 1600, visible);
  const s1 = useCountUp(stats[1].value, 1000, visible);
  const s2 = useCountUp(stats[2].value, 1200, visible);
  const s3 = useCountUp(stats[3].value, 2000, visible);
  const counts = [s0, s1, s2, s3];

  const cvFileName = "Minh Vu(Mike) - CV.pdf";
  const cvHref = `${process.env.PUBLIC_URL}/cv/${encodeURIComponent(cvFileName)}`;

  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-20 blur-3xl"
          style={{
            width: 500,
            height: 500,
            top: -100,
            right: -100,
            background: "radial-gradient(circle, #7c3aed, transparent 70%)",
            animation: "pulse 6s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full opacity-15 blur-3xl"
          style={{
            width: 400,
            height: 400,
            bottom: 0,
            left: -80,
            background: "radial-gradient(circle, #06b6d4, transparent 70%)",
            animation: "pulse 8s ease-in-out infinite 2s",
          }}
        />
        <svg
          className="absolute inset-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div
            className="space-y-6"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(-40px)",
              transition: "all 0.8s ease",
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-sm font-mono tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>
            <div>
              <p className="text-purple-300 font-mono text-lg mb-1">Hello, I&apos;m</p>
              <h1 className="text-4xl sm:text-6xl font-black text-white leading-tight tracking-tight">
                Mike<br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #a78bfa, #06b6d4)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Vu
                </span>
              </h1>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-xl text-slate-300 font-mono">
                {displayed}
                <span className="animate-pulse text-purple-400">|</span>
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              I&apos;m a backend developer passionate about building scalable systems that
              solve real-world problems and eliminate unnecessary manual work.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 rounded-xl text-white font-semibold text-sm transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-xl text-white font-semibold text-sm border border-white/20 hover:border-purple-400 transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                Get in Touch
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mikeyvu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-200">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hong-minh-vu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-200">
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href={cvHref}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)" }}
                aria-label="Download CV"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-slate-200">CV</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {skills.map((s, i) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full text-xs font-mono text-slate-300 border border-white/10"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "translateY(10px)",
                    transition: `all 0.5s ease ${0.8 + i * 0.05}s`,
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div
            className="space-y-5"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "none" : "translateX(40px)",
              transition: "all 0.8s ease 0.2s",
            }}
          >
            <div className="relative mx-auto w-fit">
              <div
                className="w-48 h-48 rounded-full mx-auto flex items-center justify-center text-6xl font-black text-white relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)",
                }}
              >
                <img
                  src={avatar}
                  alt="Mike Vu"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 45%" }}
                />
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.15), transparent)",
                    animation: "spin 8s linear infinite",
                  }}
                />
              </div>
              <div
                className="absolute -bottom-2 -right-2 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }}
              >
                ⚡
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-5 text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    opacity: visible ? 1 : 0,
                    transform: visible ? "none" : "scale(0.9)",
                    transition: `all 0.5s ease ${0.4 + i * 0.1}s`,
                  }}
                >
                  <div
                    className="text-4xl font-black mb-1"
                    style={{
                      background: "linear-gradient(90deg, #a78bfa, #06b6d4)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {counts[i]}{stat.suffix}
                  </div>
                  <div className="text-slate-400 text-xs font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
