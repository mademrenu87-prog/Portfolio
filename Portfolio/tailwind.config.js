/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F5F1",
        paperalt: "#EDEBE4",
        ink: "#14171C",
        inksoft: "#586070",
        term: "#0B0F17",
        termtext: "#D7DEE9",
        termdim: "#7C8797",
        accent: "#0E7C86",
        accent2: "#B98A21",
        rule: "#DAD6CC",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
        sans: ['"IBM Plex Sans"', "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
