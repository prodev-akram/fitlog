/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-oswald)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        // Single source of truth for the FitLog theme.
        // Change these to re-theme the app.
        accent: {
          DEFAULT: "#ccff00",
          dark: "#a6d400",
        },
        base: {
          bg: "#0a0b0d",
          surface: "#131518",
          raised: "#1a1d21",
          border: "#2a2e33",
        },
        ink: {
          100: "#f5f6f7",
          400: "#9aa0a6",
          500: "#787f87",
        },
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
