export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      orange1:'#EF7A1B',
      orange2:'#FC9C41',
      orange3:'#FFBB77',
      orange4:'#FFD4A6',
      orange5:'#FFEDD5',
    },
    extend: {
      gridTemplateRows: {
        3: "70px 1fr 100px",
      },
      width: {
        500: "500px",
      },
    },
  },
  plugins: [],
}