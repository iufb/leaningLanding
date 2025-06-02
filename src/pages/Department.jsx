import { useLocale } from "@/shared/context/locale";
import { cn, fileUrl, imgFallback } from "@/shared/lib/utils";
import { FileCard } from "@/shared/ui/file-card";
import { FormattedMessage } from "react-intl";
const fileData = {
    ru: [
        { name: "Бюджет", link: "/department/budget.pdf" },
        { name: "Отчёт", link: "/department/report.pdf" },
        { name: "Положение", link: "/department/pos.pdf" },
        { name: "План", link: "/department/plan.pdf" },
    ],
    kz: [
        { name: "Бюджет", link: "/department/budget.pdf" },
        { name: "Есеп", link: "/department/report.pdf" },
        { name: "Ереже", link: "/department/pos.pdf" },
        { name: "Жоспар", link: "/department/plan.pdf" },
    ],
    en: [
        { name: "Budget", link: "/department/budget.pdf" },
        { name: "Report", link: "/department/report.pdf" },
        { name: "Regulation", link: "/department/pos.pdf" },
        { name: "Plan", link: "/department/plan.pdf" },
    ],
};
const data = {
    imgs: ["/dias.jpg", "/asem.jpg", "", "/ajar.jpg", "/anar.jpg", "/ris.jpg"],
    ru: [
        { role: "Руководитель", name: "Смагулов Диас Ернурович" },
        { role: "Специалист", name: "Балташева Асем Мұратбекқызы" },
        { role: "Специалист", name: "Муратхан Ерсын Мариярұлы" },
        { role: "Специалист", name: "Досмухамбетова Ажар Айдосовна" },
        { role: "Воспитатель в Доме студентов", name: "Есжанова Анаргуль Маратбековна" },
        { role: "Воспитатель в Доме студентов", name: "Имангалиева Рысгул Шайкеқызы" }
    ],
    en: [
        { role: "Руководитель", name: "Смагулов Диас Ернурович" },
        { role: "Специалист", name: "Балташева Асем Мұратбекқызы" },
        { role: "Специалист", name: "Муратхан Ерсын Мариярұлы" },
        { role: "Специалист", name: "Досмухамбетова Ажар Айдосовна" },
        { role: "Воспитатель в Доме студентов", name: "Есжанова Анаргуль Маратбековна" },
        { role: "Воспитатель в Доме студентов", name: "Имангалиева Рысгул Шайкеқызы" }
    ],
    kz: [

        { role: "Жетекші", name: "Смагулов Диас Ернурович" },
        { role: "Маман", name: "Балташева Асем Мұратбекқызы" },
        { role: "Маман", name: "Муратхан Ерсын Мариярұлы" },
        { role: "Маман", name: "Досмухамбетова Ажар Айдосовна" },
        { role: "Студенттер үйінің тәрбиешісі", name: "Есжанова Анаргуль Маратбековна" },
        { role: "Студенттер үйінің тәрбиешісі", name: "Имангалиева Рысгул Шайкеқызы" }
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
                <MemberCard {...data[locale][0]} img={data.imgs[0]} className="mx-auto" />
                <section className="flex gap-10 flex-wrap  ">
                    {data[locale].slice(1).map((d, i) => (
                        <MemberCard key={d.name} {...d} img={data.imgs[i + 1]} className={"mx-auto"} />
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
