import { defineStore } from 'pinia'

export const useTheme = defineStore('theme', {
    state: () => {
        const prefersDark = window.matchMedia(
            '(prefers-color-scheme: dark'
        ).matches
        const defaultTheme = prefersDark ? 'dark' : 'light'
        const theme = window.localStorage.getItem('theme')
        return {
            theme: (theme == null ? defaultTheme : theme) as 'dark' | 'light',
        }
    },
    getters: {
        dark: (state) => state.theme === 'dark',
        light: (state) => state.theme === 'light',
    },
    actions: {
        toggle() {
            this.theme = this.theme === 'dark' ? 'light' : 'dark'
        },
        save() {
            window.localStorage.setItem('theme', this.theme)
        },
        apply() {
            /* html[data-theme='light'] */
            const el = document.querySelector('html')
            if (!el) return
            if (this.light) {
                el.dataset.theme = 'light'
            } else {
                delete el.dataset.theme
            }
        },
    },
})
