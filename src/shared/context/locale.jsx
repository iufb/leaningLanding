import { createContext, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import en from "../../messages/en.json"
import kz from "../../messages/kz.json"
import ru from "../../messages/ru.json"

const LocaleContext = createContext({ locale: 'kz' })

const messages = { en, kz, ru }

export const LocaleProvider = ({ children }) => {
    const [locale, setLocale] = useState(localStorage.getItem('locale') ?? 'kz')

    const changeLocale = (locale) => {
        setLocale(locale)
        localStorage.setItem('locale', locale)
    }

    return <LocaleContext.Provider value={{ locale, changeLocale }} >
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale='kz'>
            {children}</IntlProvider></LocaleContext.Provider>
}

export const useLocale = () => {
    return useContext(LocaleContext)
}
