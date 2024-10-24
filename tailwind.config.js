/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customYellow: 'rgb(255 226 5)', // Add your custom color
      },
    },
  },
  plugins: [],
};
