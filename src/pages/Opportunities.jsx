import { useLocale } from "@/shared/context/locale";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import { FormattedMessage } from "react-intl";

import { CalendarDays, Dumbbell, MapPin, Users } from "lucide-react";

export const OpportunitiesPage = () => {
    const { locale } = useLocale()
    return <section className="container relative py-8 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(170,58,40,0.12),transparent_68%)]" />
        <header className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-primary" />
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl"><FormattedMessage id="opportunities.title" /></h1>
            <p className="mt-4 text-stone-500 md:text-lg">{pageSubtitle[locale]}</p>
        </header>
        <section className="grid gap-4 sm:grid-cols-3">
            <Stat icon={<Dumbbell />} value="7" label={stats.sections[locale]} />
            <Stat icon={<Users />} value="205" label={stats.students[locale]} />
            <Stat icon={<CalendarDays />} value="2026–2027" label={stats.year[locale]} />
        </section>
        <SportTable />
    </section>
}

const pageSubtitle = {
    ru: "Спортивные секции, студенческие конкурсы и новые возможности ABU",
    kz: "ABU спорт секциялары, студенттік байқаулар және жаңа мүмкіндіктер",
    en: "ABU sports clubs, student competitions and new opportunities",
};

const stats = {
    sections: { ru: "спортивных секций", kz: "спорт секциясы", en: "sports clubs" },
    students: { ru: "мест для студентов", kz: "студентке арналған орын", en: "student places" },
    year: { ru: "учебный год", kz: "оқу жылы", en: "academic year" },
};

const Stat = ({ icon, value, label }) => (
    <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-[0_8px_28px_rgba(30,30,30,0.04)]">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">{icon}</span>
        <div><strong className="block text-xl">{value}</strong><span className="text-sm text-stone-500">{label}</span></div>
    </div>
);

const trainingData = {
    ru: [
        {
            name: "Баскетбол",
            schedule: ["", "17:00–19:00", "", "", "17:00–19:00", ""],
            participants: 20,
            location: "Спортивный зал, ул. Дулатова, 284",
            instructors: ["Сесерхан Ж."],
        },
        {
            name: "Волейбол",
            schedule: ["17:00–19:00", "", "17:00–19:00", "", "", ""],
            participants: 35,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Ногайбаев Т.Т.", "Нурпеисов К.Н."],
        },
        {
            name: "Футзал",
            schedule: ["", "19:00–21:00", "", "17:00–19:00", "", ""],
            participants: 25,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Акчабаров М.М."],
        },
        {
            name: "NOMAD MMA",
            schedule: ["16:00–18:00", "", "16:00–18:00", "", "16:00–18:00", ""],
            participants: 45,
            location: "Корпус №2, спортивный зал, ул. Абая, 107",
            instructors: ["Саельдинов С.С.", "Жуматаева Т.М.", "Сархад Н.С."],
        },
        {
            name: "Настольный теннис",
            schedule: ["", "", "", "16:00–18:00", "16:00–18:00", ""],
            participants: 15,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Нургалиев Д.Н."],
        },
        {
            name: "Панкратион и Грэплинг",
            schedule: ["", "16:00–18:00", "", "16:00–18:00", "", "16:00–18:00"],
            participants: 45,
            location: "Панкратион ММА Грэпплинг, ул. Засядко, 89",
            instructors: ["Какимов К.Б."],
        },
        {
            name: "Тоғыз құмалақ",
            schedule: ["15:00–16:00", "", "", "", "15:00–16:00", ""],
            participants: 20,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Саукенов Х.Р.", "Советкалиев Д.Н."],
        },
    ],
    kz: [
        {
            name: "Баскетбол",
            schedule: ["", "17:00–19:00", "", "", "17:00–19:00", ""],
            participants: 20,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Сесерхан Ж."],
        },
        {
            name: "Волейбол",
            schedule: ["17:00–19:00", "", "17:00–19:00", "", "", ""],
            participants: 35,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Ноғайбаев Т.Т.", "Нұрпейісов К.Н."],
        },
        {
            name: "Футзал",
            schedule: ["", "19:00–21:00", "", "17:00–19:00", "", ""],
            participants: 25,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Ақчабаров М.М."],
        },
        {
            name: "NOMAD MMA",
            schedule: ["16:00–18:00", "", "16:00–18:00", "", "16:00–18:00", ""],
            participants: 45,
            location: "№2 корпус, спорт залы, Абай көшесі, 107",
            instructors: ["Саельдинов С.С.", "Жұматаева Т.М.", "Сархад Н.С."],
        },
        {
            name: "Үстел теннисі",
            schedule: ["", "", "", "16:00–18:00", "16:00–18:00", ""],
            participants: 15,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Нұрғалиев Д.Н."],
        },
        {
            name: "Панкратион және Грэплинг",
            schedule: ["", "16:00–18:00", "", "16:00–18:00", "", "16:00–18:00"],
            participants: 45,
            location: "Панкратион ММА Грэпплинг, Засядко көшесі, 89",
            instructors: ["Қакимов К.Б."],
        },
        {
            name: "Тоғызқұмалақ",
            schedule: ["15:00–16:00", "", "", "", "15:00–16:00", ""],
            participants: 20,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Сәукенов Х.Р.", "Советқалиев Д.Н."],
        },
    ],
    en: [
        {
            name: "Basketball",
            schedule: ["", "17:00–19:00", "", "", "17:00–19:00", ""],
            participants: 20,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Seserkhan Zh."],
        },
        {
            name: "Volleyball",
            schedule: ["17:00–19:00", "", "17:00–19:00", "", "", ""],
            participants: 35,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Nogaibayev T.T.", "Nurpeisov K.N."],
        },
        {
            name: "Futsal",
            schedule: ["", "19:00–21:00", "", "17:00–19:00", "", ""],
            participants: 25,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Akchabarov M.M."],
        },
        {
            name: "NOMAD MMA",
            schedule: ["16:00–18:00", "", "16:00–18:00", "", "16:00–18:00", ""],
            participants: 45,
            location: "Building No. 2, sports hall, 107 Abai St.",
            instructors: ["Saeldinov S.S.", "Zhumatayeva T.M.", "Sarkhad N.S."],
        },
        {
            name: "Table Tennis",
            schedule: ["", "", "", "16:00–18:00", "16:00–18:00", ""],
            participants: 15,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Nurgaliev D.N."],
        },
        {
            name: "Pankration & Grappling",
            schedule: ["", "16:00–18:00", "", "16:00–18:00", "", "16:00–18:00"],
            participants: 45,
            location: "Pankration MMA Grappling, 89 Zasyadko St.",
            instructors: ["Kakimov K.B."],
        },
        {
            name: "Togyz Kumalak",
            schedule: ["15:00–16:00", "", "", "", "15:00–16:00", ""],
            participants: 20,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Saukenov Kh.R.", "Sovetkaliev D.N."],
        },
    ],
};
const scheduleTitle = {
    ru: "Расписание спортивных секций на 2026–2027 учебный год",
    kz: "2026–2027 оқу жылына арналған спорт секцияларының кестесі",
    en: "Sports club schedule for the 2026–2027 academic year",
};

