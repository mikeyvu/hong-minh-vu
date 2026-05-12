import { useEffect, useRef, useState } from "react";

const socials = [
  {
    name: "GitHub",
    handle: "@mikeyvu",
    desc: "Check out my code & open source work",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.03c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.3c0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    color: "#e2e8f0",
    bg: "rgba(226,232,240,0.08)",
    border: "rgba(226,232,240,0.15)",
    hover: "rgba(226,232,240,0.12)",
    link: "https://github.com/mikeyvu",
  },
  {
    name: "LinkedIn",
    handle: "Mike Vu",
    desc: "Connect with me professionally",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
    color: "#60a5fa",
    bg: "rgba(96,165,250,0.08)",
    border: "rgba(96,165,250,0.2)",
    hover: "rgba(96,165,250,0.12)",
    link: "https://www.linkedin.com/in/hong-minh-vu/",
  },
  {
    name: "Email",
    handle: "minhvu2614.work@gmail.com",
    desc: "Reach me directly for opportunities",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    hover: "rgba(167,139,250,0.12)",
    link: "mailto:minhvu2614.work@gmail.com",
  },
  {
    name: "Portfolio",
    handle: "mikeyvu.github.io/hong-minh-vu",
    desc: "See the live version of this site",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9" />
      </svg>
    ),
    color: "#34d399",
    bg: "rgba(52,211,153,0.08)",
    border: "rgba(52,211,153,0.2)",
    hover: "rgba(52,211,153,0.12)",
    link: "https://mikeyvu.github.io/hong-minh-vu/",
  },
];

type FormState = "idle" | "sending" | "sent";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [hoveredSocial, setHoveredSocial] = useState<number | null>(null);
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
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState("sending");
    setTimeout(() => setFormState("sent"), 1800);
  }
  return (
    <div
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-4 sm:px-8 py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #0d0d24 0%, #0a0a1a 100%)" }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute rounded-full opacity-10 blur-3xl"
          style={{ width: 600, height: 600, bottom: -200, right: -100, background: "radial-gradient(circle, #7c3aed, transparent 70%)" }}
        />
        <div
          className="absolute rounded-full opacity-8 blur-3xl"
          style={{ width: 400, height: 400, top: -100, left: -50, background: "radial-gradient(circle, #06b6d4, transparent 70%)" }}
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto w-full space-y-12">
        <div
          className="text-center space-y-3"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(-20px)", transition: "all 0.6s ease" }}
        >
          <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Let&apos;s Connect</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Get in{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #a78bfa, #06b6d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto">
            Open to full-time roles, freelance projects, and interesting collaborations. Let&apos;s build something great together.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            className="space-y-5"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(-30px)", transition: "all 0.7s ease 0.15s" }}
          >
            <div
              className="rounded-2xl p-6 space-y-5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(12px)" }}
            >
              <h3 className="text-white font-bold text-lg">Send a Message</h3>
              {formState === "sent" ? (
                <div className="py-12 flex flex-col items-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl" style={{ background: "linear-gradient(135deg, #059669, #34d399)" }}>
                    ✓
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">Message Sent!</p>
                    <p className="text-slate-400 text-sm mt-1">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  </div>
                  <button
                    onClick={() => {
                      setFormState("idle");
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-sm text-purple-400 hover:text-purple-300 font-mono transition-colors"
                  >
                    Send another →
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { label: "Your Name", name: "name", type: "text", placeholder: "Mike Vu" },
                      { label: "Email Address", name: "email", type: "email", placeholder: "hello@example.com" },
                    ].map((field) => (
                      <div key={field.name} className="space-y-1.5">
                        <label className="text-slate-400 text-xs font-mono">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          required
                          className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "rgba(167,139,250,0.5)";
                            e.target.style.boxShadow = "0 0 0 3px rgba(167,139,250,0.1)";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "rgba(255,255,255,0.1)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-mono">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="I&apos;d like to discuss a full-time opportunity…"
                      required
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(167,139,250,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(167,139,250,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-slate-400 text-xs font-mono">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me about the project, role, or idea you have in mind…"
                      required
                      rows={4}
                      className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all duration-200 resize-none"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(167,139,250,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(167,139,250,0.1)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={formState === "sending"}
                    className="w-full py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                  >
                    {formState === "sending" ? (
                      <>
                        <span
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full inline-block"
                          style={{ animation: "spin 0.8s linear infinite" }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
            <div className="rounded-xl px-5 py-3 flex items-center gap-3" style={{ background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.2)" }}>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <div>
                <p className="text-emerald-400 font-semibold text-sm">Available for hire</p>
                <p className="text-slate-500 text-xs font-mono">Open to full-time & freelance — typical response within 24h</p>
              </div>
            </div>
          </div>
          <div
            className="space-y-4"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "none" : "translateX(30px)", transition: "all 0.7s ease 0.25s" }}
          >
            <h3 className="text-white font-bold text-lg">Find Me Online</h3>
            {socials.map((s, i) => (
              <a
                key={s.name}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl p-4 transition-all duration-200 cursor-pointer group"
                style={{
                  background: hoveredSocial === i ? s.hover : s.bg,
                  border: `1px solid ${s.border}`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "none" : "translateY(15px)",
                  transition: `opacity 0.5s ease ${0.4 + i * 0.1}s, transform 0.5s ease ${0.4 + i * 0.1}s, background 0.2s ease`,
                  textDecoration: "none",
                }}
                onMouseEnter={() => setHoveredSocial(i)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
                >
                  {s.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white font-semibold text-sm">{s.name}</p>
                  <p className="font-mono text-xs truncate" style={{ color: s.color }}>
                    {s.handle}
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">{s.desc}</p>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="w-4 h-4 flex-shrink-0 opacity-30 group-hover:opacity-70 transition-opacity"
                  style={{ color: s.color }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
            <div className="rounded-2xl p-4 flex items-center gap-3 mt-2" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-slate-300 font-semibold text-sm">Wollongong, NSW</p>
                <p className="text-slate-500 text-xs font-mono">GMT+10 · Open to remote & relocation</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0 justify-between"
          style={{ borderColor: "rgba(255,255,255,0.06)", opacity: visible ? 1 : 0, transition: "all 0.7s ease 0.7s" }}
        >
          <p className="text-slate-600 text-xs font-mono">© 2026 Mike Vu · Built with React & TypeScript</p>
          <p className="text-slate-600 text-xs font-mono">Designed to impress. Engineered to perform.</p>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
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