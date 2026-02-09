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
        // Token classes for light and dark modes
        surface: '#ffffff',
        'surface-panel': '#f9fafb',
        'surface-dark': '#1e293b',
        'surface-dark-panel': '#334155',
        border: '#e5e7eb',
        'border-dark': '#475569',
        foreground: '#111827',
        'foreground-dark': '#f1f5f9',
        muted: '#6b7280',
        'muted-dark': '#94a3b8',
      },
      dropShadow: { logo: '0 2px 6px rgba(0,0,0,.55)' },
      boxShadow: { plate: '0 8px 24px rgba(0,0,0,.35)' },
    },
  },
  plugins: [], // ← empty if you didn’t install the extras
};
