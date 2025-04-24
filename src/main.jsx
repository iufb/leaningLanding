import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { IntlProvider } from 'react-intl'
import App from './App.jsx'
import './index.css'
import en from "./messages/en.json"
import kz from "./messages/kz.json"
import ru from "./messages/ru.json"

const messages = { en, kz, ru }
const locale = localStorage.getItem('locale')

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <IntlProvider messages={messages[locale]} locale={locale} defaultLocale='kz'>
            <App />
        </IntlProvider>
    </StrictMode>,
)
