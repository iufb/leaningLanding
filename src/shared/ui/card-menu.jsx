import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { FormattedMessage } from "react-intl"

export const CardMenu = ({ trigger, img, children }) => {
    return <Dialog>
        <DialogTrigger>
            <section className="border  p-5 rounded-lg gap-5 min-h-52 flex  flex-col justify-between shadow-xl">
                <img src={img} className="aspect-square max-w-xl h-auto rounded-md" />
                <h3 className="text-2xl font-semibold text-gray-800 tracking-tight mb-2"><FormattedMessage id={trigger} /></h3>

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
            {children}
        </DialogContent>
    </Dialog>

}
