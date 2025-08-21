/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // lets you force dark backgrounds via a .dark class
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',  // if you ever use the app router
    './src/**/*.{js,ts,jsx,tsx,mdx}',  // if you keep code under /src
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1rem', lg: '2rem' },
    },
    extend: {
      colors: {
        brand: {
          navy: '#0B1724',   // set to your exact navy
          orange: '#F58220', // set to your exact orange
        },
      },
      dropShadow: {
        logo: '0 2px 6px rgba(0,0,0,.55)',
      },
      boxShadow: {
        plate: '0 8px 24px rgba(0,0,0,.35)',
      },
    },
  },
  // Only needed if you ever build class names dynamically; safe to remove otherwise.
  safelist: [
    'drop-shadow-[0_2px_6px_rgba(0,0,0,.55)]',
    'shadow-[0_8px_24px_rgba(0,0,0,.35)]',
    'bg-white/8',
    'ring-white/10',
    'backdrop-blur-sm',
  ],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
