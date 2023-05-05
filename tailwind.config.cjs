/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],

    theme: {
        extend: {
            fontFamily: {
                'varela': 'Varela Round',
                'sans': 'Open Sans',
                'heebo': 'Heebo'
            },
            colors: {
                'primary': '#4DB782',
                'dark_primary': '#3C9469',
                'text_color': '#FCF0F3',
                'home': '#dbf1e6',

            },

            variants: {
                animation: ["motion-safe"]
            },
            animation: {
                fadeIn: "fadeIn 0.2s ease-in forwards ",
                scrollDown: "scrollDown 0.4 ease-in"
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: 0, transform: 'translate(0, 30px)' },
                    "100%": { opacity: 1 }
                },
                scrollDown: {
                    "0%": {},
                    "50%": { transform: 'translate(0,30px)' },
                    "100%": {}
                }
            }
        },

    },
    plugins: [require("tailwindcss-animation-delay")],
}