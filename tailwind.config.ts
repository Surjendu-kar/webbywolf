/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Custom WebbyWolf Brand Colors
        brand: {
          primary: "#1959AC", // For buttons and links
          secondary: "#0546D2", // For buttons and links
          text: "#222222", // For typography
        },
        // Basic colors
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        "roboto-condensed": [
          "var(--font-roboto-condensed)",
          "Roboto Condensed",
          "sans-serif",
        ],
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      letterSpacing: {
        "tight-2": "-0.02em", // -2% for your design specs
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
