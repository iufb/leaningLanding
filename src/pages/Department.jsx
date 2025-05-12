import { useLocale } from "@/shared/context/locale";
import { fileUrl, imgFallback } from "@/shared/lib/utils";
import { FileCard } from "@/shared/ui/file-card";
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
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {data[locale].map((d) => (
          <MemberCard key={d.name} {...d} />
        ))}
      </section>
      <section className="grid gap-5 grid-col-1  md:grid-col-2 grid-cols-3">
        {fileData[locale].map((f) => (
          <FileCard key={f.name} name={f.name} link={f.link} />
        ))}
      </section>
    </section>
  );
};

const MemberCard = ({ img, role, name, phone, email }) => {
  const imageSrc = img ? `${fileUrl}/department${img}` : imgFallback;

  return (
    <section className="flex w-full gap-4 border shadow-xl px-4 py-3 rounded-lg items-start">
      <img
        src={imageSrc}
        alt={name}
        className="w-28 h-28 rounded-full object-cover shrink-0"
      />

      <div className="flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-bold leading-snug">{name}</h3>

        <p className="text-slate-500 text-sm leading-snug">{role}</p>

        <div className="flex flex-wrap gap-2 mt-auto -ml-28 md:ml-0 ">
          {phone && (
            <a
              href={`tel:${phone}`}
              className="px-3 py-1 text-sm font-medium text-white bg-primary border rounded-lg"
            >
              {phone}
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              className="px-3 py-1 text-sm font-medium text-white bg-primary border rounded-lg break-all"
            >
              {email}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

// return (
// <section className="w-full flex flex-col sm:flex-row rounded-lg border shadow-2xl p-1 gap-5 ">
//   <img
//     src={img ? fileUrl + "/department" + img : imgFallback}
//     className="w-full md:w-1/5 sm:w-2/5 aspect-square  rounded-lg shrink-0 "
//   />
//   <section className="w-full md:w-4/5 sm:w-3/5 flex flex-col gap-4  sm:items-start  items-center text-center  sm:justify-center">
//     <h2 className="text-lg md:text-xl font-bold">{role}</h2>
//     <h3 className=" text-md md:text-lg">{name}</h3>
//     <a className="text-sm md:text-md" href={`tel:${phone}`}>
//       {phone}
//     </a>
//     <a className="text-md" href={`email:${email}`}>
//       {email}
//     </a>
//   </section>
// </section>
// );
