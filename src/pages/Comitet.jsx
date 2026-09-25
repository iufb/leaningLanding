import { useLocale } from "@/shared/context/locale";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/shared/ui/drawer";
import { FileCard } from "@/shared/ui/file-card";
import { ArrowUpRight, FileText, Instagram, Phone, X } from "lucide-react";

const copy = {
    kz: {
        title: "Жастар ісі жөніндегі комитет - студенттік интеллигенция",
        subtitle: "Комитет құрамы",
        documents: "Құжаттар",
        phone: "Байланыс телефоны",
        instagram: "Instagram аккаунты",
        course: "Курс",
        faculty: "Факультет",
        about: "Өзі туралы",
        principle: "Өмірлік ұстаным",
        docNames: [
            "2026–2027 оқу жылының жоспары",
            "Жастар ісі жөніндегі комитет құрылымы",
            "Жастар ісі жөніндегі комитет туралы ереже",
            "Жастар ісі жөніндегі комитет рейтингі ережесі",
        ],
    },
    ru: {
        title: "Комитет по делам молодежи - студенческая интеллигенция",
        subtitle: "Состав комитета",
        documents: "Документы",
        phone: "Контактный телефон",
        instagram: "Instagram",
        course: "Курс",
        faculty: "Факультет",
        about: "О себе",
        principle: "Жизненный принцип",
        docNames: [
            "План на 2026–2027 учебный год",
            "Структура Комитета по делам молодёжи",
            "Положение о Комитете по делам молодёжи",
            "Правила рейтинга Комитета по делам молодёжи",
        ],
    },
    en: {
        title: "Youth Affairs Committee",
        subtitle: "Committee members",
        documents: "Documents",
        phone: "Contact phone",
        instagram: "Instagram",
        course: "Year",
        faculty: "Faculty",
        about: "About",
        principle: "Life principle",
        docNames: [
            "Plan for the 2026–2027 academic year",
            "Youth Affairs Committee structure",
            "Youth Affairs Committee regulations",
            "Youth Affairs Committee rating rules",
        ],
    },
};

