/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", "sans-serif"]
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

