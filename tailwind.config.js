/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('/image/Line and circle content.png')",
        'custom-one': "url('/image/1.png')",
        'custom-two' : "url('/image/2.png')",
        'custom-three' : "url('/image/3.png')",
        'custom-circle' : "url('/image/Rectangle 32.png')",
        'custom-dots': "url('/image/Group 47270.png')"

      },
      opacity: {
        '50': '0.5',
      }
    },

  },

  
  plugins: [],
}