const members = [
    {
        image: "/comitet/team/1-baimakhanbet.jpeg",
        name: { kz: "Баймаханбет Қуаныш Заманұлы", ru: "Баймаханбет Куаныш Заманұлы" },
        role: { kz: "Төраға", ru: "Председатель" },
        course: "3",
        faculty: { kz: "Ақпараттық технология және экономика факультеті", ru: "Факультет информационных технологий и экономики" },
        phone: "+7 747 680 5538",
        instagram: "baimakhanbett",
        bio: {
            kz: "Ақпараттық технология және экономика факультетінің 3-курс студенті. Қазақстан студенттерінің Альянсында белсенді мүше және төраға болып, студенттік бастамалар мен жобаларды ұйымдастыру тәжірибесін жинақтады. Қазір студенттердің қоғамдық белсенділігін арттыру, жастар бастамаларын қолдау және студенттік ұйымдардың жұмысын үйлестіру бағытында жұмыс істейді.",
            ru: "Студент 3 курса факультета информационных технологий и экономики. Был активным членом, а затем председателем Альянса студентов Казахстана, где получил опыт координации команды и студенческих проектов. Сейчас развивает общественную активность студентов, поддерживает молодёжные инициативы и координирует работу студенческих организаций.",
        },
        principle: { kz: "Ұлтына, жұртына қызмет ету – білімнен емес, мінезден.", ru: "Служение своему народу и своей нации — это не столько вопрос знаний, сколько вопрос характера." },
    },
    {
        image: "/comitet/team/2-tuleubaev.jpg",
        name: { kz: "Тулеубаев Алимжан Айдынович", ru: "Тулеубаев Алимжан Айдынович" },
        role: { kz: "Кеңесші", ru: "Советник" },
        course: "3",
        faculty: { kz: "Ақпараттық технология және экономика факультеті", ru: "Факультет информационных технологий и экономики" },
        phone: "+7 775 975 81 31",
        instagram: "tuleubaev.alim",
        bio: {
            kz: "Университеттің студенттік өміріне және қоғамдық жұмысына белсенді қатысады. Қазақстан студенттерінің Альянсында белсенді мүше және бас ұйымдастырушы ретінде іс-шараларды жоспарлау, студенттерді жұмылдыру және командалық жұмысты үйлестіру тәжірибесін жинақтады.",
            ru: "Активно участвует в студенческой и общественной жизни университета. В Альянсе студентов Казахстана был активным членом и главным организатором, получил опыт планирования мероприятий, координации команды и реализации новых инициатив.",
        },
        principle: { kz: "Мықты мінез, нақты мақсат, үлкен жауапкершілік.", ru: "Сильный характер, чёткая цель, большая ответственность." },
    },
    {
        image: "/comitet/team/3-nurollaeva.jpeg",
        name: { kz: "Нуроллаева Айдана Ерланқызы", ru: "Нуроллаева Айдана Ерланқызы" },
        role: { kz: "Төраға орынбасары", ru: "Заместитель председателя" },
        course: "3",
        faculty: { kz: "Гуманитарлық факультет", ru: "Гуманитарный факультет" },
        phone: "+7 708 652 80 22",
        instagram: "adiokki",
        bio: {
            kz: "Қазақ тілі мен әдебиеті мұғалімдерін даярлау мамандығының студенті, «Елбасы медалі» жобасының қола медаль иегері және «XXI ғасыр көшбасшысы» титулының иегері. Қоғамдық іс-шаралар мен жастар жобаларын ұйымдастыруға белсенді қатысады.",
            ru: "Студентка специальности «Подготовка учителей казахского языка и литературы», бронзовый медалист проекта «Медаль Елбасы» и обладатель титула «Лидер XXI века». Активно участвует в организации общественных мероприятий и молодёжных проектов.",
        },
        principle: { kz: "Біліммен биікке, еңбекпен мақсатқа.", ru: "С помощью знаний — к высотам, с трудом — к цели." },
    },
    {
        image: "/comitet/team/4-amantai.jpeg",
        name: { kz: "Амантай Мадина Қайратқызы", ru: "Амантай Мадина Қайратқызы" },
        role: { kz: "Төраға орынбасары", ru: "Заместитель председателя" },
        course: "3",
        faculty: { kz: "Ақпараттық технология және экономика факультеті", ru: "Факультет информационных технологий и экономики" },
        phone: "+7 777 224 81 64",
        instagram: "m1diin1_",
        bio: {
            kz: "Қоғамдық жұмыстарға белсенді қатысады. Қазақстан студенттерінің Альянсында белсенді студент, кейін Комитеттің іс-қағаздар бөлімінің жетекшісі болды. Қазір төраға орынбасары ретінде студенттердің қоғамдық белсенділігін арттыруға атсалысады.",
            ru: "Активно участвует в общественной работе. Была членом Альянса студентов Казахстана, затем руководила отделом делопроизводства Комитета. Сейчас как заместитель председателя помогает повышать общественную активность студентов.",
        },
        principle: { kz: "Әр бастама – жаңа мүмкіндік, әр әрекет – жаңа нәтиже.", ru: "Каждая инициатива — новая возможность, каждое действие — новый результат." },
    },
    {
        image: "/comitet/team/5-galibekov.jpeg",
        name: { kz: "Галибеков Али Куанышбекович", ru: "Галибеков Али Куанышбекович" },
        role: { kz: "Координатор", ru: "Координатор" },
        course: "3",
        faculty: { kz: "Ақпараттық технология және экономика факультеті", ru: "Факультет информационных технологий и экономики" },
        phone: "+7 700 988 30 63",
        instagram: "_o_alishka_o",
        bio: {
            kz: "Биотехнология мамандығының студенті, қалалық және облыстық семинарлар мен олимпиадаларға қатысады. «Жастар Рухы» жастар қанаты төрағасының орынбасары және облыстық мүшесі болды. Абай облысы Жастар мәслихатының депутаты.",
            ru: "Студент специальности «Биотехнология», участник городских и областных семинаров и олимпиад. Был заместителем председателя и областным членом молодёжного крыла «Жастар Рухы». Депутат Молодёжного маслихата области Абай.",
        },
        principle: { kz: "Үндемей істеген іс – айғайлап айтқан сөзден биік.", ru: "Поступки, совершённые молча, выше слов, сказанных громко." },
    },
    {
        image: "/comitet/team/6-muratova.jpeg",
        name: { kz: "Мұратова Айзада Медетқызы", ru: "Муратова Айзада Медетқызы" },
        role: { kz: "Ішкі істер бөлімі", ru: "Отдел внутренних дел" },
        course: "3",
        faculty: { kz: "Заң факультеті", ru: "Юридический факультет" },
        phone: "+7 707 314 46 50",
        instagram: "_the.a.z",
        bio: {
            kz: "«Құқық қорғау қызметі» мамандығының студенті. «Жастар Рухы» жастар қанаты төрағасының орынбасары болды, әскери-патриоттық және қоғамдық іс-шараларға белсенді қатысады. «Үздік актриса – 2024» номинациясының иегері.",
            ru: "Студентка специальности «Правоохранительная деятельность». Была заместителем председателя молодёжного крыла «Жастар Рухы», активно участвует в военно-патриотических и общественных мероприятиях. Обладательница номинации «Лучшая актриса — 2024».",
        },
        principle: { kz: "Өзіме адал болып, жүрегім қалаған жолмен жүру.", ru: "Быть честной с собой и идти путём, который выбирает сердце." },
    },
    {
        image: "/comitet/team/7-baratova.jpeg",
        name: { kz: "Баратова Перизат Ержанқызы", ru: "Баратова Перизат Ержанқызы" },
        role: { kz: "Ішкі істер бөлімі", ru: "Отдел внутренних дел" },
        course: "3",
        faculty: { kz: "Ақпараттық технология және экономика факультеті", ru: "Факультет информационных технологий и экономики" },
        phone: "+7 708 279 26 39",
        instagram: "baraatoova",
        bio: {
            kz: "Биотехнология мамандығының студенті. Бұған дейін факультеттің студенттік деканы болып, студенттердің ұсыныстарын қолдау және іс-шаралар ұйымдастыру тәжірибесін жинақтады. «III Vice Kelbet – 2026» жобасына қатысты.",
            ru: "Студентка специальности «Биотехнология». Ранее была студенческим деканом факультета, работала с инициативами студентов и организацией мероприятий. Участвовала в проекте «III Vice Kelbet — 2026».",
        },
        principle: { kz: "Әр күн – жаңа мүмкіндік.", ru: "Каждый день — новая возможность." },
    },
    {
        image: "/comitet/team/8-nurakhatova.jpeg",
        name: { kz: "Нурахатова Асима Асхатқызы", ru: "Нурахатова Асима Асхатқызы" },
        role: { kz: "Іс-қағаздар бөлімінің жетекшісі", ru: "Руководитель отдела делопроизводства" },
        course: "3",
        faculty: { kz: "Гуманитарлық факультет", ru: "Гуманитарный факультет" },
        phone: "+7 778 836 77 56",
        instagram: "nurahatova_",
        bio: {
            kz: "«География – Тарих» мамандығының студенті. Қазақстан студенттерінің Альянсында және университеттің Медиа командасында жұмыс істеді. ABU волейбол командасының ойыншысы, қоғамдық белсенділік пен спортты қатар алып жүреді.",
            ru: "Студентка специальности «География — История». Работала в Альянсе студентов Казахстана и Медиа-команде университета. Играет в волейбольной команде ABU, совмещая общественную активность и спорт.",
        },
        principle: { kz: "Кең болсаң, кем болмайсың.", ru: "Будь щедрым душой — и не будешь в убытке." },
    },
    {
        image: "/comitet/team/9-ramazanov.jpeg",
        name: { kz: "Рамазанов Әділ Серікжанұлы", ru: "Рамазанов Адиль Серикжанұлы" },
        role: { kz: "PR-менеджер", ru: "PR-менеджер" },
        course: "2",
        faculty: { kz: "Ақпараттық технология және экономика факультеті", ru: "Факультет информационных технологий и экономики" },
        phone: "+7 777 853 40 17",
        instagram: "serikzhanuly.ph",
        bio: {
            kz: "Университеттің Медиа командасында фотограф. Комитетте іс-шаралар мен жобаларды ақпараттық насихаттау, әлеуметтік желілердегі жарияланымдар және жастармен коммуникация бағытында жұмыс істейді.",
            ru: "Фотограф Медиа-команды университета. В Комитете занимается информационным продвижением мероприятий и проектов, публикациями в социальных сетях и коммуникацией с молодёжью.",
        },
        principle: { kz: "Мүмкіндік күтпе, мүмкіндікті өзің жаса.", ru: "Не жди возможности — создавай её сам." },
    },
    {
        image: "/comitet/team/10-erzat.jpeg",
        name: { kz: "Ерзат Раула", ru: "Ерзат Раула" },
        role: { kz: "Контент-мейкер", ru: "Content Maker" },
        course: "3",
        faculty: { kz: "Гуманитарлық факультет", ru: "Гуманитарный факультет" },
        phone: "+7 778 630 32 86",
        instagram: "erzraula",
        bio: {
            kz: "Гуманитарлық факультеттің белсендісі және ұйымдастырушысы болды. Қазір Комитеттің әлеуметтік желілеріне контент әзірлеп, іс-шараларды ақпараттық насихаттайды және жастар белсенділігін көрсетеді.",
            ru: "Был активистом и организатором Гуманитарного факультета. Сейчас создаёт контент для социальных сетей Комитета, продвигает мероприятия и освещает молодёжную активность.",
        },
        principle: { kz: "Шынайы бол, өзіңді жоғалтпа және жүрегің тыныш болатын нәрсені таңда.", ru: "Будь собой, не теряй себя и выбирай то, что приносит спокойствие твоему сердцу." },
    },
];

