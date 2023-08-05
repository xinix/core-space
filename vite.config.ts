import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import fs from 'fs'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig({
    define: {
        __VUE_I18N_FULL_INSTALL__: true,
        __VUE_I18N_LEGACY_API__: false,
        __INTLIFY_PROD_DEVTOOLS__: false,
        __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
    server: {
        host: 'localhost',
        open: true,
        port: 8765
        //,
        //https: {
        //    key: fs.readFileSync('./.cert/key.pem'),
        //    cert: fs.readFileSync('./.cert/cert.pem'),
        //},
    },
    base: '/core-space/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                notFound: resolve(__dirname, '404.html'),
            },
        },
    },
    plugins: [
        vue(),
        createHtmlPlugin({
            minify: false,
            pages: [
                {
                    filename: 'index.html',
                    template: 'index.html',
                    injectOptions: {
                        data: {
                            version: process.env.npm_package_version,
                        },
                    },
                },
                {
                    filename: '404.html',
                    template: '404.html',
                    injectOptions: {
                        data: {
                            version: process.env.npm_package_version,
                        },
                    },
                },
            ],
        }),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'logo.svg'],
            manifest: {
                name: 'Core Space index',
                short_name: 'Core Space',
                description: 'Awesome index for Core Space inventory items',
                theme_color: '#293c33',
                background_color: '#83b7bb',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'any maskable',
                    },
                ],
            },
        }),
    ],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src'),
            },
        ],
    },
})
