import { fileUrl } from "@/shared/lib/utils"
import { FormattedMessage, useIntl } from "react-intl"

export const PsychSupportPage = () => {
    const { formatMessage } = useIntl()
    return <section className="container">
        <h1 className="title"><FormattedMessage id="psychSupport.title" /></h1>
        <section className="text-md lg:text-lg" dangerouslySetInnerHTML={{ __html: formatMessage({ id: "psychSupport.content" }) }} />
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center p-4 border rounded-lg shadow-xl">
            <img src={fileUrl + '/psychSupport/image.jpg'} className="aspect-square rounded-lg" />
            <section className="text-md lg:text-lg" dangerouslySetInnerHTML={{ __html: formatMessage({ id: "psychSupport.card" }) }} />
        </section>
        <div className="aspect-video rounded-lg overflow-hidden border-none">
            <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Nern8kYHrbw"
                title="YouTube video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>

    </section>
}