const documents = [
    "/comitet/documents/plan-2026-2027.pdf",
    "/comitet/documents/structure.pdf",
    "/comitet/documents/regulations.pdf",
    "/comitet/documents/rating-rules.pdf",
];

const localized = (value, locale) => value[locale] || value.ru;

export const ComitetPage = () => {
    const { locale } = useLocale();
    const t = copy[locale] || copy.ru;

    return (
        <section className="container relative py-8 md:py-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(170,58,40,0.13),transparent_68%)]" />
            <header className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-primary" />
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">{t.title}</h1>
                <p className="mt-4 text-stone-500 md:text-lg">{t.subtitle}</p>
            </header>

            <section className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
                {members.map((member, index) => (
                    <MemberCard key={member.instagram} member={member} locale={locale} index={index} labels={t} />
                ))}
            </section>

            <section className="mt-8 rounded-3xl border border-black/5 bg-white p-5 shadow-[0_10px_35px_rgba(30,30,30,0.05)] md:p-8">
                <div className="mb-6 flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white"><FileText className="h-5 w-5" /></span>
                    <h2 className="text-2xl font-bold md:text-3xl">{t.documents}</h2>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {documents.map((link, index) => (
                        <FileCard key={link} name={t.docNames[index]} link={link} exact variant="modern" className="h-44" rawName />
                    ))}
                </div>
            </section>
        </section>
    );
};

