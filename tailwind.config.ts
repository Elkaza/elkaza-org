import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "elev-1": "0 1px 2px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.1)",
        "elev-2": "0 2px 6px rgba(0,0,0,0.12), 0 6px 12px rgba(0,0,0,0.16)",
      },
    },
  },
  plugins: [],
} satisfies Config;

