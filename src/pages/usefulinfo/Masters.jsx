import { useLocale } from "@/shared/context/locale"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { FileCard } from "@/shared/ui/file-card"
import { ArrowRight, FileIcon } from "lucide-react"
import { FormattedMessage } from "react-intl"

const CardMenuCustom = ({ trigger, documents }) => {
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
                {documents.map(c =>
                    <section>
                        <h3 className="text-xl text-primary">{c.year}</h3>
                        {c.documents[locale].map(d => <a key={d.url} className="grid grid-cols-[auto_1fr] items-center gap-4" target="_blank" href={d.url}><FileIcon /> {d.title}</a>)}
                    </section>
                )}
            </section>
        </DialogContent>
    </Dialog>

}

export const MastersPage = () => {
    return <section className="container">
        <h1 className="title"><FormattedMessage id="usefulinfo.magister.title" /></h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <FileCard link={"https://abu.edu.kz/uploads/4/70/616/753b01b476968b7b3dc2b7912d019c65.pdf"} name={'usefulinfo.magister.rules'} />
            <FileCard link={"https://abu.edu.kz/uploads/4/70/616/b60a68c1437adc4a757b6139ca493ce0.pdf"} name={'usefulinfo.magister.25'} />
            <FileCard link={"https://abu.edu.kz/uploads/4/70/616/3bed0a9c6515e2eb2e7ab708e0580f75.pdf"} name={'usefulinfo.magister.24'} />
        </section>
        <h2 className="title"><FormattedMessage id="usefulinfo.magister.programms" /> </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.map(d => <CardMenuCustom trigger={d.name} documents={d.children} />)}
        </section>

        <h2 className="title"><FormattedMessage id="usefulinfo.magister.friends" /> </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data2.map(d => <CardMenuCustom trigger={d.name} documents={d.children} />)}
        </section>
    </section>
}

