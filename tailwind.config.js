module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        grey: "#686666",
        "dark-blue": "#007499",
        "slightly-dark-blue": "#0086B3",
        "slightly-slight-dark-blue": "#0099CC",
        "blue": "#00ACE6",
        "slightly-light-blue": "#00BFFF",
        "light-blue": "#66D9FF",
        "light-shade-blue": "#E6F9FF",
        "black": "#373737",
        "form-text-grey": "#A8A8A8",
        "icon-black": "#7B7B7B",
        "stroke-grey": "#E4E4E4",
        "yellow": "#FCE476",
        "skin-tone": "#A26744",
        "hair": "#101010",
        "icon-yellow": "#FFF59B",
        "card-blue": "#029CCF"

      },
      boxShadow: {
        "button-shadow": "0px 0px 8px #CAF1FF",
        "box-shadow": "0px 0px 20px rgba(137, 137, 137, 0.25)",
        "drop-down-shadow": "0px 0px 20px rgba(201, 201, 201, 0.25)",
        "card-shadow": "0px 0px 20px rgba(215, 215, 215, 0.25)",
        "menu-drop-down-shadow": "0px 8px 20px rgba(215, 215, 215, 0.25)"
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
