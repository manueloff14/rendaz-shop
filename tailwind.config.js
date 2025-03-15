// tailwind.config.js
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
        // otras rutas...
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        // otros plugins...
    ],
};
