/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FAF9F6",
        "canvas-alt": "#F1EFE9",
        surface: "#FFFFFF",
        "surface-alt": "#FDFCFA",
        ink: "#1C1A17",
        "ink-muted": "#6B6559",
        "ink-faint": "#9A9285",
        border: "#E7E3DA",
        accent: {
          DEFAULT: "#AD5A36",
          ink: "#7A3D22",
          pale: "#F3E7DE",
        },
        moss: {
          DEFAULT: "#4B6355",
          ink: "#33453A",
          pale: "#E9EFE9",
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Work Sans"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"IBM Plex Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        checkerboard:
          "linear-gradient(45deg, #F1EFE9 25%, transparent 25%), linear-gradient(-45deg, #F1EFE9 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #F1EFE9 75%), linear-gradient(-45deg, transparent 75%, #F1EFE9 75%)",
      },
      backgroundSize: {
        checker: "40px 40px",
      },
      backgroundPosition: {
        checker: "0 0, 0 20px, 20px -20px, -20px 0px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
