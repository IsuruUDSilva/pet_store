const defaultTheme = require("tailwindcss/defaultTheme");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    // rest of the code
    colors: {
      black: "#000000",
      primary: "#FFFFFF",
      "primary-bg": "#F6F5F2",
      secondary: "#FFDBB5",
      "special-text-color": "#603F26",
      indigo: colors.indigo,
      purple: colors.purple,
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      blue: {
        500: "#3b82f6", // You can replace this with your actual custom blue
      },
      neutral: {
        400: "#9ca3af", // Placeholder color for light mode
        600: "#4b5563", // Placeholder color for dark mode
      },
      zinc: {
        800: "#1f2937", // Dark background for input in dark mode
      },
    },
    extend: {
      fontFamily: {
        sans: ["parkinsans", "sans-serif"],
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
