import { LocaleProvider } from '@/shared/context/locale.jsx'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
    <LocaleProvider>
        <App />
    </LocaleProvider>
)
