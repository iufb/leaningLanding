import { cn } from "@/shared/lib/utils";
import { FileCard } from "@/shared/ui/file-card";
import { FormattedMessage } from "react-intl";

const sites = [
    {
        titleKey: 'services.platonus',
        url: 'http://platonus.semuniver.kz:8080/',
    },
    {
        titleKey: 'services.university',
        url: 'https://ais.semuniver.kz/login.php',
    },
    {
        titleKey: 'services.dotPortal',
        url: 'http://edu.semuniver.kz/',
    },
    {
        titleKey: 'services.library',
        url: 'https://library.semuniver.kz',
    },
    {
        titleKey: 'services.vestnik',
        url: 'https://vestnik.semuniver.kz',
    },
];
export const ServicesPage = () => {
    return <section className="container">
        <h1 className="title"><FormattedMessage id="services.title" /></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center gap-4 p-4">
            {sites.map((system, index) => (
                <a
                    href={system.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className={cn("rounded-2xl shadow-md border p-4 hover:shadow-lg transition-all my-auto")}
                >
                    <h3 className="text-xl font-semibold  text-center">
                        <FormattedMessage id={system.titleKey} />
                    </h3>
                </a>
            ))}
        </div>
        <h2 className="title"><FormattedMessage id="services.rules" /></h2>
        <div className="aspect-video rounded-lg overflow-hidden">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_r_kRHm5Maw"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <section className="flex flex-row gap-5 ">
            <FileCard name={'services.manual.workspace'} link={'services/1.pdf'} />
            <FileCard name={'services.manual.midterm'} link={'services/2.pdf'} />
            <FileCard name={'services.manual.final'} link={'services/3.pdf'} />
        </section>
    </section>
}
