import { fileUrl } from "@/shared/lib/utils"
import { FileCard } from "@/shared/ui/file-card"
import { FormattedMessage } from "react-intl"

export const HomePage = () => {
    return <section className="container">
        <section className="w-full rounded-lg h-96 bg-slate-200" />
        <section className="flex md:flex-row flex-col gap-5">
            <FileCard name={'home.guidebook'} link={'home/1.pdf'} />
            <FileCard name={'home.evaluationCriteria'} link={'home/2.pdf'} />
        </section>
        <h1 className="title"><FormattedMessage id="home.title" /></h1>
        <section className="flex gap-5 flex-col items-center lg:flex-row">
            <img className="rounded-lg w-full lg:w-[30%] aspect-square" src={fileUrl + "home/dias.jpg"} />
            <section className="flex flex-col gap-4 text-center justify-center items-center  w-2/3">
                <h2 className="text-2xl md:text-3xl"><FormattedMessage id="home.director" /></h2>
                <h3 className="text-xl md:text-2xl"><FormattedMessage id="home.dirName" /></h3>
                <a className="text-lg md:text-xl" href="mailto:dias_101@mail.ru">dias_101@mail.ru</a>
            </section>
        </section>

        <section className="flex md:flex-row flex-col gap-5">
            <FileCard name={'home.position'} link={'home/3.pdf'} />
            <FileCard name={'home.plan'} link={'home/4.pdf'} />
        </section>

        <section className="flex flex-col gap-5">
            <h2 className="title"><FormattedMessage id="home.calendar.title" /></h2>
            <FileCard name={'home.calendar.law.ssoVV'} link={'home/5.pdf'} />
            <FileCard name={'home.calendar.humanitarian.ssoVV'} link={'home/6.pdf'} />
            <FileCard name={'home.calendar.itEconomy.ssh'} link={'home/7.pdf'} />
            <FileCard name={'home.calendar.law.ssh'} link={'home/8.pdf'} />
            <FileCard name={'home.calendar.humanitarian.ssh'} link={'home/9.pdf'} />
            <FileCard name={'home.calendar.itEconomy.ssoVV'} link={'home/10.pdf'} />
        </section>

        <section>
            <h2 className="title mb-10">
                <FormattedMessage id="home.academicIntegrity.title" />
            </h2>

            <p className="text-center text-lg md:text-xl my-5 "><FormattedMessage id="home.academicIntegrity.description" /></p>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5">
                <FileCard name={'home.academicIntegrity.rules'} link={'home/11.pdf'} />
                <FileCard name={'home.academicIntegrity.principles'} link={'home/12.pptx'} />
                <FileCard name={'home.academicIntegrity.policyCheckWritten'} link={'home/13.pdf'} />
                <FileCard name={'home.academicIntegrity.aboutCheckSystems'} link={'home/14.pdf'} />
                <FileCard name={'home.academicIntegrity.thesisPlagiarismRegulation'} link={'home/15.pdf'} />
                <FileCard name={'home.studentHonorCode'} link={'home/16.pdf'} />
            </section>

        </section>

    </section>
}
