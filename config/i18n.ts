/**
 * @author NghiemLe <nghiemlehong98@gmail.com>
 */
const i18n = {
    defaultLocale: 'en',
    locales: [
        {
            code: 'en',
            file: 'en.json',
            name: 'English'
        },
        {
            code: 'vi',
            file: 'vi.json',
            name: 'Vietnam'
        },
    ],
    detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'lang'
    },
    langDir: "~/lang",
    vueI18n: {

    },
    skipSettingLocaleOnNavigate : true
}

export default i18n