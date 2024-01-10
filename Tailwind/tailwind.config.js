/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./Public/*.html"],
  theme: {
    extend: {
      colors:{
        greyish:'rgba(132, 133, 132, 0.208)',
        txt:'rgb(238, 240, 238)',
        tohover:'rgba(0, 139, 139, 0.138)',
        chover:'rgba(230, 205, 152, 0.234)',
        side:'#333',
        table:'rgb(223, 223, 225)',
        edu:'rgb(213, 213, 218)',
        hbby:'#a1b39d',
        hbg:'#c3d0c0',
        rsme:'#efdfdf',
        ddv: 'rgb(228, 218, 218)'

      },

      boxShadow:{
        hShadow: '10px 5px 5px 15px rgba(118, 118, 148, 0.2)',
        form: '50px 2px 15px 15px rgba(189, 189, 201, 0.2)'
      },

      borderRadius:{
        circled : '55%'
      },

    },
  },
  plugins: [],
}