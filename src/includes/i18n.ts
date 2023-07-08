import { createI18n } from 'vue-i18n';
import en from '../Locales/en.json';
import fa from '../Locales/fa.json';

export default createI18n({
    locale: localStorage.getItem('Locale'),
    fallBackLocale: localStorage.getItem('Locale'),
    legacy: false,
    messages:{
        en,fa
    }
})
