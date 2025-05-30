import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{ts,tsx}', // Wajib: supaya semua komponen dan layout terdeteksi
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
