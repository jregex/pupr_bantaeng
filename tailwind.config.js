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
                blob: {
                    '0%': {
                        transform: 'translate(0px,0px) scale(1)',
                    },
                    '30%': {
                        transform: 'translate(40px,-60px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20,20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px,0px) scale(1)',
                    },
                },
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
                blob: 'blob 6s infinite',
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
