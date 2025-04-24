import { LocaleProvider } from '@/shared/context/locale.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <LocaleProvider>
            <App />
        </LocaleProvider>
    </StrictMode>,
)
