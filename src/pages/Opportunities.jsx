import { useLocale } from "@/shared/context/locale";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/shared/ui/table";
import { FormattedMessage } from "react-intl";

export const OpportunitiesPage = () => {
    return <section className="container">
        <h1 className="title"><FormattedMessage id="opportunities.title" /></h1>
        <section className="w-full bg-slate-200 rounded-lg h-96" />
        <h2 className="title"><FormattedMessage id="opportunities.schedule" /></h2>
        <SportTable />
    </section>
}

const trainingData = {
    ru: [
        {
            name: "Баскетбол",
            schedule: ["16:00-18:00", "", "16:00-18:00", "", "", ""],
            participants: 20,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Сесерхан Ж.", "Нурпеисов К.Н."],
        },
        {
            name: "Волейбол",
            schedule: ["", "", "16:00-18:00", "", "", "16:00-18:00"],
            participants: 35,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Темиржанов А.М."],
        },
        {
            name: "Футзал",
            schedule: ["", "", "", "", "16:00-18:00", "16:00-18:00"],
            participants: 25,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Мухамеджанов Д.Ж.", "Акчабаров М.М."],
        },
        {
            name: "NOMAD MMA",
            schedule: ["16:00-18:00", "", "16:00-18:00", "", "16:00-18:00", ""],
            participants: 45,
            location: "Корпус №2, Спортивный зал",
            instructors: ["Саельдинов С.С.", "Омарбеков А.Қ.", "Тлеубергенов К.М."],
        },
        {
            name: "Настольный теннис",
            schedule: ["", "", "", "", "16:00-18:00", "16:00-18:00"],
            participants: 15,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Нургалиев Д.Н."],
        },
        {
            name: "Панкратион и Грэплинг",
            schedule: ["", "16:00-18:00", "", "16:00-18:00", "", "16:00-18:00"],
            participants: 45,
            location: "KUDO.KZ, Ул.Засядко 89",
            instructors: ["Какимов К.Б.", "Советкалиев Д.Н."],
        },
        {
            name: "Тоғыз құмалақ",
            schedule: ["15:00-16:00", "", "", "", "15:00-16:00", ""],
            participants: 20,
            location: "Спортивный зал, Ул.Дулатова 284",
            instructors: ["Айдарханов Р.Ә.", "Саукенов Х.Р."],
        },
    ],
    kz: [
        {
            name: "Баскетбол",
            schedule: ["16:00-18:00", "", "16:00-18:00", "", "", ""],
            participants: 20,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Сесерхан Ж.", "Нұрпейісов К.Н."],
        },
        {
            name: "Волейбол",
            schedule: ["", "", "16:00-18:00", "", "", "16:00-18:00"],
            participants: 35,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Теміржанов А.М."],
        },
        {
            name: "Футзал",
            schedule: ["", "", "", "", "16:00-18:00", "16:00-18:00"],
            participants: 25,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Мұхамеджанов Д.Ж.", "Ақчабаров М.М."],
        },
        {
            name: "NOMAD MMA",
            schedule: ["16:00-18:00", "", "16:00-18:00", "", "16:00-18:00", ""],
            participants: 45,
            location: "2-ғимарат, Спорт залы",
            instructors: ["Саельдинов С.С.", "Омарбеков А.Қ.", "Тлеубергенов К.М."],
        },
        {
            name: "Үстел теннисі",
            schedule: ["", "", "", "", "16:00-18:00", "16:00-18:00"],
            participants: 15,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Нұрғалиев Д.Н."],
        },
        {
            name: "Панкратион және Грэплинг",
            schedule: ["", "16:00-18:00", "", "16:00-18:00", "", "16:00-18:00"],
            participants: 45,
            location: "KUDO.KZ, Засядко көшесі 89",
            instructors: ["Қакимов К.Б.", "Советқалиев Д.Н."],
        },
        {
            name: "Тоғызқұмалақ",
            schedule: ["15:00-16:00", "", "", "", "15:00-16:00", ""],
            participants: 20,
            location: "Спорт залы, Дулатов көшесі 284",
            instructors: ["Айдарханов Р.Ә.", "Сәукенов Х.Р."],
        },
    ],
    en: [
        {
            name: "Basketball",
            schedule: ["16:00–18:00", "", "16:00–18:00", "", "", ""],
            participants: 20,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Seserkhan Zh.", "Nurpeisov K.N."],
        },
        {
            name: "Volleyball",
            schedule: ["", "", "16:00–18:00", "", "", "16:00–18:00"],
            participants: 35,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Temirzhanov A.M."],
        },
        {
            name: "Futsal",
            schedule: ["", "", "", "", "16:00–18:00", "16:00–18:00"],
            participants: 25,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Mukhamedzhanov D.Zh.", "Akchabarov M.M."],
        },
        {
            name: "NOMAD MMA",
            schedule: ["16:00–18:00", "", "16:00–18:00", "", "16:00–18:00", ""],
            participants: 45,
            location: "Building No.2, Sports Hall",
            instructors: ["Saeldinov S.S.", "Omarbekov A.K.", "Tleubergenov K.M."],
        },
        {
            name: "Table Tennis",
            schedule: ["", "", "", "", "16:00–18:00", "16:00–18:00"],
            participants: 15,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Nurgaliev D.N."],
        },
        {
            name: "Pankration & Grappling",
            schedule: ["", "16:00–18:00", "", "16:00–18:00", "", "16:00–18:00"],
            participants: 45,
            location: "KUDO.KZ, 89 Zasyadko St.",
            instructors: ["Kakimov K.B.", "Sovetkaliev D.N."],
        },
        {
            name: "Togyz Kumalak",
            schedule: ["15:00–16:00", "", "", "", "15:00–16:00", ""],
            participants: 20,
            location: "Sports Hall, 284 Dulatov St.",
            instructors: ["Aidarhanov R.A.", "Saukenov Kh.R."],
        },
    ],
};
const scheduleTitle = {
    ru: "Расписание секции в спортивном зале Alikhan Bokeikhan University (2024–2025)",
    kz: "Alikhan Bokeikhan University спорт залындағы секция кестесі (2024–2025)",
    en: "Sports Hall Section Schedule at Alikhan Bokeikhan University (2024–2025)",
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
    participants: {
        ru: "Кол-во",
        kz: "Қатысушылар саны",
        en: "Participants",
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
    return <div className="p-4">
        <h2 className="text-2xl font-bold mb-4">
            {scheduleTitle[locale]}
        </h2>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>{header.activity[locale]}</TableHead>
                    {header.days[locale].map((d, id) =>
                        <TableHead key={id} className={'text-center'}>{d}</TableHead>
                    )}
                    <TableHead>{header.participants[locale]}</TableHead>
                    <TableHead>{header.location[locale]}</TableHead>
                    <TableHead>{header.instructors[locale]}</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {trainingData[locale].map((item, index) => (
                    <TableRow key={index} className={"text-center"}>
                        <TableCell className="font-medium text-start ">{item.name}</TableCell>
                        {item.schedule.map((time, i) => (
                            <TableCell key={i}>{time}</TableCell>
                        ))}
                        <TableCell>{item.participants}</TableCell>
                        <TableCell>{item.location}</TableCell>
                        <TableCell>
                            {item.instructors.map((instructor, i) => (
                                <div key={i}>{instructor}</div>
                            ))}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
}

