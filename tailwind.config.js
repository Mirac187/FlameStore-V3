/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'flame-dark': '#09090b',    // Zifiri karanlık arka plan
        'flame-card': '#12121a',    // Hafif aydınlık kartlar
        'flame-border': '#00ffcc',  // Neon Siber Mavi sınır çizgileri
        'cyber-pink': '#ff00ff',    // Neon Pembe
        'cyber-yellow': '#fcee0a',  // Cyberpunk Sarısı
        'cyber-cyan': '#00ffcc'     // Siber Mavi
      },
      fontFamily: {
        // Siber temaya uygun köşeli ve dijital font
        sans: ['"Share Tech Mono"', 'monospace', 'sans-serif'],
      },
      boxShadow: {
        // Efsanevi neon parlamaları
        'neon-cyan': '0 0 5px theme("colors.cyber-cyan"), 0 0 20px theme("colors.cyber-cyan")',
        'neon-pink': '0 0 5px theme("colors.cyber-pink"), 0 0 20px theme("colors.cyber-pink")',
        'neon-yellow': '0 0 5px theme("colors.cyber-yellow"), 0 0 20px theme("colors.cyber-yellow")'
      }
    },
  },
  plugins: [],
}
