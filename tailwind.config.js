/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Cores institucionais extraídas das imagens
        brandBlue: "#2563EB",
        darkBg: "#020617",
        darkCard: "#0B1120"
      },
    },
  },
  plugins: [],
}
