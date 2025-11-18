/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Tailwind にクラス名を作らせる（例: bg-pf-bg -> var(...)）
        'pf-bg': 'var(--color-pf-bg)',
        'pf-text': 'var(--color-pf-text)'
      }
    }
  },
  plugins: []
}