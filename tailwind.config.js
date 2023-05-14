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
                sans: ['Inter Sans', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: '#0EA5E9',
                dark: '#0F172A',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
            },
            screens: {
                '2xl': '1280px',
            },
            keyframes: {
                pantul: {
                    '0%, 100% ': {
                        transform: 'translateY(-10%)',
                        timing: 'linear',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        timing: 'linear',
                    },
                },
            },
            animation: {
                'pantul-slow': 'pantul 6s infinite',
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
