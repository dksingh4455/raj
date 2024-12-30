/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Ensure these variables are defined in your CSS
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
