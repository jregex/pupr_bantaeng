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
            keyframes: {
                coba: {
                    '75%, 100%': {
                        transform: 'scale(1.4)',
                        opacity: '0.6',
                    },
                },
                pantul: {
                    '0%, 100% ': {
                        transform: 'translateY(-10%)',
                        timing: 'linear',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                'ping-slow': 'coba 1s cubic-bezier(0, 0, 0.3, 1)',
                'pantul-slow': 'pantul 5s infinite',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },
    purge: {
        enable: true,
    },
    plugins: [require('@tailwindcss/forms'), require('daisyui')],
    daisyui: {
        themes: false,
    },
}
