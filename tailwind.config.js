/** @type {import('tailwindcss').Config} */

import bg1 from './src/assets/images/bg-1.jpg'

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            animation: {
                'border': 'border 4s linear infinite',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                }
            },   
            backgroundImage: {
                'hero-bg-gradient': `linear-gradient(to right, rgba(108, 53, 222, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/images/bg-1.jpg')`,
            },
            fontFamily: {
                primary: ["Inter", "sans-serif"],
                secondary: ["Poppins", "sans-serif"]
            },
            colors: {
                primary: {
                    DEFAULT: "#6c35de",
                    '200': "#a364ff",
                    '300': "#ffc7ff"
                },
                accent: {
                    DEFAULT: "#cb80ff",
                    '200': "#373737",
                },
                'primary-white': {
                    DEFAULT: "#ffffff",
                    '200': "#e0e0e0",
                    '300': "#FAF9F6"
                },
                'primary-black': {
                    DEFAULT: '#241b35',
                    '200': '#342a45',
                    '300': '#4d425f',
                }
            }
        },
    },
    plugins: [],
};

