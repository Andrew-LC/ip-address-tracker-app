/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    	    colors: {
	    	    'gray-dark': 'hsl(0, 0%, 17%)',
		    'gray-darker': 'hsl(0, 0%, 59%)'
	    },
    	    backgroundImage: {
	        'mobile-bg': "url('/pattern-bg-mobile.png')",
	        'desktop-bg': "url('/pattern-bg-desktop.png')",
	    }
    },
  },
  plugins: [],
}
