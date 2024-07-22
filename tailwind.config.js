/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["build/**/*.html"],
    // safelist: [
    //     {
    //         pattern: /./, // This includes all Tailwind classes
    //     },
    // ],
    theme: {
        fontFamily: {
            poppins: ["Poppins", "sand-serif"],
            sans: ["Poppins", "sand-serif"],
        },

        extend: {},
    },
    plugins: [],
};
