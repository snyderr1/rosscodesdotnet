/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                fadefirst: 'fadelinear .75s ease-in-out',
                fadesecond: 'fadestep 1.5s ease-in-out',
                fadethird: 'fadestep 3s ease-in-out',
            },
            keyframes: {
                fadelinear: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: .5 },
                    '100%': { opacity: 1 },

                },
                fadestep: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 0 },
                    '100%': { opacity: 1 },

                }
            }
        },
    },
  plugins: [],
}
