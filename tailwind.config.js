/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#6d2546",
        darklogo: "#360c1c"
      },
      backgroundColor: {
        lightLogo: "#975366",
      },
    },
  },
  plugins: [],
};
