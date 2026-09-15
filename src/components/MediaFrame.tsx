import { useState } from "react";

function isEmbeddable(url: string) {
  return url.includes("youtube.com") || url.includes("youtu.be") || url.includes("loom.com");
}

export function MediaFrame({
  accent,
  video,
  images,
  imagePositions,
  demoLink,
}: {
  accent: string;
  video?: string | null;
  images?: string[];
  imagePositions?: string[];
  demoLink?: string;
}) {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  if (video) {
    return (
      <div className="relative w-full rounded-xl overflow-hidden border border-border" style={{ aspectRatio: "16/9" }}>
        {isEmbeddable(video) ? (
          <iframe
            src={video}
            className="w-full h-full"
            title="Demo video"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={video} controls className="w-full h-full object-cover" />
        )}
      </div>
    );
  }

  if (images && images.length === 1) {
    return (
      <a
        href={demoLink || images[0]}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block w-full rounded-xl overflow-hidden border border-border transition-transform duration-300 hover:scale-[1.01]"
        style={{ aspectRatio: "16/9" }}
      >
        <img
          src={images[0]}
          alt="Preview"
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePositions?.[0] || "center" }}
        />
      </a>
    );
  }

  if (images && images.length > 1) {
    const goPrev = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIndex((i) => (i - 1 + images.length) % images.length);
    };
    const goNext = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIndex((i) => (i + 1) % images.length);
    };
    return (
      <div className="relative w-full rounded-xl overflow-hidden border border-border" style={{ aspectRatio: "16/9" }}>
        <img
          src={images[index]}
          alt={`Gallery preview ${index + 1} of ${images.length}`}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePositions?.[index] || "center" }}
        />
        <button
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-surface border border-border text-ink transition-transform duration-200 hover:scale-110"
          style={{ cursor: "pointer" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-surface border border-border text-ink transition-transform duration-200 hover:scale-110"
          style={{ cursor: "pointer" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIndex(i);
              }}
              aria-label={`Go to image ${i + 1}`}
              className="w-1.5 h-1.5 rounded-full transition-all duration-200"
              style={{ background: i === index ? accent : "rgba(28,26,23,0.2)", border: "none", cursor: "pointer", padding: 0 }}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden cursor-pointer transition-all duration-300 bg-surface-alt border border-border"
      style={{ aspectRatio: "16/9" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-2 pt-5">
        <div className="h-1 rounded-full overflow-hidden bg-border">
          <div className="h-full w-1/3 rounded-full" style={{ background: accent }} />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs font-mono text-ink-faint">0:00</span>
          <span className="text-xs font-mono text-ink-faint">2:34</span>
        </div>
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
          style={{
            background: hovered ? accent : "#E7E3DA",
            color: hovered ? "#fff" : "#1C1A17",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-0.5">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
        <span className="text-xs font-mono text-ink-faint">
          {hovered ? "Add demo video" : "Demo video"}
        </span>
      </div>
    </div>
  );
}
