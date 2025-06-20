/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
export default withMT({
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css}"
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
})

