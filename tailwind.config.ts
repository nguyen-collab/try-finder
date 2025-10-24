import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          '100': '#232323',
          '200': '#0f0f0f',
          '300': '#0a0a0a',
          '400': '#080808',
          '500': '#050505',
          '600': 'rgba(255, 255, 255, 0)',
          '700': 'rgba(24, 24, 24, 0)',
          '800': 'rgba(250, 250, 250, 0)',
          '900': 'rgba(0, 0, 0, 0.5)',
          '1000': 'rgba(0, 0, 0, 0.05)',
          '1100': 'rgba(255, 255, 255, 0.75)',
          '1200': 'rgba(255, 255, 255, 0.25)',
          '1300': 'rgba(255, 255, 255, 0.1)',
          '1400': 'rgba(255, 255, 255, 0.05)',
        },
        white: '#fff',
        darkorange: '#ff7520',
        limegreen: '#0aca00',
      },
      spacing: {
        'num-942': '942px',
        'num-18': '18px',
        'num-10': '10px',
        'num-23': '23px',
        'num-22': '22px',
        'num-12_7': '12.7px',
        'num-57_5': '57.5px',
        'num-68': '68px',
        'num-1': '1px solid rgba(255, 255, 255, 0.25)',
        'num-2': '1px solid rgba(255, 255, 255, 0.1)',
        'num-3': '1px solid rgba(24, 24, 24, 0)',
      },
      fontFamily: {
        inter: 'var(--font-inter)',
        'aeonik-pro': 'var(--font-aeonik-pro)',
        'inter-variable': 'var(--font-inter-variable)',
        inherit: 'inherit',
      },
      borderRadius: {
        'num-10': '10px',
        'num-50': '50%',
        'num-15': '15px',
        'num-7_5': '7.5px',
        'num-58_09': '58.09px',
      },
      padding: {
        'num-30': '30px',
        'num-12': '12px',
        'num-40': '40px',
      },
      opacity: {
        'num-0_6': '0.6',
        'num-0_25': '0.25',
        'num-0_5': '0.5',
        'num-0_8': '0.8',
        'num-0_75': '0.75',
      },
      fontSize: {
        'num-14': '14px',
        'num-18': '18px',
        'num-16': '16px',
      },
      lineHeight: {
        'num-20': '20px',
        'num-28': '28px',
        'num-26': '26px',
        'num-24': '24px',
      },
      letterSpacing: {
        'num--0_01': '-0.01em',
        'num--0_03': '-0.03em',
      },
    },
  },
};

export default config;