const header = {
    activity: {
        ru: "Вид тренировки",
        kz: "Жаттығу түрі",
        en: "Type of Training",
    },
    days: {
        ru: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
        kz: ["Дс", "Сс", "Ср", "Бс", "Жм", "Сб"],
        en: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    schedule: {
        ru: "Расписание",
        kz: "Кесте",
        en: "Schedule",
    },
    participants: {
        ru: "Кол-во",
        kz: "Саны",
        en: "Qty",
    },
    location: {
        ru: "Место",
        kz: "Өтетін орны",
        en: "Location",
    },
    instructors: {
        ru: "Ответственные",
        kz: "Жауапты оқытушылар",
        en: "Instructors",
    }
}
const SportTable = () => {
    const { locale } = useLocale()
    const days = header.days[locale];

    return <section className="relative overflow-hidden rounded-3xl border border-primary/15 bg-white p-4 shadow-[0_8px_30px_rgba(30,30,30,0.04)] md:p-7">
        <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
        <div className="flex items-center gap-4 border-b border-stone-100 px-2 pb-6">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary"><CalendarDays className="h-5 w-5" /></span>
            <h2 className="text-xl font-bold md:text-2xl">{scheduleTitle[locale]}</h2>
        </div>
        <p className="mt-4 text-sm text-stone-500 md:hidden">← {scrollHint[locale]} →</p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-stone-300">
            <Table className="min-w-[1120px] border-collapse">
                <TableHeader>
                    <TableRow className="bg-primary/10 hover:bg-primary/10">
                        <TableHead className="sticky left-0 z-20 w-44 border-r border-primary/20 bg-[#f7e9e6] px-4 text-sm font-bold text-primary">{header.activity[locale]}</TableHead>
                        {days.map((day) => (
                            <TableHead key={day} className="w-24 border-r border-primary/15 text-center text-sm font-bold text-primary">{day}</TableHead>
                        ))}
                        <TableHead className="w-20 border-r border-primary/15 text-center text-sm font-bold text-primary">{header.participants[locale]}</TableHead>
                        <TableHead className="w-60 border-r border-primary/15 text-sm font-bold text-primary">{header.location[locale]}</TableHead>
                        <TableHead className="w-52 text-sm font-bold text-primary">{header.instructors[locale]}</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trainingData[locale].map((item, index) => (
                        <TableRow key={item.name} className={index % 2 ? "bg-stone-50" : "bg-white"}>
                            <TableCell className={`sticky left-0 z-10 border-r border-stone-300 px-4 py-5 text-sm font-bold ${index % 2 ? "bg-stone-50" : "bg-white"}`}>{item.name}</TableCell>
                            {item.schedule.map((time, dayIndex) => (
                                <TableCell key={dayIndex} className="border-r border-stone-200 px-2 py-5 text-center text-sm">
                                    {time ? <strong className="inline-flex rounded-md bg-primary/10 px-2 py-1 font-semibold text-primary">{time}</strong> : <span className="text-stone-300">—</span>}
                                </TableCell>
                            ))}
                            <TableCell className="border-r border-stone-200 text-center text-sm font-bold">{item.participants}</TableCell>
                            <TableCell className="border-r border-stone-200 py-4 text-sm leading-6 text-stone-600">
                                <span className="flex gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />{item.location}</span>
                            </TableCell>
                            <TableCell className="py-4 text-sm leading-6">
                                {item.instructors.map((instructor) => <div key={instructor}>{instructor}</div>)}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    </section>
}

const scrollHint = {
    ru: "Проведите по таблице",
    kz: "Кестені жылжытыңыз",
    en: "Swipe the table",
};
