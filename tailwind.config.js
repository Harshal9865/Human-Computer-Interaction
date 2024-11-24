// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#34D399', // green theme color
        darkModeBackground: '#121212', // Netflix-inspired dark theme color
      },
    },
  },
  darkMode: 'class', // enable dark mode
  plugins: [],
};
