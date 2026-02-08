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
        tl: { navy: '#1b3a4d', orange: '#fb7a1e' },
        // Token classes for edu/clinics page
        surface: '#ffffff',
        'surface-panel': '#f9fafb',
        border: '#e2e8f0',
        foreground: '#1e293b',
        muted: '#64748b',
      },
      dropShadow: { logo: '0 2px 6px rgba(0,0,0,.55)' },
      boxShadow: { plate: '0 8px 24px rgba(0,0,0,.35)' },
    },
  },
  plugins: [], // ← empty if you didn’t install the extras
};
