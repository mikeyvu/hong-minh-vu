import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setActive(id);
      }, { threshold: 0.35 });
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,249,246,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid #E7E3DA" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div className="w-8 h-8 rounded-md bg-ink flex items-center justify-center text-sm font-serif font-bold text-white transition-transform duration-200 group-hover:scale-105">
            MV
          </div>
          <span className="text-ink font-semibold text-sm tracking-wide hidden sm:block">Mike Vu</span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {sections.map(({ id, label }) => {
            const isActive = active === id;
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                style={{ background: "none", border: "none", cursor: "pointer" }}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-lg"
                    style={{
                      background: "#F3E7DE",
                      border: "1px solid rgba(173,90,54,0.3)",
                    }}
                  />
                )}
                <span
                  className="relative z-10 transition-colors duration-200"
                  style={{ color: isActive ? "#1C1A17" : "#6B6559" }}
                >
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-moss animate-pulse" />
            <span className="text-moss text-xs font-mono">Available</span>
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="px-4 py-2 rounded-md bg-ink text-white text-xs font-semibold transition-colors duration-200 hover:bg-ink/85"
            style={{ border: "none", cursor: "pointer" }}
          >
            Hire Me
          </button>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg"
          style={{ background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block h-0.5 rounded-full transition-all duration-300"
              style={{
                width: i === 1 && menuOpen ? "12px" : "20px",
                background: "#6B6559",
                transform:
                  menuOpen && i === 0
                    ? "translateY(8px) rotate(45deg)"
                    : menuOpen && i === 2
                    ? "translateY(-8px) rotate(-45deg)"
                    : menuOpen && i === 1
                    ? "scaleX(0)"
                    : "none",
              }}
            />
          ))}
        </button>
      </div>

      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "300px" : "0",
          background: "#FDFCFA",
          borderBottom: menuOpen ? "1px solid #E7E3DA" : "none",
        }}
      >
        <div className="px-8 py-4 space-y-1">
          {sections.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
              style={{
                background: active === id ? "#F3E7DE" : "transparent",
                border: active === id ? "1px solid rgba(173,90,54,0.3)" : "1px solid transparent",
                color: active === id ? "#1C1A17" : "#6B6559",
                cursor: "pointer",
              }}
            >
              {label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => scrollTo("contact")}
              className="w-full py-3 rounded-xl bg-ink text-white text-sm font-semibold"
              style={{ border: "none", cursor: "pointer" }}
            >
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
