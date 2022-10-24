import { defineStore } from 'pinia'

export const useLanguage = defineStore('language', {
    state: () => {
        const userLang = window.localStorage.getItem('lang')
        return {
            lang: userLang == null ? 'en' : userLang,
        }
    },
    actions: {
        save() {
            window.localStorage.setItem('lang', this.lang)
        },
        apply() {
            const el = document.querySelector('html')
            if (!el) return
            el.setAttribute('lang', this.lang)
        },
    },
})
