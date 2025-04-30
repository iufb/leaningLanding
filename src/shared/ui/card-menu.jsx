import { useLocale } from "@/shared/context/locale"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { ArrowRight, FileIcon } from "lucide-react"
import { FormattedMessage } from "react-intl"

export const CardMenu = ({ trigger, documents }) => {
    const { locale } = useLocale()
    return <Dialog>
        <DialogTrigger>
            <section className="border p-5 rounded-lg min-h-52 flex  flex-col justify-between shadow-xl">
                <h3 className="text-xl md:text-2xl line-clamp-4"><FormattedMessage id={trigger} /></h3>

                <section
                    className="flex gap-2 items-center text-primary "
                >
                    <FormattedMessage id="card.link" /> <ArrowRight />
                </section>
            </section>
        </DialogTrigger>
        <DialogContent className={'max-h-screen overflow-auto'}>
            <DialogHeader>
                <DialogTitle className={'invisible'}>Are you absolutely sure?</DialogTitle>
                <DialogDescription className={'invisible'}>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </DialogDescription>
            </DialogHeader>
            <section className="flex flex-col gap-5 text-lg ">
                {documents[locale].map(d => <a key={d.url} className="grid grid-cols-[auto_1fr] items-center gap-4" target="_blank" href={d.url}><FileIcon /> {d.title}</a>)}
            </section>
        </DialogContent>
    </Dialog>

}
