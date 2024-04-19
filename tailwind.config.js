/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        logo: "#6d2546",
        darklogo: "#360c1c",
      },
      height: {
        custom: "90%",
      },
      width: {
        custom: "90%",
      },
      top: {
        custom: "120px",
      },
      backgroundColor: {
        lightLogo: "#975366",
      },
    },
  },
  plugins: [],
};
