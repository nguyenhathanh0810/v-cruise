/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xl: "1132px",
        "2xl": "1332px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)"],
      },
      colors: {
        primary: {
          DEFAULT: "#f58c36",
          analogous: {
            "by-2": "#f7c95f",
            "by-3": "#f5623d",
            "by-4": "#F5333D",
          },
          complementary: {
            "by-3": "#764e2d",
          },
          shades: {
            "by-1": "#e87b21",
            "by-3": "#6B4729",
            "by-4": "#2c231c",
          },
          square: {
            "by-2": "#BBDFFC",
          },
          triadic: {
            "by-4": "#57466D",
          },
        },
      },
    },
  },
  plugins: [],
}
