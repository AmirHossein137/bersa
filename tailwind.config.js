/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: "#532B07",
        Secondary: "#D99206",
      },
      backgroundImage: {
        primary:
          "radial-gradient(103.23% 445.95% at 50% 50%, #D99206 0%, #8C490C 100%)",
        secondary:
          "linear-gradient(90deg, #8C490C 0%, #DCA72A 51.93%, #8C490C 100%)",

        shadowBtn:
          "radial-gradient(50% 50% at 50% 50%, #FBE9D0 0%, #F5D9B2 100%)",
      },
    },
  },
  plugins: [],
};
