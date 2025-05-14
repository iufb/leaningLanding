import { useLocale } from "@/shared/context/locale";
import { cn, fileUrl, imgFallback } from "@/shared/lib/utils";
import { FileCard } from "@/shared/ui/file-card";
import { FormattedMessage } from "react-intl";
const fileData = {
    ru: [
        { name: "Бюджет", link: "/department/budget.pdf" },
        { name: "Отчёт", link: "/department/report.pdf" },
        { name: "Положение", link: "/department/regulation.pdf" },
        { name: "План", link: "/department/plan.pdf" },
    ],
    kz: [
        { name: "Бюджет", link: "/department/budget.pdf" },
        { name: "Есеп", link: "/department/report.pdf" },
        { name: "Ереже", link: "/department/regulation.pdf" },
        { name: "Жоспар", link: "/department/plan.pdf" },
    ],
    en: [
        { name: "Budget", link: "/department/budget.pdf" },
        { name: "Report", link: "/department/report.pdf" },
        { name: "Regulation", link: "/department/regulation.pdf" },
        { name: "Plan", link: "/department/plan.pdf" },
    ],
};
const data = {
    ru: [],
    en: [],
    kz: [
        {
            role: "Жастарды ұйымдастыру және әдістемелік жұмыс жөніндегі департамент жетекшісі",
            name: "Смагулов Диас Ернурович",
            phone: "+7 775 103 3233",
            email: "dias_101@mail.ru",
            img: "/dias.jpg", // add an image URL here
        },
        {
            role: "Жастарды ұйымдастыру және әдістемелік жұмыс жөніндегі департамент маманы",
            name: "Балташева Асем Мұратбекқызы",
            phone: "+7 777 620 8311",
            email: "Baltashevaasem@mail.ru",
            img: "", // add an image URL here
        },
        {
            role: "Жастарды ұйымдастыру және әдістемелік жұмыс жөніндегі департамент маманы",
            name: "Муратхан Ерсын Мариярұлы",
            phone: "+7 705 540 8574",
            email: "murathan.yersyn@mail.ru",
            img: "", // add an image URL here
        },
        {
            role: "Жастарды ұйымдастыру және әдістемелік жұмыс жөніндегі департамент маманы",
            name: "Досмухамбетова Ажар Айдосовна",
            phone: "+7 708 523 2713",
            email: "adzhara.aidosovna@icloud.com",
            img: "", // add an image URL here
        },
        {
            role: "№2 Студенттер үйінің тәрбиешісі",
            name: "Есжанова Анаргуль Маратбековна",
            phone: "+7 747 687 9184",
            email: "",
            img: "", // add an image URL here
        },
        {
            role: "№2 Студенттер үйінің тәрбиешісі",
            name: "Имангалиева Рысгул Шайкеқызы",
            phone: "",
            email: "",
            img: "", // add an image URL here
        },
    ],
};
export const DepartmentPage = () => {
    const { locale } = useLocale();
    return (
        <section className="container   ">
            <h1 className="title">
                <FormattedMessage id="department.title" />
            </h1>
            <section className="flex flex-col gap-10">
                <MemberCard {...data[locale][0]} className="mx-auto" />
                <section className="flex gap-10 flex-wrap xl:flex-nowrap ">
                    {data[locale].slice(1).map((d) => (
                        <MemberCard key={d.name} {...d} className={"mx-auto"} />
                    ))}
                </section>
            </section>
            <section className="grid gap-5 grid-col-1  md:grid-col-2 grid-cols-3">
                {fileData[locale].map((f) => (
                    <FileCard key={f.name} name={f.name} link={f.link} />
                ))}
            </section>
        </section>
    );
};

const MemberCard = ({ img, role, name, className }) => {
    const imageSrc = img ? `${fileUrl}/department${img}` : imgFallback;

    return (
        <section className={cn("flex flex-col gap-5", className)}>
            <img src={imageSrc} className="max-w-[320px] aspect-[3/4] object-cover" />
            <section className="flex flex-col gap-4 max-w-[320px] text-center">
                <h3 className="font-bold text-xl tracking-wide ">{name}</h3>
                <span className="text-gray-500 line-clamp-3 font-medium">{role}</span>
            </section>
        </section>
    );
};
