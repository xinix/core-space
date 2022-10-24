import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import nl from '@/locales/nl.json'

const locale = localStorage.getItem('lang')

const i18n = createI18n({
    locale: locale == null ? 'en' : locale,
    messages: { en, nl },
    fallbackLocale: 'en',
    warnHtmlInMessage: false,
    warnHtmlMessage: false,
})

export default i18n
