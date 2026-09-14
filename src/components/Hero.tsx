import { useEffect, useState } from "react";
import avatar from "../assets/images/Mike Vu - avatar.jpg";
import { useInView } from "../hooks/useInView";

const roles = [
  "Full Stack Software Engineer",
  "Backend Engineer",
  "AI Engineer",
  "Data Engineer",
];

export function Hero() {
  const { ref, visible } = useInView<HTMLDivElement>(0.1);
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
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

  const cvFileName = "Minh Vu(Mike) - CV.pdf";
  const cvHref = `${process.env.PUBLIC_URL}/cv/${encodeURIComponent(cvFileName)}`;

  return (
    <div ref={ref} className="relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-8 pt-16 pb-16 w-full">
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
              <div className="w-2 h-2 rounded-full bg-moss animate-pulse" />
              <span className="text-moss text-sm font-mono tracking-widest uppercase">
                Available for opportunities
              </span>
            </div>
            <div>
              <p className="text-ink-muted font-mono text-lg mb-1">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl sm:text-6xl font-serif font-semibold text-ink leading-tight tracking-tight">
                Mike
                <br />
                <span className="italic text-accent">Vu</span>
              </h1>
            </div>
            <div className="h-10 flex items-center">
              <span className="text-xl text-ink-muted font-mono">
                {displayed}
                <span className="animate-pulse text-accent">|</span>
              </span>
            </div>
            <p className="text-ink-muted text-base leading-relaxed max-w-md">
              I&apos;m a Full Stack Software Engineer passionate about building scalable
              systems that solve real-world problems and eliminate unnecessary
              manual work.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#projects"
                className="px-7 py-3 rounded-md bg-ink text-white font-semibold text-sm transition-colors duration-200 hover:bg-ink/85"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-md text-ink font-semibold text-sm border border-ink/20 hover:border-ink/50 transition-colors duration-200"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/mikeyvu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md flex items-center justify-center border border-border bg-surface transition-all duration-200 hover:border-ink/30 hover:-translate-y-0.5"
                aria-label="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-ink"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/hong-minh-vu/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md flex items-center justify-center border border-border bg-surface transition-all duration-200 hover:border-ink/30 hover:-translate-y-0.5"
                aria-label="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-ink"
                >
                  <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
                </svg>
              </a>
              <a
                href={cvHref}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-md flex items-center justify-center border border-border bg-surface transition-all duration-200 hover:border-ink/30 hover:-translate-y-0.5"
                aria-label="Download CV"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-ink">
                  CV
                </span>
              </a>
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
              <div className="w-[17.5rem] h-[17.5rem] rounded-full mx-auto flex items-center justify-center overflow-hidden border-2 border-ink/10 bg-surface">
                <img
                  src={avatar}
                  alt="Mike Vu"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "center 45%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
