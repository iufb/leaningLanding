import { useLocale } from "@/shared/context/locale"
import { cn } from "@/shared/lib/utils"

const labels = [
    { label: 'Рус', value: 'ru' },
    { label: 'Eng', value: 'en' },
    { label: 'Қаз', value: 'kz' }
]
export const LocaleSwitcher = ({ className }) => {
    const { locale, changeLocale } = useLocale()
    return <section className={cn("ml-auto flex gap-2 font-bold text-slate-500 ", className)}>{labels.map((l, idx) => <button variant={'link'} className={cn(locale == l.value && 'hidden', 'cursor-pointer')} onClick={() => changeLocale(l.value)} key={idx}>{l.label}</button>)}</section>
}
