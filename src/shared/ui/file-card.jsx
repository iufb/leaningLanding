import { fileUrl } from "@/shared/lib/utils"
import { ArrowRight } from "lucide-react"
import { FormattedMessage } from "react-intl"

export const FileCard = ({ name, link }) => {
    return <section className="w-full flex h-52 flex-col justify-between rounded-lg shadow-xl p-5 hover:shadow-2xl cursor-pointer  transition-shadow duration-300">
        <h2 className="text-xl md:text-2xl line-clamp-4  "><FormattedMessage id={name} /></h2>
        <a className="flex gap-2   items-center text-primary" href={fileUrl + link} target="_blank"><FormattedMessage id="card.link" /> <ArrowRight /></a>

    </section>
}
