import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { defineConfig } from 'vitepress'
import Sidebars from '../sidebars/index'

// server side
// cần khởi động lại dev nếu thay đổi trong file này

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Documents',
  base: '/docs/',
  outDir: '../dist',
  description: 'NDMC life script',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: './assets/icons/honor.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: Sidebars,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cmhehe176' },
      { icon: 'facebook', link: 'https://github.com/cmhehe176' },
      { icon: 'youtube', link: 'https://github.com/cmhehe176' },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: { port: 2000 },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
})
