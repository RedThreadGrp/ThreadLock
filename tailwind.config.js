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
        brand: { 
          navy: '#1b3a4d',
          orange: '#fb7a1e'
        },
        tl: { navy: '#1b3a4d', orange: '#fb7a1e' },
        surface: '#ffffff',
        'surface-panel': '#f9fafb',
        border: '#e5e7eb',
        foreground: '#111827',
        muted: '#6b7280',
      },
      dropShadow: { logo: '0 2px 6px rgba(0,0,0,.55)' },
      boxShadow: { plate: '0 8px 24px rgba(0,0,0,.35)' },
    },
  },
  plugins: [], // ← empty if you didn’t install the extras
};
