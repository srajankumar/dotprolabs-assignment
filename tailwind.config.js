/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primaryRegular: ["Raleway-Regular", "sans-serif"],
        primaryMedium: ["Raleway-Medium", "sans-serif"],
        primarySemiBold: ["Raleway-SemiBold", "sans-serif"],
        primaryBold: ["Raleway-Bold", "sans-serif"],

        secondaryLight: ["NeueMachina-Light", "sans-serif"],
        secondaryRegular: ["NeueMachina-Regular", "sans-serif"],
        secondaryUltraBold: ["NeueMachina-Ultrabold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
