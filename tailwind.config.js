/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hospital-primary": "var(--hospital-primary)",
        "hospital-secondary": "var(--hospital-secondary)",
        "hospital-accent": "var(--hospital-accent)",
        "hospital-success": "var(--hospital-success)",
        "hospital-warning": "var(--hospital-warning)",
        "hospital-info": "var(--hospital-info)",
      },
    },
  },
  plugins: [],
};
