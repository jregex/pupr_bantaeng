const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: ['./src/**/*.{js,jsx}'],
    darkMode: 'media',
    theme: {
        container: {
            center: true,
            padding: '16px',
        },
        extend: {
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#0EA5E9',
                dark: '#0F172A',
            },
            screens: {
                '2xl': '1280px',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
