import { useLocale } from "@/shared/context/locale"
import { ArrowRight, FileIcon } from "lucide-react"
import { FormattedMessage } from "react-intl"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/ui/dialog"
import { FileCard } from "@/shared/ui/file-card"
const CardMenuCustom = ({ trigger, documents }) => {
    return <Dialog>
        <DialogTrigger>
            <section className="border p-5 rounded-lg min-h-52 flex  flex-col justify-between shadow-xl">
                <h3 className="text-xl md:text-2xl line-clamp-4">{trigger}</h3>

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
                        {c.documents.map(d => <a key={d.url} className="grid grid-cols-[auto_1fr] items-center gap-4" target="_blank" href={d.url}><FileIcon /> {d.title}</a>)}
                    </section>
                )}
            </section>
        </DialogContent>
    </Dialog>

}
export const PhdPage = () => {
    const { locale } = useLocale()
    return <section className="container">
        <h1 className="title"><FormattedMessage id="usefulinfo.phd.title" /></h1>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <FileCard name={"usefulinfo.phd.25"} link={"https://abu.edu.kz/uploads/4/71/682/42df4a1ff6a268fca40146d7b547ad33.pdf"} />
            <FileCard name={"usefulinfo.phd.25winter"} link={"https://abu.edu.kz/uploads/4/71/682/2d39ae721a959d3848ee4e6c59dba75a.pdf"} />

        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data[locale].map(d => <CardMenuCustom key={d.name} trigger={d.name} documents={d.children} />)}
        </section>
    </section>
}



