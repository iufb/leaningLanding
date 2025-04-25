import { fileUrl, imgFallback } from "@/shared/lib/utils";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/shared/ui/drawer";
import { FileCard } from "@/shared/ui/file-card";
import { Mail, PhoneIcon } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";




const selfgovermentList = [
    {
        label: "selfgoverment.akNiet",
        img: "selfgoverment/aknietlogo.png",
        leaderImg: "selfgoverment/aknietleader.jpg",
        number: "+7 7079053642",
        email: "zhb1gasova_",
    },
    {
        label: "selfgoverment.ask",
        img: "selfgoverment/asklogo.png",
        leaderImg: "selfgoverment/askleader.jpg",
        number: "+7 7781048727",
        email: "qsa_bokeikhan",
    },
    {
        label: "selfgoverment.everest",
        img: "selfgoverment/everestlogo.jpg",
        leaderImg: "selfgoverment/everestleader.jpg",
        number: "+7 700 000 0003",
        email: "everest@example.com",
    },
    {
        label: "selfgoverment.jastarRuhy",
        img: "selfgoverment/jastarlogog.jpg",
        leaderImg: "selfgoverment/jastarleader.jpg",
        number: "+7 700 000 0004",
        email: "jastar@example.com",
    },
    {
        label: "selfgoverment.jaidarman",
        img: "selfgoverment/jaidamanlogo.jpg",
        leaderImg: "selfgoverment/jaidamanleader.jpg",
        number: "+7 700 000 0005",
        email: "jaidarman@example.com",
    },
    {
        label: "selfgoverment.lawyers",
        img: "selfgoverment/lawyerslogo.jpg",
        leaderImg: "",
        number: "+7 700 000 0006",
        email: "lawyers@example.com",
    },
    {
        label: "selfgoverment.urker",
        img: "selfgoverment/urkerlogo.png",
        leaderImg: "selfgoverment/urkerleader.jpg",
        number: "+7 700 000 0007",
        email: "urker@example.com",
    },
    {
        label: "selfgoverment.enactus",
        img: "selfgoverment/enactuslogo.png",
        leaderImg: "selfgoverment/enactusleader.jpg",
        number: "+7 700 000 0008",
        email: "enactus@example.com",
    },
];




export const SelfGovernmentPage = () => {
    return <section className="container">
        <h1 className="title"><FormattedMessage id="selfgoverment.title" /></h1>
        <h2 className="text-xl lg:text-2xl text-center"><FormattedMessage id="selfgoverment.subtitle" /></h2>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {selfgovermentList.map(s => <GovermentItem goverment={s} key={s.label} />)}
        </section>
    </section>
}


const GovermentItem = ({ goverment: s }) => {
    const { formatMessage } = useIntl()
    return <Drawer >
        <DrawerTrigger className="text-center cursor-pointer flex-col shadow-xl gap-4 flex rounded-lg p-5 border border-border">
            <object data={fileUrl + s.img} type={`image/${s.img.split('.')[1]}`} className="w-30 rounded-lg mx-auto aspect-square">
                <img src={imgFallback} className="rounded-lg mx-auto aspect-square" alt={s.label} />
            </object>
            <h4 className="font-bold"><FormattedMessage id={s.label} /></h4>
        </DrawerTrigger>
        <DrawerContent className={'min-h-[95%] '}>
            <DrawerHeader>
                <DrawerTitle><FormattedMessage id={s.label} /></DrawerTitle>
                <DrawerDescription className={'invisible'}></DrawerDescription>
            </DrawerHeader>
            <section className="overflow-auto px-5 pb-10  flex flex-col gap-5">
                <section className="p-5 border border-border rounded-lg mb-5 flex gap-10 shadow-xl flex-col md:flex-row">
                    <object data={fileUrl + s.leaderImg} type={`image/${s.img.split('.')[1]}`} className="aspect-[3/4] rounded-lg max-h-96">
                        <img src={imgFallback} className="aspect-[3/4]  w-full max-h-96 rounded-lg" alt={s.label} />
                    </object>
                    <section className="flex text-lg gap-5 flex-col justify-center">
                        <h3 className="text-xl font-bold"><FormattedMessage id="selfgoverment.leader" /></h3>
                        <h4><FormattedMessage id={s.label + '.leader'} /></h4>
                        <a className="flex gap-2" href={`tel:${s.number}`}><PhoneIcon /> {s.number}</a>
                        <a className="flex gap-2" href={`mailto:${s.email}`}><Mail />{s.email}</a>
                    </section>


                </section>
                <section className=" py-5 px-3 lg:pl-10 border border-border shadow-xl rounded-lg ">

                    <p className="text-lg" dangerouslySetInnerHTML={{ __html: formatMessage({ id: s.label + '.content' }) }}></p>

                    <p className="text-lg break-words" dangerouslySetInnerHTML={{ __html: formatMessage({ id: s.label + '.connect', defaultMessage: " " }) }}></p>
                </section>

                <section className="grid md:grid-cols-2 gap-5 lg:grid-cols-3 ">
                    <FileCard name={"selfgoverment.plan"} link={s.label.replace('.', '/') + "plan.pdf"} />
                    <FileCard name={"selfgoverment.studentlist"} link={s.label.replace('.', '/') + "list.pdf"} />
                    <FileCard name={"selfgoverment.report"} link={s.label.replace('.', '/') + "report.pdf"} />
                </section>

            </section>
        </DrawerContent>
    </Drawer>
}
