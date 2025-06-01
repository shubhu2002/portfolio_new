import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        comfortaa: ["var(--font-comfortaa)"],

        "thunder-bold": ["thunder-bold"],
        "thunder-extrabold": ["thunder-extrabold"],
        "thunder-semibold": ["thunder-semibold"],

        "helvetica-bold": ["helvetica-bold"],
        "helvetica-light": ["helvetica-light"],
        "helvetica-medium": ["helvetica-medium"],
        "helvetica-regular": ["helvetica-regular"],

        "neue-light": ["neue-light"],
        "neue-regular": ["neue-regular"],
        "neue-ultra-bold": ["neue-ultra-bold"],
      },
      colors: {
        primary: "#020013",
        secondary: "white",
        tertiary: "#c2cde7",
        blue: "#51baff",
      },
      boxShadow: {
        "deep-inset": "0px 0px 8px 0.82px #FFFFFF1F inset",
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
