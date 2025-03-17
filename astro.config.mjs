// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import icon from "astro-icon";
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://awm-awf.pl',
  integrations: [icon({
      include: {
        lucide: [
          "arrow-up-right",
          "chevron-right",
          "phone",
          "menu",
          "scroll",
          "mail",
          "guitar",
          "crown",
          "handshake",
          "mic",
          "map-pin",
          "calendar-clock",
          "hand-coins",
          "calendar",
          "heater",
          "server",
          'air-vent',
          "battery-charging",
          "cctv"
        ],
      },
    }), react()],

  vite: {
    plugins: [tailwindcss()]
  }
});