const data_ru = [
    {
        "name": "ИНФОРМАТИКА",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/398/d0afbeeca7b8176be3f8c42b54354af7.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/398/44bc06b960e74b39569b5447517060d9.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/384/dec336eb35820ff554386a2e2fc4780d.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/384/2c2880c65bf9d5a3919bc199ff889e22.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/894/914e27b57e4349c909e7a5429fd4e67b.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/894/265cba9ab5d9f42351380a3c2b184fab.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "СОВРЕМЕННЫЕ ТЕНДЕНЦИИ РАЗВИТИЯ КАЗАХСТАНСКОГО ПРАВА",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/392/f177b42f7d2c22ab8ff50cecc5947998.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/392/82eaa701610f1e2a4b1ed22651bf2ffe.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/389/77207e2914d5c78207e8bfb14bfe0b7f.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/389/17487721d71bacb8da6b6b0d16894b7e.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/390/0779086adfc9927f786e6d549e57b41a.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/390/b77820a7ce75347caf40f833ad82a55f.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ПЕДАГОГИКА И ПСИХОЛОГИЯ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/397/76932e40e4c4192892234b1381435733.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/397/010e1c8eed0712761484871ae11cf378.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/395/409844ae4250ed5ad9a3dc7bfd803a00.pdf"
                    },
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/395/1fd5b2a3d6acdb938a03f60514c819ff.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/394/0ab5aeb8eba273c40fd7c71b1db488bf.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/394/8f4a5e23ac6e1c9be491df99318f2134.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ИСТОРИЯ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/400/c24b041c08e0ea263c97eb5cdf8faf8d.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/400/93a1329a53ac6a2ef0f5127267358e2d.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/679/3b0b3fe6f7278695fecad2042e2e7cc8.pdf"
                    },
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/679/56dc67abd113ff31232c43f08b97a3d8.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/401/3fc54d1f8c34ba63226f96e5807eeb67.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/401/c64aa6928d5c032a513c5c6c5c07cc73.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ФИЛОЛОГИЯ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/404/6b2137b6bac6ed2c52819b5887de8d38.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/404/baada8da0d40bd4d3172eef1a1437eda.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/405/0527e758c6d20b104d6d9034e609af03.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/405/db3ffcb6f94e247bcdc8d85157f185fd.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/678/622b64f936882ebce4e776e11e0e2ecb.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ЭКОНОМИКА",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/408/9b8f595a8562e4930cd6bb3a546442b9.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/408/aa8f30f276f80002eb0135eebe469940.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/409/62cd13af07d9944567f110f416f2446f.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/409/5abca9ee9678197173133aa672817a5c.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Каталог элективных дисциплин",
                        "url": "https://abu.edu.kz/uploads/4/71/385/40c1bd873788a19d38aaadc099249e59.pdf"
                    },
                    {
                        "title": "Модульная образовательная программа",
                        "url": "https://abu.edu.kz/uploads/4/71/385/21392608170a3a0284141ca33cee680d.pdf"
                    }
                ]
            }
        ]
    }
]
const data_kz = [
    {
        "name": "ИНФОРМАТИКА",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/398/0adb473019d21b7ba96710ccf4dd2653.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/398/52bf025e1480eb5bb4c3636d2d5dc5f9.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/384/5f51f69894f8a2600716f3340d6f9c4f.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/384/19be8eb56192b6f5ed910e6e4242adee.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/894/f9454c40048b86dd652cbff1ee9f9ccf.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/894/8fe70ea21fe50625711eda892681b9c6.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ҚАЗАҚСТАНДЫҚ ҚҰҚЫҚТЫҢ ЗАМАНАУИ ТЕНДЕНЦИЯЛАРЫ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/392/91a3f7c4d838fe76a5c7355eb4cc9423.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/392/d2d49dab0fc391c916c0524e0ee174a1.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/389/cbb2c034a7392b5082ae4488d45117ca.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/389/1b15d2570e3971c6bb3e9ec292007791.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/390/2fac0cb8b8f51c13b96002861c4ba43a.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/390/0cd3a70965220ebcee892318a278bcb4.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ПЕДАГОГИКА ЖӘНЕ ПСИХОЛОГИЯ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/397/ca6d887ddca302cc6df7a75bd328420e.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/397/41d0d36ad8f8b931580ccf79b63d7cfa.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/395/0a8f8c96e401a62cc48a8a05121f12df.pdf"
                    },
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/395/bde46699db3620157969558f570beb4e.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/394/9e0d4677d32dadaa5d1b68b1328b1661.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/394/04d00426b2c88e18dc0fe1cb4d0be442.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ТАРИХ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/400/475350192fe3616f71a6680e4463638a.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/400/3f97ee4a16135e87003d5762d577af02.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/679/111324eb8a91ae4a0194609c4b92d7cb.pdf"
                    },
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/679/5b442f37dec7ca8578ad50ecc822379a.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/401/7c6d2b91ba1c590177e0df799e252a9a.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/401/a34a6e64c2d1d47d762cb3030880b161.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ФИЛОЛОГИЯ",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/404/a3c7dc3a54dc37d436ae2944469997dc.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/404/f598675210942d5bbfcd92a16dd1ac55.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/405/f0a6a09a6eda2ecbe5b54515c508d784.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/405/4dafb7b822d8df8b80cb9cf2b4616f9f.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/678/a763d995319fe75c287968b578863966.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ЭКОНОМИКА",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/408/885de47b89a258523578a2c3d6bd28e1.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/408/bf71e409bb8b2f6c3e6891c2efb39a89.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/409/a87f35bdf6b5b35675e4953593b4b595.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/409/f27842e055305e320f78534230a0b22e.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Элективті пәндер каталогы",
                        "url": "https://abu.edu.kz/uploads/4/71/385/ef3d9f355fb52d7a918a11a768900df4.pdf"
                    },
                    {
                        "title": "Модульдік білім беру бағдарламасы",
                        "url": "https://abu.edu.kz/uploads/4/71/385/bf484c6af081c75dd74286703971892a.pdf"
                    }
                ]
            }
        ]
    }
]
const data_en = [
    {
        "name": "COMPUTER SCIENCE",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/398/d4bcc6387ba790880c55500fc1173830.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/398/2b8b50fcf1521c20f12340ad5d5b5ca8.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/384/0c117b03fa1836dbb3d29a0d70874b6b.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/384/bb0ad95294787b4a2aa616301bb98773.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/894/e23b60812e9f92e054d44c26a34c4e19.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/894/adcc41bbfb24a353ab05187e7a782493.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "MODERN TRENDS IN THE DEVELOPMENT OF KAZAKH LAW",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/392/447227d62abc1496fdc24450600a9c53.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/392/bb71f8dbd6a22c753cbac8b662145b0c.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/389/b1a434510b5f55db9b8fd57a06cd619c.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/389/86ddf07cdcac94668d96362c20c522b3.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/390/77ad9e2e3c81ada5c2ba9c7dc9cefd29.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/390/1b555e0b37fbb34b2c4b27d197967d56.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "PEDAGOGY AND PSYCHOLOGY",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/397/ff8d1788a687ccdebe60105dda242452.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/397/f43837962215932a160812db72de03c6.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/395/803036a587a03879080a6e08593be34b.pdf"
                    },
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/395/0d9217c4d775441361c0ade01a4fadc8.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/394/9f609bef092b616422951bbc076d9eb2.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/394/81328313977822f8c0ad8a939a4b7e24.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "HISTORY",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/400/81c67068bdb61b578adefd8336a88f66.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/400/fc2188d223fbbeb79c9c43c6e01224c1.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/679/e400b6edc3bd5aefa23c0b238f57bb59.pdf"
                    },
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/679/e1eb3dfaa5b7cf03f2ba763149708e06.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/401/7359f4f95571600538f2f5daf3249ba9.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/401/b8c42e676b095eb4db11e177d168c05e.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "PHILOLOGY",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/404/30f58bfd4c250edc222ef43754135083.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/404/8df00dfeb5756d65b1198233cd6ea055.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/405/9e38ca002f883dc076452254cdd8ee1c.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/405/2f1eb6d6c85cbb4704281d7bdee62537.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/678/fbe90730a866f7de496a47b43db652cd.pdf"
                    }
                ]
            }
        ]
    },
    {
        "name": "ECONOMY",
        "children": [
            {
                "year": "2024-2025",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/408/5cb8a701759d7ade6eb4ff464134e8ab.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/408/078e1a5b41c0c35787096d9c859037da.pdf"
                    }
                ]
            },
            {
                "year": "2022-2023",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/409/dcb56ac69a90900b51130551df61b357.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/409/ea72c413537a2a7504d13a22ec110098.pdf"
                    }
                ]
            },
            {
                "year": "2023-2024",
                "documents": [
                    {
                        "title": "Catalog of elective disciplines",
                        "url": "https://abu.edu.kz/uploads/4/71/385/37062a0eb383a4d533c465fee8716daa.pdf"
                    },
                    {
                        "title": "Modular educational program",
                        "url": "https://abu.edu.kz/uploads/4/71/385/fc0006f5543155fde5ac96a061c58a05.pdf"
                    }
                ]
            }
        ]
    }
]
const data = {
    ru: data_ru, kz: data_kz, en: data_en
}
