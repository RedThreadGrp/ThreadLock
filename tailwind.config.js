// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: { navy: '#0B1724', orange: '#F58220' },
      },
      dropShadow: { logo: '0 2px 6px rgba(0,0,0,.55)' },
      boxShadow: { plate: '0 8px 24px rgba(0,0,0,.35)' },
    },
  },
  plugins: [], // ← empty if you didn’t install the extras
};
