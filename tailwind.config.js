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
                fadefirst: 'fadelinear .5s ease-in-out',
                fadesecond: 'fadestep 1s ease-in-out',
                fadethird: 'fadestep 2s ease-in-out',
                growfast: 'growsinglestep 2s ease-in-out forwards',
                shrinkfast: 'shrinksinglestep 2s ease-in-out forwards',
                
            },
            keyframes: {
                fadelinear: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: .66 },
                    '100%': { opacity: 1 },

                },
                fadestep: {
                    '0%': { opacity: 0 },
                    '50%': { opacity: 0 },
                    '100%': { opacity: 1 },

                },
                grow: {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(2)'},
                    '100%': { transform: 'scale(3)' },
                },
                growsinglestep: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(2)' },
                },
                shrinksinglestep: {
                    '0%': { transform: 'scale(2)' },
                    '100%': { transform: 'scale(1)' },
                }
            }
        },
    },
  plugins: [],
}
