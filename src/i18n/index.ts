import { createI18n } from 'vue-i18n'

import en from '@/locales/en.json'
import nl from '@/locales/nl.json'
import fr from '@/locales/fr.json'
import de from '@/locales/de.json'

const locale = localStorage.getItem('lang')

const i18n = createI18n({
    locale: locale == null ? 'en' : locale,
    messages: { en, nl, fr, de },
    fallbackLocale: 'en',
    fallbackWarn: false,
    warnHtmlInMessage: false,
    warnHtmlMessage: false,
})

export default i18n
