import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert' // https://vitejs.dev/config/

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: 'core-space.dev',
        open: true,
        port: 8765,
        https: true,
    },
    base: '/core-space/',
    plugins: [vue(), mkcert()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
})
