/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-dark': "#103A32",
        'primary-light': '#069668',
        'grayish-orange': '#57534E',
        'light-grayish-orange': '#E7E5E4',
        'light-text': '#D6D3D1',
        'primary-bg': '#F7F6F3',
        'eerie-black': '#1C1917',
        'sandstone': '#78716C'
      },
      backgroundImage: {
        Hero: "url('assets/Hero.png')",
      },
      gridTemplateColumns: {
        '1/3': '1fr 3fr'
      }
    },
  },
  plugins: [],
};
