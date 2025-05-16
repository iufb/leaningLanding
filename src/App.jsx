import { EventsPage } from "@/pages/EventsPage";
import { HomePage } from "@/pages/Home";
import { OpportunitiesPage } from "@/pages/Opportunities";
import { PsychSupportPage } from "@/pages/PsychSupport";
import { SelfGovernmentPage } from "@/pages/SelfGovernment";
import { ServicesPage } from "@/pages/Services";
import { MastersPage } from "@/pages/usefulinfo/Masters";
import { PhdPage } from "@/pages/usefulinfo/PHD";
import { UsefulInfoStudentsPage } from "@/pages/usefulinfo/Students";
import { useLocale } from "@/shared/context/locale";
import { Header } from "@/widgets/header";
import { MessageSquareX } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { Link, Route, Switch } from "wouter";
import { DepartmentPage } from "./pages/Department";

const NotFoundView = () => {
    return (
        <section className="container flex flex-col items-center justify-center h-full my-auto ">
            <MessageSquareX size={92} className="text-red-500" />
            <h1 className="title">
                <FormattedMessage id="notfound.title" />
            </h1>
            <Link
                className={
                    "bg-primary text-white  px-5 py-3 rounded-lg font-bold shadow-xl border hover:opacity-70 transition-all duration-200"
                }
                href="/"
            >
                <FormattedMessage id="notfound.link" />
            </Link>
        </section>
    );
};
function App() {
    const { locale } = useLocale()
    return (
        <>
            <Header />
            <main className="bg-slate-50 py-5 min-h-[calc(100svh-124px-64px)]">
                <Switch>
                    <Route path="/" component={HomePage} />
                    <Route path="/services" component={ServicesPage} />
                    <Route path="/department" component={DepartmentPage} />
                    <Route path="/self-government" component={SelfGovernmentPage} />
                    <Route path="/psychological-support" component={PsychSupportPage} />
                    <Route
                        path="/usefulInfo/students"
                        component={UsefulInfoStudentsPage}
                    />
                    <Route path="/usefulInfo/masters" component={MastersPage} />
                    <Route path="/usefulInfo/phd" component={PhdPage} />
                    <Route path="/opportunities" component={OpportunitiesPage} />
                    <Route path="/events" component={EventsPage} />

                    <Route>
                        <NotFoundView />
                    </Route>
                </Switch>
            </main>
            <footer className="w-full  bg-primary text-white" >
                <div dangerouslySetInnerHTML={{ __html: footerdata[locale] }} />
            </footer>
        </>
    );
}
const footerdata = {
    ru: "<div class=' max-w-[1200px] mx-auto p-10 '><div class=' flex justify-between items-center mb-10'><div class='flex flex-col gap-4  text-white'><h2 class='text-2xl'>Наши контакты</h2><div class='flex flex-col gap-3'><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-phone'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path></svg><a href='tel:+7 7222 42-32-24'>+7 (7222) 42-32-24</a></div><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-mail'><rect width='20' height='16' x='2' y='4' rx='2'></rect><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path></svg><a href='mailto:semey@abu.edu.kz'>semey@abu.edu.kz</a></div><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-map-pin'><path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path><circle cx='12' cy='10' r='3'></circle></svg><span>Область Абай, г. Семей, ул. Мәңгілік Ел, 11</span></div></div></div></div><div aria-hidden='true'></div><span class='text-white block mt-4'>©2025 Все права защищены.</span></div>",
    kz: "<div class=' max-w-[1200px] mx-auto p-10 '><div class=' flex justify-between items-center mb-10'><div class='flex flex-col gap-4  text-white'><h2 class='text-2xl'>Біздің контактілер</h2><div class='flex flex-col gap-3'><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-phone'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path></svg><a href='tel:+7 7222 42-32-24'>+7 (7222) 42-32-24</a></div><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-mail'><rect width='20' height='16' x='2' y='4' rx='2'></rect><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path></svg><a href='mailto:semey@abu.edu.kz'>semey@abu.edu.kz</a></div><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-map-pin'><path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path><circle cx='12' cy='10' r='3'></circle></svg><span>Абай облысы, Семей қаласы, Мәңгілік Ел көшесі, 11</span></div></div></div></div><div aria-hidden='true'></div><span class='text-white block mt-4'>©2025 Барлық құқықтар қорғалған.</span></div>",
    en: "<div class=' max-w-[1200px] mx-auto p-10 '><div class=' flex justify-between items-center mb-10'><div class='flex flex-col gap-4  text-white'><h2 class='text-2xl'>Our contacts</h2><div class='flex flex-col gap-3'><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-phone'><path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path></svg><a href='tel:+7 7222 42-32-24'>+7 (7222) 42-32-24</a></div><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-mail'><rect width='20' height='16' x='2' y='4' rx='2'></rect><path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path></svg><a href='mailto:semey@abu.edu.kz'>semey@abu.edu.kz</a></div><div class='flex gap-4'><svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-map-pin'><path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path><circle cx='12' cy='10' r='3'></circle></svg><span>Abai region, Semey city, Mangilik El street, 11</span></div></div></div></div><div aria-hidden='true'></div><span class='text-white block mt-4'>©2025 All rights reserved.</span></div>",
}
export default App;
