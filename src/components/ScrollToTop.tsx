import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 50,
        width: "48px",
        height: "48px",
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: hovered ? "#1C1A17" : "#FFFFFF",
        boxShadow: hovered
          ? "0 0 0 1px #1C1A17, 0 4px 12px rgba(28,26,23,0.15)"
          : "0 0 0 1px #E7E3DA, 0 2px 8px rgba(28,26,23,0.06)",
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(16px)",
        transition: "opacity 0.35s ease, transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={hovered ? "#ffffff" : "#1C1A17"}
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: "20px",
          height: "20px",
          transition: "stroke 0.2s ease",
          animation: visible ? "bounce-up 1.6s ease-in-out infinite" : "none",
        }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
      <style>{`
        @keyframes bounce-up {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-3px);
          }
        }
      `}</style>
    </button>
  );
}
