/* quasar.config.js */

import { configure } from 'quasar/wrappers';
import { quasar } from '@quasar/vite-plugin';

export default configure(function (/* ctx */) {
  return {
    // ----- Build -----
    build: {
      // สำหรับ GitHub Pages Project Page
      publicPath: '/channarong-khemaram-318/',

      // ให้ Vue Router ใช้ Hash Mode → ป้องกันหน้าเว็บขาว
      vueRouterMode: 'hash',

      // ตัวอย่างเพิ่มเติม (ถ้ามี)
      // target: 'es2019',
      // vueRouterBase: '',
    },

    // ----- Plugins -----
    framework: {
      config: {},
      plugins: [],
    },

    // ----- Vite -----
    vitePlugins: [
      quasar(),
    ],
  };
});