const data = [
    {
        name: "usefulinfo.magister.history",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [{
                        "title": "Каталог элективных дисциплин 7М01602 История",
                        "url": "https://abu.edu.kz/uploads/4/70/580/6e08f7bde328655f1b45d5df05a6e33c.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа 7М01602 История",
                        "url": "https://abu.edu.kz/uploads/4/70/580/c50b6abade3f002640a5d9c38294974d.pdf"
                    },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М01602 Тарих",
                            "url": "https://abu.edu.kz/uploads/4/70/580/272143de0fedf5a27005b489c2079b08.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М01602 Тарих",
                            "url": "https://abu.edu.kz/uploads/4/70/580/b2bb4cf291f1bbfd635d2a89d76a1772.pdf"
                        },

                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7М01602 History",
                            "url": "https://abu.edu.kz/uploads/4/70/580/f1f2f72ba0884325509d08b94aab4f79.pdf"
                        },
                        {
                            "title": "Modular educational program 7М01602 History",
                            "url": "https://abu.edu.kz/uploads/4/70/580/872379f1fcd21c5f153f936a8a950664.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7М01602 История",
                            "url": "https://abu.edu.kz/uploads/4/70/582/dc74070780bbe9f253043ba43eaea639.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М01602 История",
                            "url": "https://abu.edu.kz/uploads/4/70/582/bdbbc03e71011fb166f14b55411e0900.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М01602 Тарих",
                            "url": "https://abu.edu.kz/uploads/4/70/582/8b5b9da15036e7f7aaf115ed998e50b0.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М01602 Тарих",
                            "url": "https://abu.edu.kz/uploads/4/70/582/74bdabdfc204a8f5499dec8a133998bf.pdf"
                        },

                    ],
                    en: [
                        {
                            "title": "Modular educational program 7М01602 History",
                            "url": "https://abu.edu.kz/uploads/4/70/582/5f5a0a5ddb6cbf4dc4db92e7d57b31fd.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М01602 History",
                            "url": "https://abu.edu.kz/uploads/4/70/582/1b49bb1ec3c30fae3cfbb244cbe19ade.pdf"
                        },
                    ]
                }
            }

        ]
    },
    {
        name: "usefulinfo.magister.jurisprudence",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М04219 - Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/4/70/369/a8b3ac3e7134d02afc47efaacd8ccf33.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04219 - Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/4/70/369/9cf3b389764b77bd654d769d0a6e8daf.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М04219 - Құқықтану",
                            "url": "https://abu.edu.kz/uploads/4/70/369/afcc4ea7b4cb72942560dc4a1e8e8274.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04219 - Құқықтану",
                            "url": "https://abu.edu.kz/uploads/4/70/369/b4be7e1f9431520cd8446f6121a2da31.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7М04219 - Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/4/70/369/478397f17329bc9db79ead0dae1491f1.pdf"
                        },
                        {
                            "title": "Modular educational program 7М04219 - Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/4/70/369/00e3a0bf483179b5b5122f27fc252911.pdf"
                        },

                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7М04219 - Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/4/70/370/ccd5ef9ab782244d2276fa50a38ded62.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М04219 - Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/4/70/370/0540a981d785a31ec08c2aa741f28b85.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04219 - Құқықтану",
                            "url": "https://abu.edu.kz/uploads/4/70/370/cf464e6663617743d7a803e4906e9146.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М04219 - Құқықтану",
                            "url": "https://abu.edu.kz/uploads/4/70/370/60143672e7c592dbe3560443e463c2e3.pdf"
                        },

                    ],
                    en: [
                        {
                            "title": "Modular educational program 7М04219 - Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/4/70/370/17c5dacd541a684b76f5762155e0b598.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М04219 - Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/4/70/370/041c880c1f7d226d18536624d00e9863.pdf"
                        },
                    ]
                }
            }

        ]
    }, {
        name: "usefulinfo.magister.informatics",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М06110-Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/372/1bb9c23b0e4b6e685959e11dacbc4c5e.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М06110 Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/372/ba108273bbe1af25e420d27ec41e0109.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М06110-Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/372/c9e0a3eeba1fc2249e7d55cb0fc43df9.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М06110 Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/372/2f7e567e16b07d93f2b8c535b8b5bcab.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7М061-Informatics",
                            "url": "https://abu.edu.kz/uploads/4/70/372/adf30628499293c64292130dfa0b14d5.pdf"
                        },
                        {
                            "title": "Modular educational program 7М06110-Informatics",
                            "url": "https://abu.edu.kz/uploads/4/70/372/be2b4c709bbd4ddacb1187613372947e.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7М06110 Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/373/117be9078e8fc5ca6008eafc736bd422.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М06110-Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/373/cf8e2feb2b2afa5f0f750a849751d86d.pdf"
                        }
                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М06110 Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/373/a03dca1503276d6bc813522c594e14b0.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М06110-Информатика",
                            "url": "https://abu.edu.kz/uploads/4/70/373/7081b63c00cbd5ee5896a8ab6dcddaf4.pdf"
                        },

                    ],
                    en: [
                        {
                            "title": "Modular educational program 7М06110-Informatics",
                            "url": "https://abu.edu.kz/uploads/4/70/373/424f5be79fb34fc2347a7503e9bb0a1c.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М061-Informatics",
                            "url": "https://abu.edu.kz/uploads/4/70/373/fbae15acc0873e307457064a54745468.pdf"
                        },
                    ]
                }
            }

        ]
    }, {
        name: "usefulinfo.magister.business_administration",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М04107 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/375/2bd194422e47dd72f11defef365809a2.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М04117 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/375/247c3d4700187401bfc4329bf6e2c046.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04107 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/375/60de8d151de926736251873798397d45.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04117 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/375/bb01438c89ea48943b3c00fed3f97d3e.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М04107 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/375/ac5a94293d588a7dbd19683054ad4410.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М04117 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/375/fa6dd50f734d4814106d203deaf34d4c.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04107 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/375/de109c0d69004b8032544c50aaa4d727.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04117 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/375/e55ed1e2c6931844a53836b646225fba.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7M04107 Business administration",
                            "url": "https://abu.edu.kz/uploads/4/70/375/fa33d22eb1c4da97f9f8cfea3982db62.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7M04117 Business administration",
                            "url": "https://abu.edu.kz/uploads/4/70/375/a373f78b0449d0c1a8350644fb16cabd.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04107 Business Administration",
                            "url": "https://abu.edu.kz/uploads/4/70/375/82803395ea9f76b3f0a1ff554525b6d9.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04117 Business Administration",
                            "url": "https://abu.edu.kz/uploads/4/70/375/629903f60c5591be7b5daafb1f8be9b7.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М04107 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/376/76ce78319379c3b8074b9433f2e8b7a8.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04117 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/376/1230047dd96d3b27d876f5f00dc2e4c8.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М04117 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/376/b0191481ea3b74b913f387ab1fc35e1a.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04107 Деловое администрирование",
                            "url": "https://abu.edu.kz/uploads/4/70/376/d35e86198b9fb940060b532d5ca1994c.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М04107 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/376/ca726d3d48eb5e3da575a5262b56744e.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04117 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/376/7d6f9356c91d9642d5b08596da4fc7d0.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М04117 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/376/ca4270887e2b5bc2ed35be393d9c7a66.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04107 іскерлік әкімшілік",
                            "url": "https://abu.edu.kz/uploads/4/70/376/72ae95ad54b9e8bdea57dfddf38e7885.pdf"
                        },

                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7M04107 Business administration",
                            "url": "https://abu.edu.kz/uploads/4/70/376/ebd1a5774384f683e3f09ee31726284e.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04117 Business Administration",
                            "url": "https://abu.edu.kz/uploads/4/70/376/4c093f4035759e34ac3e1116a5c9ec04.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7M04117 Business administration",
                            "url": "https://abu.edu.kz/uploads/4/70/376/393892297e9056e8d3e6df2ff78984a4.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04107 Business Administration",
                            "url": "https://abu.edu.kz/uploads/4/70/376/6be22b0a8e6d06be8d3dfb71ab2ced79.pdf"
                        },
                    ]
                }
            }

        ]
    }, {
        name: "usefulinfo.magister.legal_issues",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М04208-Актуальные проблемы права",
                            "url": "https://abu.edu.kz/uploads/4/70/381/f7a30b98c9ccabd8953ae120bfc22ecf.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04208-Актуальные проблемы права",
                            "url": "https://abu.edu.kz/uploads/4/70/381/0788495fe62d2d0603bf8cfdfa1c6776.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М04208-Құқықтың өзекті мәселелері",
                            "url": "https://abu.edu.kz/uploads/4/70/381/e69d74dd2c916b7a1be139fa9316834f.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04208-Құқықтың өзекті мәселелері",
                            "url": "https://abu.edu.kz/uploads/4/70/381/4c1d1d9eba754c271facf5ef769e1114.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7М04208-Actual problems of law",
                            "url": "https://abu.edu.kz/uploads/4/70/381/a0ed9553f32b3ddc00d58fd810258d69.pdf"
                        },
                        {
                            "title": "Modular educational program 7М04208-Actual problems of law",
                            "url": "https://abu.edu.kz/uploads/4/70/381/30df5f208472a507e744afa5d6c04317.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7М04208-Актуальные проблемы права",
                            "url": "https://abu.edu.kz/uploads/4/70/591/21b597ab3218a572e6a0d956cc29ba56.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04219 - Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/4/70/591/f73c2467b43e02d93fd13e1ddd781111.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М04208 Актуальные проблемы права",
                            "url": "https://abu.edu.kz/uploads/4/70/591/a1d950624872a8fcd94034371243aaa6.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М04219 Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/4/70/591/1de509584293a76278677d2d85a80ee8.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04208-Құқықтың өзекті мәселелері",
                            "url": "https://abu.edu.kz/uploads/4/70/591/c691d84e0ceb3b464535874b7aa1c4b2.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04219 – ҚҰҚЫҚТАНУ",
                            "url": "https://abu.edu.kz/uploads/4/70/591/24d6b952d3f06177554db037ddd0d24e.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М04208 - Құқықтың өзекті мәселелері",
                            "url": "https://abu.edu.kz/uploads/4/70/591/62447b6cd88daea5994330ac40562ea5.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М04219 - Құқықтану",
                            "url": "https://abu.edu.kz/uploads/4/70/591/f1390eb10ebee16e9553c330fb282e2f.pdf"
                        },

                    ],
                    en: [
                        {
                            "title": "MODULAR EDUCATIONAL PROGRAM 7М04208-Actual problems of law",
                            "url": "https://abu.edu.kz/uploads/4/70/591/0a7a8a9287690fa2c8af31ef6ffd4b80.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04219 - Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/4/70/591/54988a059827526cea01dfdb968b2141.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М04208 – Actual problems of law",
                            "url": "https://abu.edu.kz/uploads/4/70/591/1a24e11eacb377e04e46dc4e7b77e8d2.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М04219 Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/4/70/591/eee000eba1d1583c3ec379ce210a637b.pdf"
                        },
                    ]
                }
            }

        ]
    }, {
        name: "usefulinfo.magister.pedagogy_psychology",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М01101 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/c15e20f9e61e764b92719df9567d1f18.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М01111 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/1037f2e912e5beca294c0a24b284bb67.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М01101 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/dedc7aa0000cd47603a12006f9ffc918.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М01111 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/043d6e367e8161bdb8d4fedebf5f1d43.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М01101 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/46459fbfbc9aaf62700ba7a954057c56.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М01111 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/d9cd9ed432e181a95a0babd52e4198b6.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М01101 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/296c3df89e13b2ea8f119c9948353494.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М01111 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/683/bbab6f0bc8f542d276670a6558c294a9.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7М01101 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/683/147c47aca7af8ebd74086b0f6c2038af.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М01111 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/683/f073367fba0ec858d752cc5d68af21ae.pdf"
                        },
                        {
                            "title": "Modular educational program 7М01101 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/683/b0641a664df39994c5e2c6449c54b845.pdf"
                        },
                        {
                            "title": "Modular educational program 7М01111 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/683/41729ae2a53e2d1881725c7702c79bf1.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7М01111 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/584/516faf0330841d1ae98a13f68fc471ba.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М01101 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/584/7af130deb5543c64d05fec813b6e03c9.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М01101 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/4/70/584/48e88d48f48a3109ab3fc4cdc9d50b01.pdf"
                        },
                    ],

                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М01111 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/584/8450fed2b3239c45acba5c2555544659.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М01101 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/584/6f0a9788093db4bda55dfbc671a17003.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М01101 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/4/70/584/9a81bb75a14ef5b6e8516209ffad3b3f.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Modular educational program 7М01111 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/584/a2319bdfa3d8685f959cd3e07b0bd66d.pdf"
                        },
                        {
                            "title": "Modular educational program 7М01101 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/584/d35b153ac7d87adc7232859400e9d33d.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7М01101 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/4/70/584/32cfc46bc5d2a190d603934aef01ccff.pdf"
                        },
                    ]
                }
            }

        ]
    },
    {
        name: "usefulinfo.magister.philology",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7М02305 «Филология»",
                            "url": "https://abu.edu.kz/uploads/4/70/586/5877f8f42a799b9793026d902c3f7edd.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М02305 Филология",
                            "url": "https://abu.edu.kz/uploads/4/70/586/c6abd3d3c713af11b95644cdad7d3266.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7М02305 Филология",
                            "url": "https://abu.edu.kz/uploads/4/70/586/8522cf239f24948beba39a28c4f2c1ac.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М02305 Филология",
                            "url": "https://abu.edu.kz/uploads/4/70/586/6b0a95187ae640cd775a85b228c9b1ed.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines 7М02305 Philology",
                            "url": "https://abu.edu.kz/uploads/4/70/586/3f11e9fa0459f647aedc534e51e8f9ad.pdf"
                        },
                        {
                            "title": "Modular educational program 7M02305 Philology",
                            "url": "https://abu.edu.kz/uploads/4/70/586/c69a689af1b03924c4945482a8b9f037.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7М02305 «Филология»",
                            "url": "https://abu.edu.kz/uploads/4/70/587/df7589fc2d5cf584be54b7b00057a044.pdf"
                        },

                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М02305 «Филология»",
                            "url": "https://abu.edu.kz/uploads/4/70/587/31bbdfaab8e3b992ad82049c38c5bc20.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Modular educational program 7M02305 «Philology»",
                            "url": "https://abu.edu.kz/uploads/4/70/587/e327269b233cb94f8418e6b351febaa3.pdf"
                        },
                    ]
                }
            }

        ]
    },
    {
        name: "usefulinfo.magister.economics",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7M04105- Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/d63a3cc25db37ed6224d83d9f8fac1e4.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04105 - Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/e183e947ee83b2937ff33b24a36ef6f3.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7М04115 Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/b45dc78a704bc18aafc47fb2259fb78f.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7M04115 Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/bda47d1b2883d24b66a30e034f76a169.pdf"
                        },
                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7M04105 -Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/cad3d72a3002786f0f663e277af8b1a1.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04105 - Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/a608b72e19b881a61aa0037497211d8a.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7М04115 Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/12c226b6a76052987bf3ce71faa4840f.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7M04115 Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/589/b4755fc6509eaf2593a86938ae53b15c.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines- 7M04105- Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/589/f50bbee3b6e0941909746de53e4a18be.pdf"
                        },
                        {
                            "title": "Modular educational program 7М04105 - Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/589/a78f7938a203f175cd7f67c6e8e30f2b.pdf"
                        },
                        {
                            "title": "Сatalog of elective disciplines 7M04115 Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/589/dd68bc8447d7f45e83412139e48c16ff.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04115 Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/589/9c6f19257daca53ba5580235b9d7d9d6.pdf"
                        },
                    ]
                }
            },
            {
                year: "2023-2024",
                documents: {
                    ru: [
                        {
                            "title": "Каталог элективных дисциплин 7M04105- Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/fafc1fd73345d12eb8d22ef4da3da2d0.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04115 - Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/7248722bc8a2314c06a076150aaacdba.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7M04115- Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/f66acbb3d7479b0ec12f58041dd485ea.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7М04105 - Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/f7f7f1354a0e3420cb655e4860fe8b85.pdf"
                        },

                    ],
                    kz: [
                        {
                            "title": "Элективті пәндер каталогы 7M04105 -Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/52007775ecdf848bdcd3f353c8e84c84.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04115 - Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/c5a9e50a3d90896e36f3338cc6c1633a.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7M04115 -Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/6aa88f0067fad6623b5c9328e9d7110e.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7М04105 - Экономика",
                            "url": "https://abu.edu.kz/uploads/4/70/590/1303e4b67d6816b95f14d63be1194646.pdf"
                        },
                    ],
                    en: [
                        {
                            "title": "Catalog of elective disciplines- 7M04105- Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/590/ef2fd5a3a5d1c941ad3c4b76db1696b8.pdf"
                        },
                        {
                            "title": "Modular educational program 7М04115 - Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/590/937445d1ee5f1de2c3a2d4ae2ac9ec89.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines- 7M04115- Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/590/29f0ab5a600712ad8111d6e1af0e6f5d.pdf"
                        },
                        {
                            "title": "Modular educational program 7М04105 - Economics",
                            "url": "https://abu.edu.kz/uploads/4/70/590/e3bd9c62297bcb2989970d8860dcf736.pdf"
                        },
                    ]
                }
            }

        ]
    }
]

