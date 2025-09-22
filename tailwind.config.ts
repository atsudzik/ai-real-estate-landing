import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(circle at top left, rgba(59,130,246,0.18), transparent 45%), radial-gradient(circle at bottom right, rgba(14,165,233,0.15), transparent 55%)",
      },
    },
  },
  plugins: [],
};

export default config;
