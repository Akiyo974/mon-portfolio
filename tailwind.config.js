const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        scroll: "scroll var(--animation-duration, 40s) linear infinite",
        'scroll-fast': 'scroll 25s linear infinite',
        'scroll-slow': 'scroll 30s linear infinite',
        'bounce-slow': 'bounce 9s infinite',
      },
      keyframes: {
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(calc(-50% - 0.5rem))',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-25%)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
