import { HomePage } from "@/pages/Home";
import { OpportunitiesPage } from "@/pages/Opportunities";
import { PsychSupportPage } from "@/pages/PsychSupport";
import { SelfGovernmentPage } from "@/pages/SelfGovernment";
import { ServicesPage } from "@/pages/Services";
import { MastersPage } from "@/pages/usefulinfo/Masters";
import { PhdPage } from "@/pages/usefulinfo/PHD";
import { UsefulInfoStudentsPage } from "@/pages/usefulinfo/Students";
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

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </main>
      <footer className="w-full flex justify-center bg-primary p-5 h-16 text-white">
        2025
      </footer>
    </>
  );
}

export default App;