const MemberCard = ({ member, locale, index, labels }) => (
    <Drawer>
        <DrawerTrigger className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white text-left transition-transform duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-primary" style={{ animationDelay: `${index * 60}ms` }}>
            <div className="aspect-[3/4] overflow-hidden bg-stone-100">
                <img src={member.image} alt={localized(member.name, locale)} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="min-h-32 p-4">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">{localized(member.role, locale)}</p>
                <h3 className="font-bold leading-snug md:text-lg">{localized(member.name, locale)}</h3>
            </div>
            <ArrowUpRight className="absolute bottom-4 right-4 h-5 w-5 text-stone-400 transition-colors group-hover:text-primary" />
        </DrawerTrigger>
        <DrawerContent className="!inset-0 !m-0 !h-[100dvh] !max-h-[100dvh] !rounded-none border-0 bg-stone-50">
            <DrawerHeader className="relative border-b border-black/5 bg-white px-16 py-4 text-center">
                <DrawerTitle className="text-lg font-bold md:text-2xl">{localized(member.name, locale)}</DrawerTitle>
                <DrawerDescription className="text-primary">{localized(member.role, locale)}</DrawerDescription>
                <DrawerClose aria-label="Close" className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-stone-100 transition-all hover:rotate-90 hover:bg-primary hover:text-white md:right-7"><X className="h-5 w-5" /></DrawerClose>
            </DrawerHeader>
            <div className="mx-auto grid w-full max-w-5xl flex-1 gap-6 overflow-auto px-4 py-6 md:grid-cols-[300px_1fr] md:px-8 md:py-10">
                <div>
                    <img src={member.image} alt={localized(member.name, locale)} className="mx-auto aspect-[3/4] w-full max-w-72 rounded-3xl object-cover shadow-[0_12px_35px_rgba(30,30,30,0.12)]" />
                </div>
                <article className="rounded-3xl border border-black/5 bg-white p-6 md:p-9">
                    <p className="text-sm font-bold uppercase tracking-[0.16em] text-primary">{localized(member.role, locale)}</p>
                    <h2 className="mt-2 text-2xl font-bold md:text-3xl">{localized(member.name, locale)}</h2>
                    <dl className="mt-7 grid gap-4 sm:grid-cols-2">
                        <Info label={labels.course} value={member.course} />
                        <Info label={labels.faculty} value={localized(member.faculty, locale)} />
                    </dl>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a href={`tel:${member.phone.replaceAll(" ", "")}`} className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2.5 text-sm font-medium hover:bg-primary hover:text-white"><Phone className="h-4 w-4" />{member.phone}</a>
                        <a href={`https://instagram.com/${member.instagram}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2.5 text-sm font-medium hover:bg-primary hover:text-white"><Instagram className="h-4 w-4" />@{member.instagram}</a>
                    </div>
                    <section className="mt-8 border-t border-stone-100 pt-7">
                        <h3 className="font-bold">{labels.about}</h3>
                        <p className="mt-3 leading-7 text-stone-600">{localized(member.bio, locale)}</p>
                    </section>
                    <section className="mt-6 rounded-2xl bg-primary/5 p-5">
                        <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-primary">{labels.principle}</h3>
                        <p className="mt-2 font-medium leading-7">«{localized(member.principle, locale)}»</p>
                    </section>
                </article>
            </div>
        </DrawerContent>
    </Drawer>
);

const Info = ({ label, value }) => (
    <div className="rounded-2xl bg-stone-50 p-4">
        <dt className="text-xs font-bold uppercase tracking-wide text-stone-400">{label}</dt>
        <dd className="mt-1 font-medium leading-6">{value}</dd>
    </div>
);
