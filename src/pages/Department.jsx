import { useLocale } from "@/shared/context/locale";
import { cn, fileUrl, imgFallback } from "@/shared/lib/utils";
import { FormattedMessage } from "react-intl";
const data = {
    imgs: [
        "/department/team/dias.jpg",
        "/department/team/muratkhan-ersin.jpg",
        "/department/team/omyraldy-aizada.jpg",
        "/department/team/abylgazina-dina.jpeg",
        "/department/team/asem.jpg",
        "/department/team/kadirbekov-beibit.jpeg",
        "/department/team/anar.jpg",
        "/department/team/ris.jpg",
    ],
    ru: [
        { role: "Руководитель", name: "Смагулов Диас Ернурович" },
        { role: "Главный специалист", name: "Муратхан Ерсин Мадиярулы" },
        { role: "Специалист", name: "Омыралды Айзада Серикжановна" },
        { role: "Специалист", name: "Абылгазина Дина Рахатовна" },
        { role: "Хореограф", name: "Балташева Асем Муратбеккызы" },
        { role: "Воспитатель Дома студентов", name: "Кадирбеков Бейбит Камалбекович" },
        { role: "Воспитатель Дома студентов", name: "Есжанова Анаргуль Маратбековна" },
        { role: "Воспитатель Дома студентов", name: "Имангалиева Рыскуль Шайкекызы" },
    ],
    en: [
        { role: "Head", name: "Dias Smagulov" },
        { role: "Chief Specialist", name: "Yersin Muratkhan" },
        { role: "Specialist", name: "Aizada Omyraldy" },
        { role: "Specialist", name: "Dina Abylgazina" },
        { role: "Choreographer", name: "Asem Baltasheva" },
        { role: "Student House Educator", name: "Beibit Kadirbekov" },
        { role: "Student House Educator", name: "Anargul Yeszhanova" },
        { role: "Student House Educator", name: "Ryskul Imangaliyeva" },
    ],
    kz: [
        { role: "Жетекші", name: "Смағұлов Диас Ернұрұлы" },
        { role: "Бас маман", name: "Муратхан Ерсін Мадиярұлы" },
        { role: "Маман", name: "Омыралды Айзада Серікжанқызы" },
        { role: "Маман", name: "Абылғазина Дина Рахатқызы" },
        { role: "Хореограф", name: "Балташева Асем Мұратбекқызы" },
        { role: "Студенттер үйінің тәрбиешісі", name: "Кадирбеков Бейбіт Камалбекұлы" },
        { role: "Студенттер үйінің тәрбиешісі", name: "Есжанова Анаргүл Маратбекқызы" },
        { role: "Студенттер үйінің тәрбиешісі", name: "Имангалиева Рыскүл Шайкекызы" },
    ],
};
export const DepartmentPage = () => {
    const { locale } = useLocale();
    return (
        <section className="container relative py-8 md:py-14">
            <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top,rgba(170,58,40,0.12),transparent_68%)]" />
            <header className="mx-auto max-w-4xl text-center">
                <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-primary" />
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                    <FormattedMessage id="department.title" />
                </h1>
            </header>
            <section className="flex flex-col gap-10 md:gap-14">
                <MemberCard {...data[locale][0]} img={data.imgs[0]} className="mx-auto" />
                <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
                    {data[locale].slice(1).map((d, i) => (
                        <MemberCard key={d.name} {...d} img={data.imgs[i + 1]} className="mx-auto" />
                    ))}
                </section>
            </section>
        </section>
    );
};

const MemberCard = ({ img, role, name, className }) => {
    const imageSrc = img?.startsWith("/department/team/")
        ? img
        : img
          ? `${fileUrl}/department${img}`
          : imgFallback;

    return (
        <section className={cn("group w-full max-w-[300px] overflow-hidden rounded-3xl border border-black/5 bg-white transition-transform duration-300 hover:-translate-y-1", className)}>
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-stone-100 to-primary/5">
                <div className="pointer-events-none absolute -right-10 -top-10 z-10 h-28 w-28 rounded-full border border-primary/10" />
                <div className="pointer-events-none absolute -bottom-14 -left-12 z-10 h-36 w-36 rounded-full border border-primary/10" />
                <img
                    src={imageSrc}
                    alt={name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
            </div>
            <section className="flex min-h-32 flex-col items-center justify-center gap-2 px-5 py-5 text-center">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-primary">{role}</span>
                <h3 className="text-lg font-bold leading-snug tracking-tight">{name}</h3>
            </section>
        </section>
    );
};
