import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
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
        primary: "#000000",
        secondary: "white",
        accent: {
          red: "#E63946",
          purple: "#7B2FBE",
        },
        muted: "#666666",
      },
    },
  },
  plugins: [],
} satisfies Config;