const data2 = [
    {
        name: "MBA",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7M04108 Деловое администрирование (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/4fd265d0bbc2cb809763b446828d5051.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7M04108 Деловое администрирование (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/66e3bb594e230872974fc524489fb633.pdf"

                        },
                        {
                            "title": "Академический календарь MBA-2 года",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/e47f1496a11cf0c46af0fd711ede219f.pdf"
                        },
                        {
                            "title": "Расписание экзаменов 1 курс МВА 1,2,3 модуль 1 сем 24-25",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/602986bf2a06de5a276936d1050f7997.pdf"
                        },


                        {
                            "title": "Каталог элективных дисциплин 7M04108 Деловое администрирование (МВА)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/8497ca72251d7c48f979f3e88170cdd0.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7M04108 Деловое администрирование (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/739a71cb3f0562c241b95851cb481680.pdf"
                        }

                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7M04108 Іскерлік әкімшілік (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/9b9f8ab2521be43b20a6c09d86f61a33.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7M04108 Іскерлік әкімшілік (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/ecae89ce889967bee56a93877609a559.pdf"
                        },
                        {
                            "title": "MBA академиялық күнтізбесі-2 жыл",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/45f3f0d9bfe3ebb815017e5e659aabc8.pdf"
                        },
                        {
                            "title": "Емтихан кестесі 1 курс МВА 1,2,3 модуль 1 сем 24-25",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/77a758415130ff22f2da8c7f038cf474.pdf"
                        },
                        {
                            "title": "Элективті пәндер каталогы 7M04108 іскери әкімшілік (МВА)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/8c98e969019e032c9c23d91022c3e276.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7M04108 іскери әкімшілік (МВА)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/961a01e875110bddfb32a542c3785978.pdf"
                        }

                    ],
                    en: [
                        {
                            "title": "Modular educational program 7M04108 Business administration (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/fdfd34914c9b153c2a80244bfb03c6c3.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7M04108 Business administration (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/662c9fa306461e33366254837cefcabe.pdf"
                        },
                        {
                            "title": "MBA  Academic Calendar - 2 year",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/443ad7c6b400c08c0f653a72a22937aa.pdf"
                        },
                        {
                            "title": "Exam schedule 1st year MBA 1,2,3 module 1 sem 24-25",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/3675381d73f512bef41dabacefe77970.pdf"
                        },
                        {
                            "title": "Catalog of elective disciplines 7M04108 Business Administration (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/33e13ec920c0a5024e796e926151091b.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04108 Business administration (MBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/52a323c4a45b41c49a37342e65c2ba87.pdf"
                        }

                    ]
                }
            },
        ]
    },
    {
        name: "EMBA",
        children: [
            {
                year: "2024-2025",
                documents: {
                    ru: [
                        {
                            "title": "Модульная образовательная программа 7M04118 Деловое администрирование (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/1d78f3e5473928b16049c2ac1a371f26.pdf"
                        },

                        {
                            "title": "Каталог элективных дисциплин 7M04118 Деловое администрирование (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/7d6a85ec2f63e412e2401f2dda991336.pdf"
                        },
                        {
                            "title": "Академический календарь EMBA - 1 год",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/104d2b829f5b87322807c2e67f77ca8f.pdf"
                        },
                        {
                            "title": "Расписание экзаменов 1 курс ЕМВА 1,2,3 модуль 1 сем 24-25",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/83bfeb8492a4a23e4b9902890284b4c8.pdf"
                        },
                        {
                            "title": "Каталог элективных дисциплин 7M04118 Деловое администрирование (ЕМВА)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/a6f3517ba7639a7845380f1e8f8b89fb.pdf"
                        },
                        {
                            "title": "Модульная образовательная программа 7M04118 Деловое администрирование (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/d0b457efcf5ddd05069ce2beb4b72169.pdf"
                        },

                    ],
                    kz: [
                        {
                            "title": "Модульдік білім беру бағдарламасы 7M04118 Іскерлік әкімшілік (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/417d3e6977bdae2e3f1a6b3fc50e58ad.pdf"
                        },

                        {
                            "title": "Элективті пәндер каталогы 7M04118 Іскерлік әкімшілік (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/5aa0b0dcb4c0eb1176fb73c144b4d7d9.pdf"
                        },
                        {
                            "title": "EMBA академиялық күнтізбесі-1 жыл",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/48e02285604db64475a55fecf2c1bc88.pdf"
                        },

                        {
                            "title": "Емтихан кестесі 1 курс ЕМВА 1,2,3 модуль 1 сем 24-25",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/e61d57ec1038e298582d51f635385a5c.pdf"
                        },

                        {
                            "title": "Элективті пәндер каталогы 7M04118 іскери әкімшілік (ЕМВА)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/8b551dca1f87b24631ded3e944163c8e.pdf"
                        },
                        {
                            "title": "Модульдік білім беру бағдарламасы 7M04118 іскери әкімшілік (ЕМВА)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/3495b7454168cf96d7a3de5fcccb748c.pdf"
                        }
                    ],
                    en: [
                        {
                            "title": "Modular educational program 7M04118 Business administration (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/16d749d27dba1600ed0aa154a097b4bd.pdf"
                        },

                        {
                            "title": "Catalog of elective disciplines 7M04118 Business administration (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/681/22ae2809d4bb7143fe1f49ec4e231788.pdf"
                        },
                        {
                            "title": "EMBA Academic Calendar - 1 year",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/2f65f650d6026dfce6d94c2300d9d2da.pdf"
                        },

                        {
                            "title": "Exam schedule 1st year EMBA 1,2,3 module 1 sem 24-25",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/ed96464a54502b64ed5c6cbd4265fb51.pdf"
                        },

                        {
                            "title": "Catalog of elective disciplines 7M04118 Business Administration (EMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/f1def13ae50668a5f5edfd65a342e15f.pdf"
                        },
                        {
                            "title": "Modular educational program 7M04118 Business administration (ЕMBA)",
                            "url": "https://abu.edu.kz/uploads/4/70/1035/01a027ed73a33eb2463891e439ebe152.pdf"
                        }
                    ]
                }
            },
        ]
    }
]



