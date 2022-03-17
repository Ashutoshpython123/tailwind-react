module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        sans : ['DM Sans', 'sans-serif']
      },
      colors : {
        green : {
          DEFAULT : '#71B214'
        },
        gray : {
          600 : '#606060'
        },
        bhagawa : {
          DEFAULT : '#ff9900'
        }
      },
      spacing : {
        13 : '3.25rem',
      },
      boxShadow : {
        primary : '0px 9.9px 21.6px rgba(136, 202, 41, 0.41)'
      }
    },
  },
  plugins: [],
}
