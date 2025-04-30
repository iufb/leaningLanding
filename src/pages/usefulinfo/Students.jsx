import { useLocale } from "@/shared/context/locale";
import { CardMenu } from "@/shared/ui/card-menu";
import { FileCard } from "@/shared/ui/file-card";
import { Separator } from "@/shared/ui/separator";
import { FormattedMessage } from "react-intl";




export const UsefulInfoStudentsPage = () => {
    const { locale } = useLocale()
    return <section className="container">
        <h1 className="title"><FormattedMessage id="usefulinfo.students.title" /></h1>
        <section className="grid grid-cols-1 md:grid-cols-2  gap-5">
            <FileCard name={"home.guidebook"} link={"https://abu.edu.kz/uploads/68/389/615/fe7782822475c9da131d4e76b1100096.pdf"} />
            <FileCard name={"usefulinfo.students.recommendations"} link={"https://abu.edu.kz/uploads/68/389/615/fe7782822475c9da131d4e76b1100096.pdf"} />
        </section>

        <h2 className="title"><FormattedMessage id="usefulinfo.students.electiveTitle" /></h2>
        {data.map(v => <section key={v.year}>
            <h2 className="text-primary text-2xl mb-4 font-bold">{v.year}</h2>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {v.children.map((c, idx) =>
                    <CardMenu key={idx} trigger={c.faculty} documents={c.documents} />
                )}
                <Separator />
            </section>
        </section>)}
        <h2 className="title"><FormattedMessage id="usefulinfo.students.modTitle" /></h2>
        {data2.map(v => <section key={v.year}>
            <h2 className="text-primary text-2xl mb-4 font-bold">{v.year}</h2>
            <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {v.children.map((c, idx) =>
                    <CardMenu key={idx} trigger={c.faculty} documents={c.documents} />
                )}
                <Separator />
            </section>
        </section>)}


    </section>
}

const data2 = [
    {
        year: "2024-2025",
        children: [
            {
                faculty: "usefulinfo.students.faculty1",
                documents: {
                    ru: [
                        {
                            "title": "6В04221 Государственная служба и судебная система",
                            "url": "https://abu.edu.kz/uploads/68/274/317/ce41d0e2da4e9e6d2832eb76c2bc097b.pdf"
                        },
                        {
                            "title": "6В04222 Следственно-прокурорская деятельность",
                            "url": "https://abu.edu.kz/uploads/68/274/317/44140e9854a6439115dea3c4549f5384.pdf"
                        },
                        {
                            "title": "6В04220 Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/68/274/317/a5d6a4eb0a734fe700bda590396787f6.pdf"
                        },
                        {
                            "title": "6В12330 Правоохранительная деятельность",
                            "url": "https://abu.edu.kz/uploads/68/274/317/abb3776eccd464bd8651d860b588ffa4.pdf"
                        },


                    ], kz: [
                        {
                            "title": "6В04221 Мемлекеттік қызмет және сот жүйесі",
                            "url": "https://abu.edu.kz/uploads/68/274/317/04573084180dd4f4c64b13ea8c9ee2b8.pdf"
                        },
                        {
                            "title": "6В04222 Тергеу-прокурорлық қызмет",
                            "url": "https://abu.edu.kz/uploads/68/274/317/48aab749218a0f2a4ffa4db673aab43a.pdf"
                        },
                        {
                            "title": "6В04220 Құқықтану",
                            "url": "https://abu.edu.kz/uploads/68/274/317/cc810a36b4dbd08c400dc0c5e11a031c.pdf"
                        },
                        {
                            "title": "6В12330 Құқық қорғау қызметі",
                            "url": "https://abu.edu.kz/uploads/68/274/317/b7161a5fea3cf4243544f927b50571d6.pdf"
                        },

                    ], en: [
                        {
                            "title": "6В04221 Public service and judicial system",
                            "url": "https://abu.edu.kz/uploads/68/274/317/19141fe33e08734671c9452e4dda3758.pdf"
                        },
                        {
                            "title": "6В04222 Investigative and prosecutorial activities",
                            "url": "https://abu.edu.kz/uploads/68/274/317/c886d52283b78ea61a6e77e2e1ddcaad.pdf"
                        },
                        {
                            "title": "6В04220 Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/68/274/317/c5a71ba3977f2452300ddfd0314e9885.pdf"
                        },
                        {
                            "title": "6В12330 Law enforcement",
                            "url": "https://abu.edu.kz/uploads/68/274/317/0522cc96f05f54561ffe0fef93e96869.pdf"
                        },

                    ]
                }
            }, {
                faculty: "usefulinfo.students.faculty2",
                documents: {
                    ru: [
                        {
                            "title": "6B01403 Начальная военная подготовка",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/c9492d2f891df7826384c58dac661604.pdf"
                        },
                        {
                            "title": "6В01404 Физическая культура и спорт",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/6efe7901d8ec83f1f9abd7c69f84a1f3.pdf"
                        },
                        {
                            "title": "6В01509 Химия-Биология",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/5bf3348303230d0160583123cd263696.pdf"
                        },
                        {
                            "title": "6В04116 Экономика",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/665577e620b1834f161d07767a37dd4e.pdf"
                        },
                        {
                            "title": "6В04117 Учет и аудит",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/96fdd4d388a93510137a97f966920b6b.pdf"
                        },
                        {
                            "title": "6В04118 Финансы",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/5ecbcf291d29f15da9c22f0046bbefb0.pdf"
                        },
                        {
                            "title": "6В04119 Государственное и местное управление",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/58ffe7dd547693718165fe87a0112480.pdf"
                        },
                        {
                            "title": "6В06102 Информационные системы",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/d152fc8be6b8b99336cdd07f714aa67d.pdf"
                        },
                        {
                            "title": "6В06103 Инженерия искусственного интеллекта и блокчейн",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/da1d0a441752e3dcddc919800ae6c527.pdf"
                        },
                        {
                            "title": "6В06122 Информатика",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/dbeee11feaa43d55aab7b2500fcd293b.pdf"
                        },
                        {
                            "title": "6В06123 IT в здравоохранении",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/d7e1682909f85d7f83c4050c662f8e73.pdf"
                        },
                        {
                            "title": "6В06124 Вычислительная техника и программное обеспечение",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/7e79e4e983163900e29d1cdbbf283ff6.pdf"
                        },
                        {
                            "title": "6В07125 Электроэнергетика",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/0195e3b86977566eef3289e1b34e393d.pdf"
                        },
                        {
                            "title": "6В07527 Стандартизация, сертификация и метрология в строительстве",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/e4e588e7304c74fe75ed01833a808125.pdf"
                        },
                        {
                            "title": "6В05121 Биотехнология",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/249de4474841cce7d62867d0e7ebefc3.pdf"
                        },

                    ], kz: [
                        {
                            "title": "6В01403 Бастапқы әскери дайындық",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/1f8b4c7c5e3a7e0b46b604dc0b41ae35.pdf"
                        },
                        {
                            "title": "6В01404  Дене шынықтыру және спорт",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/9daf7daf89033b2477568e3a6dbfb629.pdf"
                        },
                        {
                            "title": "6В01509 Химия-Биология",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/2ee76eca45920af78bcff11864203a4c.pdf"
                        },
                        {
                            "title": "6В04116 Экономика",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/5cfa176c05c97952f160a42bc4155c6f.pdf"
                        },
                        {
                            "title": "6В04117 Есеп және аудит",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/1fa20fe0df04e60fa666ded7359e46bf.pdf"
                        },
                        {
                            "title": "6В04118 Қаржы",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/874e892413401fc528295662edc4465f.pdf"
                        },
                        {
                            "title": "6В04119 Мемлекеттік және жергілікті басқару",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/6112906a8a80c2cf27ab567f784568dc.pdf"
                        },
                        {
                            "title": "6В06102 Ақпараттық жүйелер",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/d83378058440ec033c4511c80a1df5f8.pdf"
                        },
                        {
                            "title": "6В06103 Жасанды интеллект инженериясы және блокчейн",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/13942f8b696743c0575e3825654a4806.pdf"
                        },
                        {
                            "title": "6В06122 Информатика",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/b43e15a44cbc8b3c5186a391ce4969de.pdf"
                        },
                        {
                            "title": "6В06123 Денсаулық сақтаудағы IT",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/797dfbe8995ec1b579d59adeebc9c852.pdf"
                        },
                        {
                            "title": "6В06124 Есептеу техникасы және бағдарламалық қамтамасыз ету",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/d21fce7349ac04ec00179248ce387e18.pdf"
                        },
                        {
                            "title": "6В07125 Электроэнергетика",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/52c7e29c6090d0b9cce53694d25150a5.pdf"
                        },
                        {
                            "title": "6В07527 Құрылыстағы стандарттау, сертификаттау және метрология",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/37a857ac6037d234c19155dc3794a719.pdf"
                        },
                        {
                            "title": "6В05121 Биотехнология",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/1a2aa4f2fd325ae79772532b14e62591.pdf"
                        },


                    ], en: [
                        {
                            "title": "6B01403 Initial military training",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/31869c83d46f3606e6fca771bd3543f0.pdf"
                        },
                        {
                            "title": "6В01404 Physical culture and sports",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/0bc58c76a5f93dd44b8b5a1b4d03bd77.pdf"
                        },
                        {
                            "title": "6В01509 Chemistry-Biology",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/fd280979f17e53d1764234e3901f50a0.pdf"
                        },
                        {
                            "title": "6В04116 Economics",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/c3543c21b48d12343aefc9e39b375af9.pdf"
                        },
                        {
                            "title": "6В04117 Accounting and auditing",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/3b62fca499470b8cf00978dc7e4adc22.pdf"
                        },
                        {
                            "title": "6В04118 Finance",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/f5ccccb53651d241d11a589c2c0d52a6.pdf"
                        },
                        {
                            "title": "6В04119 State and local government",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/834c0d225fd54cb32d3b9c7b63f33081.pdf"
                        },
                        {
                            "title": "6В06102 Information systems",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/f4c92582b0e9b2e9072af8291065ee92.pdf"
                        },
                        {
                            "title": "6В06103 Artificial Intelligence Engineering and Blockchain",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/ab09b14ae348d671d11213254753bd34.pdf"
                        },
                        {
                            "title": "6В06122 Computer Science",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/fc0b2b1a6f2a2317e291f4db3c285232.pdf"
                        },
                        {
                            "title": "6В06123 IT in Healthcare",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/493acaa3e8ceb6a464683760693abbed.pdf"
                        },
                        {
                            "title": "6В06124 Computational technology and software",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/03a208db211b8c52c23e0ddce29c2f8e.pdf"
                        },
                        {
                            "title": "6В07125 Electric power industry",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/423850f372d34580d5bf0b251e528122.pdf"
                        },
                        {
                            "title": "6В07527 Standardization, certification and metrology in construction",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/f73d7f52f3e962d311009ed14c07c0db.pdf"
                        },
                        {
                            "title": "6В05121 Biotechnology",
                            "url": "https://abu.edu.kz/uploads/68/274/1084/2825029370d3a228ee61d5c76ab4c4bb.pdf"
                        },


                    ]
                }
            }, {
                faculty: "usefulinfo.students.faculty3",
                documents: {
                    ru: [
                        {
                            "title": "6В01101 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/6eb5d4a9e0a30ab0ee8be71f5df0bc08.pdf"
                        },
                        {
                            "title": "6В01510 География-История",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/5a5477bd250cbacd5d466c4acfaa9329.pdf"
                        },
                        {
                            "title": "6В01606 История",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/13d24bdf93c345a714af5ee3c8e24a80.pdf"
                        },
                        {
                            "title": "6В01707 Казахский язык и литература",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/7a0f0ac8553d93dca97ae6189c85d3e5.pdf"
                        },
                        {
                            "title": "6В01708 Английский язык с дополнительным изучением второго иностранного языка",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/1417dec84eeb16b8bcc4bd6b439ed48c.pdf"
                        },
                        {
                            "title": "6В01733 Русский язык и литература в школах с русским и нерусским языками обучения (IP)",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/62c377adaf9d7f3e2845db254cf87b6d.pdf"
                        },
                        {
                            "title": "6В02212 Отечественная и всемирная история",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/97855d5d58e570d1090d2a122d957af8.pdf"
                        },
                        {
                            "title": "6В02313 Казахская филология",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/cf47e6ed5e215f602e82dbc385ccd964.pdf"
                        },
                        {
                            "title": "6В03115 Психология",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/1091706b362e385b5ebfd827b1143e78.pdf"
                        },
                        {
                            "title": "6В01303 Начальное образование (IP)",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/bf35b93976b6a41841ca5806d0ecaec9.pdf"
                        },
                        {
                            "title": "6В01201 Дошкольное обучение и воспитание",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/295ae34a3f904d39e584898c2b9f3e0d.pdf"
                        },

                    ], kz: [
                        {
                            "title": "6В01101 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/3037dadcc7514139ac41c42b9527aaa1.pdf"
                        },
                        {
                            "title": "6В01510 География-Тарих",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/cf36cc80564a2501893367c870933884.pdf"
                        },
                        {
                            "title": "6В01606 Тарих",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/e9d39cebcdbf27291001b028bbeb07e4.pdf"
                        },
                        {
                            "title": "6В01707 Қазақ тілі мен әдебиеті",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/848e4ce46dfb0c48896e4e247c1feb4a.pdf"
                        },
                        {
                            "title": "6В01708 Ағылшын тілі қосымша екінші шетел тілін оқытумен",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/7b1da04aec435e1de9ce72ec21e06d26.pdf"
                        },
                        {
                            "title": "6В01733 Орыс тілінде оқытылмайтын және орыс тілінде оқытылатың  мектепдердегі орыс тілі мен әдебиеті (IP)",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/1c8456863d3b3c46130c9700bb395ba1.pdf"
                        },
                        {
                            "title": "6В02212  Отан және дүние жүзі тарихы",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/1cce7e2b28af9edb91cc8e6198f9372e.pdf"
                        },
                        {
                            "title": "6В02313 Қазақ филологиясы",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/6868e5dff4eea6b5004c7c349ba3d987.pdf"
                        },
                        {
                            "title": "6В03115 Психология",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/a22cb47534a1036899660dccaab00210.pdf"
                        },
                        {
                            "title": "6В01303 Бастауыш білім беру (IP)",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/106283103fb770e48a629cf95e53614c.pdf"
                        },
                        {
                            "title": "6В01201 Мектепке дейінгі оқыту және тәрбие",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/404cc3262f92b4517fe30a1be27f5d1b.pdf"
                        },

                    ], en: [
                        {
                            "title": "6В01101 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/d475a3e2d21ed6061e5fec28f8edca79.pdf"
                        },
                        {
                            "title": "6В01510 Geography - history",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/2c784fc7d4fd78b7f4d7ac05ed649ea0.pdf"
                        },
                        {
                            "title": "6В01606 History",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/63a9216c9a719d6ecaf0bd605c71933e.pdf"
                        },
                        {
                            "title": "6В01707 Kazakh language and literature",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/24fd92e1251af181d80b344d064b6083.pdf"
                        },
                        {
                            "title": "6В01708 English with additional learning of a second foreign language",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/068d5d60133bbadf8134028fe647f107.pdf"
                        },
                        {
                            "title": "6В01733 Russian language and Literature in schools with Russian and non-Russian languages of instruction (IP)",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/6b7bbb5ebf0fffa63a5eb712b1bd4c41.pdf"
                        },
                        {
                            "title": "6В02212 Domestic and World History",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/cb526bb546dc419210f53c630c71c427.pdf"
                        },
                        {
                            "title": "6В02313 Kazakh Philology",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/03a134f17e29572f1676f00b4334043e.pdf"
                        },
                        {
                            "title": "6В03115 Psychology",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/158b1ec57da6c75b0c67ee20a44179c7.pdf"
                        },
                        {
                            "title": "6В01303 Primary Education (IP)",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/f91737eb2123384dbd687a342509e770.pdf"
                        },
                        {
                            "title": "6В01201 Preschool education and upbringing",
                            "url": "https://abu.edu.kz/uploads/68/274/1086/7f09c4d06a5964511f8ab1eb9c4a27cc.pdf"
                        },
                    ]
                }
            }, ,
        ]
    },
    {
        year: "2023-2024",
        children: [
            {
                faculty: "usefulinfo.students.faculty1",
                documents: {
                    ru: [
                        {
                            "title": "6B04222 Следственно-прокурорская деятельность",
                            "url": "https://abu.edu.kz/uploads/68/274/319/5645089c2b98d5fb54755c32e712a62b.pdf"
                        },
                        {
                            "title": "6B04221 Государственная служба и судебная система",
                            "url": "https://abu.edu.kz/uploads/68/274/319/7f8e61181662712dfc7ba4f98faaa6b9.pdf"
                        },
                        {
                            "title": "6В04220 Юриспруденция",
                            "url": "https://abu.edu.kz/uploads/68/274/319/e4bc30b2a2558e2cb7dbc299388a53f2.pdf"
                        },
                        {
                            "title": "6В12330 Правоохранительная деятельность",
                            "url": "https://abu.edu.kz/uploads/68/274/319/d225cf6a52f41e7f73590f14ab97d962.pdf"
                        },


                    ], kz: [
                        {
                            "title": "6B04222 Тергеу-прокурорлық қызмет",
                            "url": "https://abu.edu.kz/uploads/68/274/319/00feba5cc48e9a18fb5a017181b01026.pdf"
                        },
                        {
                            "title": "6B04221 Мемлекеттік қызмет және сот жүйесі",
                            "url": "https://abu.edu.kz/uploads/68/274/319/8c9a5ccfb425db050f220d1ee3e1d613.pdf"
                        },
                        {
                            "title": "6В04220 Құқықтану",
                            "url": "https://abu.edu.kz/uploads/68/274/319/bf2da1a6d4b3fce159cde8b8172c610c.pdf"
                        },
                        {
                            "title": "6В12330 Құқық қорғау қызметі",
                            "url": "https://abu.edu.kz/uploads/68/274/319/1723424d6c0c4ecb77c251dbe87b32cf.pdf"
                        },


                    ], en: [
                        {
                            "title": "6B04222 Investigative and prosecutorial activities",
                            "url": "https://abu.edu.kz/uploads/68/274/319/4565363c75a2e0b107a378c5d0d71fa9.pdf"
                        },
                        {
                            "title": "6B04221 Public service and the judicial system",
                            "url": "https://abu.edu.kz/uploads/68/274/319/f1242debf375397ce8a0772d338ea57a.pdf"
                        },
                        {
                            "title": "6В04220 Jurisprudence",
                            "url": "https://abu.edu.kz/uploads/68/274/319/2b7c60f7aff4f1070149f6980ab3ffe5.pdf"
                        },
                        {
                            "title": "6В12330 Law enforcement activities",
                            "url": "https://abu.edu.kz/uploads/68/274/319/90b790f03375c31815663966df6a9ae5.pdf"
                        },

                    ]
                }
            }, {
                faculty: "usefulinfo.students.faculty2",
                documents: {
                    ru: [
                        {
                            "title": "6В01403 Начальная военная подготовка",
                            "url": "https://abu.edu.kz/uploads/68/274/321/a809c6437e7aacb103fda353cab752d4.pdf"
                        },
                        {
                            "title": "6В01404 Физическая культура и спорт",
                            "url": "https://abu.edu.kz/uploads/68/274/321/d44309b9188587811412687542bede82.pdf"
                        },
                        {
                            "title": "6В04116  Экономика",
                            "url": "https://abu.edu.kz/uploads/68/274/321/eef9a055a847b99bbf51b24577051ca2.pdf"
                        },
                        {
                            "title": "6В04117 Учет и аудит",
                            "url": "https://abu.edu.kz/uploads/68/274/321/f1c2a44462280aaa58d6a4101736a9c8.pdf"
                        },
                        {
                            "title": "6В04118 Финансы",
                            "url": "https://abu.edu.kz/uploads/68/274/321/22666b9d33e48fedddc469ac982cbef2.pdf"
                        },
                        {
                            "title": "6В06122 Информатика",
                            "url": "https://abu.edu.kz/uploads/68/274/321/1342951fbe5c633be707d3d7fa715257.pdf"
                        },
                        {
                            "title": "6В06123 IT в здравоохранении",
                            "url": "https://abu.edu.kz/uploads/68/274/321/d7eab8d3f23b5f72faf6688ee5a65dfb.pdf"
                        },
                        {
                            "title": "6В06124 Вычислительная техника и программное обеспечение",
                            "url": "https://abu.edu.kz/uploads/68/274/321/96cd4f87b7720c3aa1033fd584776863.pdf"
                        },
                        {
                            "title": "6В07125 Электроэнергетика",
                            "url": "https://abu.edu.kz/uploads/68/274/321/048e1afa190aedc3b1281e15c956a289.pdf"
                        },
                        {
                            "title": "6В07527 Стандартизация, сертификация и метрология в строительстве",
                            "url": "https://abu.edu.kz/uploads/68/274/321/9c56de18c84ca626251edf5c72ef840b.pdf"
                        },
                        {
                            "title": "6В04120 Менеджмент в туризме и гостеприимстве",
                            "url": "https://abu.edu.kz/uploads/68/274/321/8e2b16caea984ec98f13627424f842ae.pdf"
                        },
                        {
                            "title": "6В04119 Государственное и местное управление",
                            "url": "https://abu.edu.kz/uploads/68/274/321/ea4e709ea9fdcaf2ff4b0fabe3052c71.pdf"
                        },
                        {
                            "title": "6В06102 Информационные системы",
                            "url": "https://abu.edu.kz/uploads/68/274/321/6198d824c3aae19aac4b2093fed41ab5.pdf"
                        },
                        {
                            "title": "6В01509 Химия-Биология",
                            "url": "https://abu.edu.kz/uploads/68/274/321/33b91e175c1d0d4cb7f30a2b39e5a3a8.pdf"
                        },
                        {
                            "title": "6В05121 Биотехнология",
                            "url": "https://abu.edu.kz/uploads/68/274/321/8b68e6e3a160a8213535e2e0a4b5856c.pdf"
                        },

                    ], kz: [
                        {
                            "title": "6В01403 Бастапқы әскери дайындық",
                            "url": "https://abu.edu.kz/uploads/68/274/321/a8b4c32a01f1c97b37cd44312a5e37f6.pdf"
                        },
                        {
                            "title": "6В01404  Дене шынықтыру және спорт",
                            "url": "https://abu.edu.kz/uploads/68/274/321/de6de3c19a7233fea5cf68ea0e3b0f96.pdf"
                        },
                        {
                            "title": "6В04116  Экономика",
                            "url": "https://abu.edu.kz/uploads/68/274/321/9f9de9b6289bd5eb4988a4b426132d59.pdf"
                        },
                        {
                            "title": "6В04117 Есеп және аудит",
                            "url": "https://abu.edu.kz/uploads/68/274/321/0ea4858952631def425bc79385107f17.pdf"
                        },
                        {
                            "title": "6В04118 Қаржы",
                            "url": "https://abu.edu.kz/uploads/68/274/321/667bf690074c8951ff77cb70c361e4cb.pdf"
                        },
                        {
                            "title": "6В06122 Информатика",
                            "url": "https://abu.edu.kz/uploads/68/274/321/6a9e4fa7c7142dcc483db040ee2b8760.pdf"
                        },
                        {
                            "title": "6В06123 Денсаулық сақтаудағы IT",
                            "url": "https://abu.edu.kz/uploads/68/274/321/55d6648e5e7634bbc6ac652d6bacbabf.pdf"
                        },
                        {
                            "title": "6В06124 Есептеу техникасы және бағдарламалық қамтамасыз ету",
                            "url": "https://abu.edu.kz/uploads/68/274/321/a7e387f9e889e11aca51f1c34c3c944d.pdf"
                        },
                        {
                            "title": "6В07125 Электр энергетикасы",
                            "url": "https://abu.edu.kz/uploads/68/274/321/96380d4a25af3d2b9c0c1a30a897d40c.pdf"
                        },
                        {
                            "title": "6В07527 Құрылыстағы стандарттау, сертификаттау және метрология",
                            "url": "https://abu.edu.kz/uploads/68/274/321/026a6ab48790ed4ac1bef2451b583d04.pdf"
                        },
                        {
                            "title": "6В04120 Туризм және қонақжайлылық саласындағы менеджмент",
                            "url": "https://abu.edu.kz/uploads/68/274/321/89582cc1ab1680006c973bf49b2c1061.pdf"
                        },
                        {
                            "title": "6В04119 Мемлекеттік және жергілікті басқару",
                            "url": "https://abu.edu.kz/uploads/68/274/321/c353cf3bead0c670da015eb6746dd43b.pdf"
                        },
                        {
                            "title": "6В06102 Ақпараттық жүйелер",
                            "url": "https://abu.edu.kz/uploads/68/274/321/d0341080843fc228f997152dcd3a24e0.pdf"
                        },
                        {
                            "title": "6В01509 Химия-Биология",
                            "url": "https://abu.edu.kz/uploads/68/274/321/b1a889a78387904881c46f1c70437db6.pdf"
                        },
                        {
                            "title": "6В05121 Биотехнология",
                            "url": "https://abu.edu.kz/uploads/68/274/321/b24dd9e7aebb4e483ffcfcdca368114c.pdf"
                        },


                    ], en: [
                        {
                            "title": "6B01403 Initial military training",
                            "url": "https://abu.edu.kz/uploads/68/274/321/056d66c2f0dcc82105b64243cda413c7.pdf"
                        },
                        {
                            "title": "6В01404 Physical culture and sports",
                            "url": "https://abu.edu.kz/uploads/68/274/321/ac3b8f0d041844ac26f03138efe59074.pdf"
                        },
                        {
                            "title": "6В04116 Economics",
                            "url": "https://abu.edu.kz/uploads/68/274/321/1d5562ad7c1d4af2e5ec0d004c7422b4.pdf"
                        },
                        {
                            "title": "6В04117 Accounting and auditing",
                            "url": "https://abu.edu.kz/uploads/68/274/321/63b8a98c10445c90b0a7eb2cd73efefc.pdf"
                        },
                        {
                            "title": "6В04118 Finance",
                            "url": "https://abu.edu.kz/uploads/68/274/321/2db066cdae20a878e4acb6938f1552a0.pdf"
                        },
                        {
                            "title": "6В06122 Informatics",
                            "url": "https://abu.edu.kz/uploads/68/274/321/1df567f7a6d5546ffc6c06e538d17504.pdf"
                        },
                        {
                            "title": "6В06123 IT in healthcare",
                            "url": "https://abu.edu.kz/uploads/68/274/321/6e2f694bab30b0f8ddd165b5c84c80e9.pdf"
                        },
                        {
                            "title": "6В06124 Computer technology and software",
                            "url": "https://abu.edu.kz/uploads/68/274/321/5cc5f29b8be1b97a90c2f00e3a357e43.pdf"
                        },
                        {
                            "title": "6В07125 Electric power industry",
                            "url": "https://abu.edu.kz/uploads/68/274/321/200a4b30be0d88d8cf9acf4421939832.pdf"
                        },
                        {
                            "title": "6В07527 Standardization, certification and metrology in construction",
                            "url": "https://abu.edu.kz/uploads/68/274/321/6c36c8ceee8947ecfe82a1735c492ff6.pdf"
                        },
                        {
                            "title": "6В04120 Management in Tourism & Hospitality",
                            "url": "https://abu.edu.kz/uploads/68/274/321/e181650c7d095077a84f08d244e4f9e0.pdf"
                        },
                        {
                            "title": "6В04119 State and  Local Management",
                            "url": "https://abu.edu.kz/uploads/68/274/321/575528bd19ed939081d1ecee6336e34e.pdf"
                        },
                        {
                            "title": "6В06102 Information systems",
                            "url": "https://abu.edu.kz/uploads/68/274/321/4f3ddcb449aaf11f5a0107587480f585.pdf"
                        },
                        {
                            "title": "6В01509 Chemistry-Biology",
                            "url": "https://abu.edu.kz/uploads/68/274/321/71880025362ee23a2a1cae173b61ccd0.pdf"
                        },
                        {
                            "title": "6В05121 Biotechnology",
                            "url": "https://abu.edu.kz/uploads/68/274/321/ce9239f9ac51e693e8a5f14ac4c6f92e.pdf"
                        },


                    ]
                }
            }, {
                faculty: "usefulinfo.students.faculty3",
                documents: {
                    ru: [
                        {
                            "title": "6В01606 История",
                            "url": "https://abu.edu.kz/uploads/68/274/935/f7a23a26680f0d8860cf1ebfc80c41be.pdf"
                        },
                        {
                            "title": "6В01101 Педагогика и психология",
                            "url": "https://abu.edu.kz/uploads/68/274/935/b4f84a91e5ea144d21fa37ccdae660ea.pdf"
                        },
                        {
                            "title": "6В01201 Дошкольное обучение и воспитание",
                            "url": "https://abu.edu.kz/uploads/68/274/935/b8078f3551f0e33eee95b389f3429cdf.pdf"
                        },
                        {
                            "title": "6В01302 Педагогика и методика начального обучения",
                            "url": "https://abu.edu.kz/uploads/68/274/935/c8b1f9424ce4770466be926a96c5cd68.pdf"
                        },
                        {
                            "title": "6В01707 Казахский язык и литература",
                            "url": "https://abu.edu.kz/uploads/68/274/935/81bcfb55edc5bfa525ae9a265fe647b0.pdf"
                        },
                        {
                            "title": "6В01708 Английский язык с дополнительным изучением второго иностранного языка",
                            "url": "https://abu.edu.kz/uploads/68/274/935/d8f92a9113f4c7ce868243a16d292f92.pdf"
                        },
                        {
                            "title": "6В01732 Русский язык и литература в школах с нерусским языком обучения",
                            "url": "https://abu.edu.kz/uploads/68/274/935/73b16506b631df19eba71774c705a76c.pdf"
                        },
                        {
                            "title": "6В02212 Отечественная и всемирная история",
                            "url": "https://abu.edu.kz/uploads/68/274/935/0f2f96d832bdb9c49b4dc2cecd561806.pdf"
                        },
                        {
                            "title": "6В02313 Казахская филология",
                            "url": "https://abu.edu.kz/uploads/68/274/935/25aacce9eb048b169cebacd3db12c981.pdf"
                        },
                        {
                            "title": "6В03115 Психология",
                            "url": "https://abu.edu.kz/uploads/68/274/935/e4f9d445a01363709fe75ab99e1a08ff.pdf"
                        },
                        {
                            "title": "6В01510 География-История",
                            "url": "https://abu.edu.kz/uploads/68/274/935/7e1fc832f26303e76b810f44541e9baf.pdf"
                        }

                    ], kz: [
                        {
                            "title": "6В01606 Тарих",
                            "url": "https://abu.edu.kz/uploads/68/274/935/b24dff92ef9456f9fe6c1e1ef4f5b999.pdf"
                        },
                        {
                            "title": "6В01101 Педагогика және психология",
                            "url": "https://abu.edu.kz/uploads/68/274/935/59f18363403fe6c988621a495d5ef379.pdf"
                        },
                        {
                            "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу",
                            "url": "https://abu.edu.kz/uploads/68/274/935/61f68a8a9e633f7953543daf53e6b326.pdf"
                        },
                        {
                            "title": "6В01302 Бастауышта оқыту педагогикасы мен әдістемесі",
                            "url": "https://abu.edu.kz/uploads/68/274/935/561cdb618f37c7e9b088a579883f5d2e.pdf"
                        },
                        {
                            "title": "6В01707 Қазақ тілі мен әдебиеті",
                            "url": "https://abu.edu.kz/uploads/68/274/935/0b68abcf747299ccb1ed3c12a60532ca.pdf"
                        },
                        {
                            "title": "6В01708 Ағылшын тілі қосымша екінші шетел тілін оқытумен",
                            "url": "https://abu.edu.kz/uploads/68/274/935/80d26088b7cc1b33de099b462eedcdf7.pdf"
                        },
                        {
                            "title": "6В01732 Орыс тілінде оқылмайтын мектептердегі орыс тілі және әдебиеті",
                            "url": "https://abu.edu.kz/uploads/68/274/935/aba65d3353e69e478810b1b05e45913f.pdf"
                        },
                        {
                            "title": "6В02212 Отан және дүние жүзі тарих",
                            "url": "https://abu.edu.kz/uploads/68/274/935/7aa5f8dec68df44ee6470b7c93099d32.pdf"
                        },
                        {
                            "title": "6В02313 Қазақ филологиясы",
                            "url": "https://abu.edu.kz/uploads/68/274/935/002c460ed8e6c47438e349b02c1e5768.pdf"
                        },
                        {
                            "title": "6В03115 Психология",
                            "url": "https://abu.edu.kz/uploads/68/274/935/729400ac0b6e02b2acbc67e703b69c01.pdf"
                        },
                        {
                            "title": "6В01510 География-Тарих",
                            "url": "https://abu.edu.kz/uploads/68/274/935/3830efff11b4b63b4cc0f44c2aa80e3e.pdf"
                        }

                    ], en: [
                        {
                            "title": "6B01606 History",
                            "url": "https://abu.edu.kz/uploads/68/274/935/447a2ff89b328ff1072c3c638a62b4a2.pdf"
                        },
                        {
                            "title": "6В01101 Pedagogy and psychology",
                            "url": "https://abu.edu.kz/uploads/68/274/935/a68bc520b99b047a9f52d285848ae3dc.pdf"
                        },
                        {
                            "title": "6В01201 Preschool education and upbringing",
                            "url": "https://abu.edu.kz/uploads/68/274/935/3b9554d5a6ae929353397be522d097d8.pdf"
                        },
                        {
                            "title": "6В01302 Pedagogy and methods of primary education",
                            "url": "https://abu.edu.kz/uploads/68/274/935/293081a64b50b7f46053556ad01cc7ef.pdf"
                        },
                        {
                            "title": "6В01707 Kazakh language and literature",
                            "url": "https://abu.edu.kz/uploads/68/274/935/f115f97e65e20a8ba74593ca8d3327aa.pdf"
                        },
                        {
                            "title": "6В01708 English with additional learning of a second foreign language",
                            "url": "https://abu.edu.kz/uploads/68/274/935/d62dcf76a2cd8390b68628267dcf798a.pdf"
                        },
                        {
                            "title": "6В01732 Russian language and literature in the school with non-Russian language of training",
                            "url": "https://abu.edu.kz/uploads/68/274/935/679e14bfebb0937f7b4e0f54f36ec634.pdf"
                        },
                        {
                            "title": "6В02212 Domestic and world history",
                            "url": "https://abu.edu.kz/uploads/68/274/935/9936dfedbab93dacf7e767e992297246.pdf"
                        },
                        {
                            "title": "6В02313 Kazakh Philology",
                            "url": "https://abu.edu.kz/uploads/68/274/935/13ac1077fcfb4a4ec8d0f8dffc1db4c4.pdf"
                        },
                        {
                            "title": "6В03115 Psychology",
                            "url": "https://abu.edu.kz/uploads/68/274/935/d9c08e112e04ddb2205c211fd1613bf0.pdf"
                        },
                        {
                            "title": "6В01510 Geography-History",
                            "url": "https://abu.edu.kz/uploads/68/274/935/3fe33c7b2fb7e10a2432e2d09f405fc1.pdf"
                        }
                    ]
                }
            }, ,
        ]
    }
]

const data = [
    {
        year: "2024-2025",
        children: [
            {
                faculty: "usefulinfo.students.faculty1",
                documents: {
                    ru: [
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1027/247447b75f05f6070ffa87ea5b8fbea8.pdf",
                            title: "6В04220 Юриспруденция"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1027/08f9ad14352973c677febf02d9e65024.pdf",
                            title: "6В04221 Государственная служба и судебная система 2024г."
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1027/68eac36bd7ea28da8f0b5337e4fb8bd2.pdf",
                            title: "6В04222 Следственно-прокурорская деятельность (очное 4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1027/8da66c344d69213e298a2e765a76432b.pdf",
                            title: "6В12330 Правоохранительная деятельность (очное 4 года)"
                        }
                    ],
                    kz: [{
                        url: "https://abu.edu.kz/uploads/68/268/1027/24ade78a849047d2b9c7bca35cb97ff8.pdf",
                        title: "6В04220 Құқықтану"
                    },
                    {
                        url: "https://abu.edu.kz/uploads/68/268/1027/3111d47bc050840b31e2e813b6074b7a.pdf",
                        title: "6В04221 Мемлекеттік қызмет және сот жүйесі 2024г."
                    },
                    {
                        url: "https://abu.edu.kz/uploads/68/268/1027/34f777c76a269c7b8c87f3e4c16ee34a.pdf",
                        title: "6В04222 Тергеу-прокурорлық қызмет (күндізгі 4 жыл)"
                    },
                    {
                        url: "https://abu.edu.kz/uploads/68/268/1027/1621f52a942f2c4ec93472c48a821d83.pdf",
                        title: "6В12330 Құқық қорғау қызметі (күндізгі 4 жыл)"
                    }],
                    en: [{
                        url: "https://abu.edu.kz/uploads/68/268/1027/7dd1c5910cd6fa8314c492da91948e5d.pdf",
                        title: "6В04220 Jurisprudence"
                    },
                    {
                        url: "https://abu.edu.kz/uploads/68/268/1027/74d8459d0a5ea114b24f1fd80841ff60.pdf",
                        title: "6В04221 Public service and judicial system 2024г."
                    },
                    {
                        url: "https://abu.edu.kz/uploads/68/268/1027/bd614f597d83f5d545216f56060a5fc5.pdf",
                        title: "6В04222 Investigative and prosecutorial activities (Full-time 4 year)"
                    },
                    {
                        url: "https://abu.edu.kz/uploads/68/268/1027/2c63e5f5df42c1084039ca080eb13e96.pdf",
                        title: "6В12330 Law enforcement (Full-time 4 year)"
                    }]
                }
            },
            {
                faculty: "usefulinfo.students.faculty2",
                documents: {
                    ru: [
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/2baa37594334c2c8976a341da62f5d4f.pdf",
                            title: "6В04116 Экономика (2 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/9b25499423f18fd0ac616c639ac0758a.pdf",
                            title: "6В04116 Экономика (2 года 9 м)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/c8af7e008438637c499fbfcbd1a63588.pdf",
                            title: "6В04116 Экономика (4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/37353269cc4827506aa279a66ea189f7.pdf",
                            title: "6В04118 Финансы (2 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/0c4f4367277116187d91aefa260be950.pdf",
                            title: "6В04118 Финансы (2 года 9 м)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/f99d0b5f70f1f5a970da76f223fe3a59.pdf",
                            title: "6В04118 Финансы (4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/baaf783533f781b116d2669f5bfc066f.pdf",
                            title: "6В05121 - Биотехнология"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/f5615cb92bccbfb9dd873a9156543005.pdf",
                            title: "6В06102 Информационные системы (очное 2 года 9 месяцев)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/92e8d33c3dbbb989bd50adf5ff87fa28.pdf",
                            title: "6В06102 Информационные системы (очное 4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/1e8fab6cde861b48e0906b845f66925f.pdf",
                            title: "6В06103 Инженерия искусственного интеллекта и блокчейн (очное 4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/9cffa54e7b94e8169bd0f2be0eda51de.pdf",
                            title: "6В06122 Информатика (очное 2 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/0b7b871cad813d404c0391fd498cf9c7.pdf",
                            title: "6В06124 Вычислительная техника и программное обеспечение (очное 2 года 9 месяцев)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/6296bce5ace9bbc5b2f5fc4e5a4b1a43.pdf",
                            title: "6В06124 Вычислительная техника и программное обеспечение (очное 4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/9a3e4dfc256f1ac94c9ed74623193408.pdf",
                            title: "6В07125 Электроэнергетика- (ВВ-2 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/9295bdee006bf1a8503af082ba1a27de.pdf",
                            title: "6В07125 Электроэнергетика (ТиПО-2,9 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/fc4ada7e68d84ede250a11ee8e63e30b.pdf",
                            title: "6В07125 Электроэнергетика (Очное_4_года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/01323413d6a6787f7afd54420d618656.pdf",
                            title: "6B01403 Начальная военная подготовка"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/0dbe1c54b651312c73df811160809928.pdf",
                            title: "6В01404 Физическая культура и спорт ВВ"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/0cac46ad925d26b29eb99943530a7527.pdf",
                            title: "6В01404 Физическая культура и спорт ССО"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/f861ec6699143b4955f4be6706bd5bca.pdf",
                            title: "6В01404 Физическая культура и спорт"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/f46f1d8f73b33fa16d4176e5dc097aa2.pdf",
                            title: "6В01509 Химия-биология"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/ba9d86c335c389dcb9db1ee263d53d1d.pdf",
                            title: "6В01509 Химия-биология (очное, 2 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/8854db414b073c5ec72992fb74a670c2.pdf",
                            title: "6В04117 Учет и аудит (очное 2 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/1e4f74d655cf78ced0b3a16bbc1b9827.pdf",
                            title: "6В04117 Учет и аудит (очное 2,9 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/9fcdfa4248a20725cd71f74630c8be2b.pdf",
                            title: "6В04117 Учет и аудит (очное 4 года)"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/34f1422bee19d8e83404dacbf5b1643b.pdf",
                            title: "6В04119 Государственное и местное управление 2 года"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/0b7fb1896ac917bac587cacd822d8f2a.pdf",
                            title: "6В04119 Государственное и местное управление 2.9 года"
                        },
                        {
                            url: "https://abu.edu.kz/uploads/68/268/1028/c130ef02f3f5ce2bbdfd0edd8a35c522.pdf",
                            title: "6В04119 Государственное и местное управление (4 года)"
                        }
                    ],
                    kz: [{
                        "url": "https://abu.edu.kz/uploads/68/268/1028/39f817744268390893539b1dfb6ff6eb.pdf",
                        "title": "6В04116 Экономика (2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/68993048dd4adee34295bb2c59c6b5ea.pdf",
                        "title": "6В04116 Экономика (2жыл 9ай)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/e885f619ceeaf4af858ab19aa0bf708e.pdf",
                        "title": "6В04116 Экономика (4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/2cd06a4bafef046eb95514b987b404c3.pdf",
                        "title": "6В04118 Қаржы (2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/766fc9ea8fad9d379053415754dbe075.pdf",
                        "title": "6В04118 Қаржы (2 жыл 9 ай)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/22005e8e6ea52878a409b8ca52aef723.pdf",
                        "title": "6В04118 Қаржы (4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/acb005cff510a30a63e2cae2e138da7c.pdf",
                        "title": "6В05121 - Биотехнология"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/2d5d8ce93db4e73c178ce3488cf816b8.pdf",
                        "title": "6В06102 Ақпараттық жүйелер (күндізгі 2 жыл 9ай)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/b9ad06cbab95d45a2eb7693f532b3f3b.pdf",
                        "title": "6В06102 Ақпараттық жүйелер (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/756f3eedd917fd50be6e2047e30b5c83.pdf",
                        "title": "6В06103 Жасанды интеллект инженериясы және блокчейн (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/520f97d2f2ff9596dce72b6c5bc85ab8.pdf",
                        "title": "6В06122 Информатика (күндізгі 2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/8b4eb46c52ec2087bdc3c4ea92416e5c.pdf",
                        "title": "6В06124 Есептеу техникасы және бағдарламалық қамтамасыз ету (күндізгі 2 жыл 9 ай)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/6f45a1e710eb7b1e7b3be24b8dfcde83.pdf",
                        "title": "6В06124 Есептеу техникасы және бағдарламалық қамтамасыз ету (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/c60e10e132adeb009b63c2a1738bc16d.pdf",
                        "title": "6В07125 Электроэнергетикасы (ЕЖ-2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/bdd7575a37896d0fdb253fb72c8e014d.pdf",
                        "title": "6В07125 Электроэнергетикасы (ТжКБ-2 жыл 9 ай)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/3dd7f80b5ced6b369b7fcd01731a8458.pdf",
                        "title": "6В07125 Электрэнергетикасы (Күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/82eb456a4cdf5fb73f6b462a983c8950.pdf",
                        "title": "6В01403 Бастапқы әскери дайындық"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/470380cb86d8b17635e750714be8cc86.pdf",
                        "title": "6В01404 Дене шынықтыру және спорт ВВ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/0d63f530988983c6ff390cfbbc7dadde.pdf",
                        "title": "6В01404 Дене шынықтыру және спорт ССО"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/7effc2ac4aa5515e40021185fca0bc28.pdf",
                        "title": "6В01404 Дене шынықтыру және спорт"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/4b624ca415fec1846ec2e1842553d6f5.pdf",
                        "title": "6В01509 Химия-биология"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/21e53fedffa7010610263df6ab22977f.pdf",
                        "title": "6В01509 Химия-биология (күндізгі, 2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/3a8910c933cff5e89e8ff41f874fb88c.pdf",
                        "title": "6В04117 Есеп және аудит (күндізгі 2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/72b00439aebbaa7c0f03813a41af8673.pdf",
                        "title": "6В04117 Есеп және аудит (күндізгі 2,9 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/d6f2b6c8f6431a34c1f98488666a2dd2.pdf",
                        "title": "6В04117 Есеп және аудит (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/24da9cce70785d8702a8a30710a771ad.pdf",
                        "title": "6В04119 Мемлекеттік және жергілікті басқару 2 жыл"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/28ddd4a7bc988f0c77a54cc8ea948409.pdf",
                        "title": "6В04119 Мемлекеттік және жергілікті басқару 2,9 жыл"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1028/4a9f6fe73de7475acc7767b2159204cc.pdf",
                        "title": "6В04119 Мемлекеттік және жергілікті басқару (күндізгі 4 жыл)"
                    }],
                    en: [
                        { url: "https://abu.edu.kz/uploads/68/268/1028/d0f04e7397f844a6592e8551609fdecb.pdf", title: "6В04116 Economy (2 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/3ffef4070e36014a59c1f505986e4142.pdf", title: "6В04116 Economy (2 years 9m)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/b1fe3fd22cba394d825449307eb52918.pdf", title: "6В04116 Economy (4 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/80f549308e4d6c2de45c6d1c07f7a5be.pdf", title: "6В04118 Finance (2 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/2b4e2d9d5c308298cb63f1eb0bc9c24a.pdf", title: "6В04118 Finance (2 years 9m)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/a1a5eca0fbd5b02a7422f1dabd491465.pdf", title: "6В04118 Finance (4 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/7678d1103bdc2db4616353f3b6637241.pdf", title: "6В05121 - Biotechnology" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/b4d941f7f737858765289ed5973f1fd9.pdf", title: "6В06102 Information systems ТиПО (full-time 2 years 9 month)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/aa4c7e284c7e7b430ec30f23f503655c.pdf", title: "6В06102 Information systems СШ (full-time 4 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/d891031cca9237e053dc38bff09baf37.pdf", title: "6В06103- Artificial intelligence engineering and blockchain (full-time 4 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/741786fe60c00cdd08f9c0347d9fa9e2.pdf", title: "6В06122 Informatiсs (full-time 2 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/65306e3dd3066f1923a41d069fd4407d.pdf", title: "6В06124 Computational technology and software (full-time 2 years 9 month)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/8e4b9e4a51834030a4ca5ba061b0ec26.pdf", title: "6В06124 Computational technology and software (full-time 4 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/60cdbc381bde5a1c8aa387f3e9d7df80.pdf", title: "6В07125 Electroenergetics (part time - 2 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/a8feca3861b173823c549d23fc481535.pdf", title: "6В07125 Electroenergetics (full time -2 years 9 months)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/8f542429f622d06423a6e0aa29d421b5.pdf", title: "6В07125 Electroenergetics (full-Time 4 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/eb56abc3c2185450913cb3435661092f.pdf", title: "6B01403 Initial military training" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/ced0a1dc28605705c64065ffea9ae184.pdf", title: "6B01404 Physical culture and sports BB" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/5ffa2f9f42a9a07df6e473b21e983688.pdf", title: "6B01404 Physical culture and sports SSO" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/b6920f0d3f0e1f5559d4b489db56343e.pdf", title: "6B01404 Physical culture and sports" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/5182d8d79a8dc0116be119c2ec9c63d0.pdf", title: "6В01509 Сhemistry- biology" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/53f0790d19487808c38d0abd6c13fe9f.pdf", title: "6В01509 Сhemistry- biology (full-time, 2 years)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/d40a69bec6f11cc9e949fa85d7f4e170.pdf", title: "6В04117 Accounting and auditing (full-time 2 months)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/68535b160096c19294e08cda25dfb8ba.pdf", title: "6В04117 Accounting and auditing (full-time 2.9 months)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/7fc7e622e75bdd25781209c9bb723ea7.pdf", title: "6В04117 Accounting and auditing (full-time 4 months)" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/ffe830715766b13528343c949339ce36.pdf", title: "6В04119 State and local government 2 years" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/4a18e778b868980da21b7726cca9d406.pdf", title: "6В04119 State and local government 2.9 years" },
                        { url: "https://abu.edu.kz/uploads/68/268/1028/9369d31473200c73be1f7093adb667c6.pdf", title: "6В04119 State and local government (full-time 4 years)" }

                    ]
                }
            },
            {
                faculty: "usefulinfo.students.faculty3",
                documents: {
                    ru: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/97dfcabf0ec888ad8b88bcb0479df99e.pdf",
                            "title": "6В01101 Педагогика и психология"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/d77492dcb500609979ab32e372f5ffc1.pdf",
                            "title": "6В01201 Дошкольное обучение и воспитание (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/27ad3f9745913baa12cdb01ee7fd1517.pdf",
                            "title": "6В01201 Дошкольное обучение и воспитание (2 года 9 месяцев)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/4a773b110a65861654e5540d0ac9fc08.pdf",
                            "title": "6В01201 Дошкольное обучение и воспитание (очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/882c26efd0601fda1f3af928d8400768.pdf",
                            "title": "6В01510 География-История(ВВ)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/59c99fd90ab9aedbc584f2e81e01d3a7.pdf",
                            "title": "6В01510 География-История"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/2a32ca0942d662f244df2a20e11ac045.pdf",
                            "title": "6В01707 Казахский язык и литература ВВ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/96220f41146e669a4877b91ace352ffc.pdf",
                            "title": "6В01707 Казахский язык и литература ССО"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/8166750398f6a6161e6ac1ca65e144bd.pdf",
                            "title": "6В01707 Казахский язык и литература СШ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/997ecb0415fe3c7bc3f4d09ac0ebccba.pdf",
                            "title": "6В01708 Английский язык с дополнительным изучением второго иностранного языка (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/6047c8d357666f601b691bbb6a675a3a.pdf",
                            "title": "6В01708 Английский язык с дополнительным изучением второго иностранного языка (очное 3 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/dbcede2332ad108c243323ef1e1d099c.pdf",
                            "title": "6В01708 Английский язык с дополнительным изучением второго иностранного языка (очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/8096e9d4a6c0caba583ee92a08653030.pdf",
                            "title": "6В01733 Русский язык и литература в школах с русским и нерусским языками обучения ВВ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/5b7a679b2ddd088e534f32f7d5394344.pdf",
                            "title": "6В01733 Русский язык и литература в школах с русским и нерусским языками обучения ТиПО"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/6cb223677e042ee4d629659de7b9b22d.pdf",
                            "title": "6В01733 Русский язык и литература в школах с русским и нерусским языками обучения"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/c1f88f74f5612462a379cbed9bad8884.pdf",
                            "title": "6В02212 Отечественная и всемирная история"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/1646aa0b64b8e3a6fc7c8b9352618be5.pdf",
                            "title": "6В02313 Казахская филология"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1029/70ff265f25839486861b90e98334c7ac.pdf",
                            "title": "6В03115 Психология (очное 4 года, очное 3 года)"
                        }
                    ],
                    kz: [{
                        "url": "https://abu.edu.kz/uploads/68/268/1029/c5cb5a2f270ff3d2103464a8742c84e7.pdf",
                        "title": "6В01101 Педагогика және психология"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/a32bf7e782604633c9e6e2863dc7ad85.pdf",
                        "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу (күндізгі 2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/024d8ad820f9129e34d5f614fa66c23a.pdf",
                        "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу (күндізгі 2 жыл 9 ай)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/12b88639aeac5850ccd93da51eec44ee.pdf",
                        "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/19fa8824780c8c38c7cc557e1550b447.pdf",
                        "title": "6В01510 География-Тарих(ВВ)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/39d924a004a3a856015a2e2a5fa28760.pdf",
                        "title": "6В01510 География-Тарих"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/e27c665459810eb0828c0a2e3ac3c215.pdf",
                        "title": "6В01707 Қазақ тілі мен әдебиеті ВВ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/74af378ef7847430402a38d2f40fbee0.pdf",
                        "title": "6В01707 Қазақ тілі мен әдебиеті ССО"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/c855c8211d37e10e6539dcb52e447c78.pdf",
                        "title": "6В01707 Қазақ тілі мен әдебиеті СШ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/43c862811a689bdd4754dd1bd0f72b3c.pdf",
                        "title": "6В01708 Ағылшын тілі қосымша екінші шетел тілін оқытумен (күндізгі 2 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/80f00e8554e0b1a1db5d9bad914fd97d.pdf",
                        "title": "6В01708 Ағылшын тілі қосымша екінші шетел тілін оқытумен (күндізгі 3 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/5a59c366030bb5972f1c4a41df9a4d66.pdf",
                        "title": "6В01708 Ағылшын тілі қосымша екінші шетел тілін оқытумен (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/abbf0a71e597b0120c9dd3ea22dc152c.pdf",
                        "title": "6В01733 Орыс және орыс емес мектептердегі орыс тілі мен әдебиеті ВВ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/47e0977486d66113ee28a7f971af03b6.pdf",
                        "title": "6В01733 Орыс және орыс емес мектептердегі орыс тілі мен әдебиеті СПО"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/4a760e417ab755ffe88b22ad7f0f89a2.pdf",
                        "title": "6В01733 Орыс және орыс емес мектептердегі орыс тілі мен әдебиеті"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/6c260714d40403ffbcf1e09787d2b6b8.pdf",
                        "title": "6В02212 Отан және дүние жүзі тарихы"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/415ebb1aa902cc4cc2c3f990e137bbf3.pdf",
                        "title": "6В02313 Қазақ филологиясы"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/80bb20def68094514d71314f835b844d.pdf",
                        "title": "6В03115 Психология (күндізгі 4 жыл, күндізгі 3 жыл)"
                    }],
                    en: [{
                        "url": "https://abu.edu.kz/uploads/68/268/1029/43fb52f01098c05aa3971a93afc127a1.pdf",
                        "title": "6B01101 Pedagogy and psychology"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/647a4f91af187959aa5c8bb4a5254a35.pdf",
                        "title": "6В01201 Preschool education and upbringing (Full-time 2 years)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/f6cf31b871f1182406c94d3cd3b5d035.pdf",
                        "title": "6В01201 Preschool education and upbringing (Full-time 2 years 9 months)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/f13964c7d2921809cd98bb706aeb3b48.pdf",
                        "title": "6В01201 Preschool education and upbringing (Full-time 4 years )"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/f9f131cf169b19a8a545f04752df69e9.pdf",
                        "title": "6В01510 Geography-Historу(ВВ)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/e68010a20657a6ab75772a26875f306f.pdf",
                        "title": "6В01510 Geography-History"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/562bcca3b9df64f7f5e4c2a54bd9ff65.pdf",
                        "title": "6В01707 Kazakh language and literature ВВ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/efa247836ae69859b21a622f94e987dc.pdf",
                        "title": "6В01707 Kazakh language and literature ССО"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/a7ae6d691023a50a0ea048b7970c0d3b.pdf",
                        "title": "6В01707 Kazakh language and literature СШ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/cc3a555ed2ab26bd2eaeac3b8d86b663.pdf",
                        "title": "6В01708 English with additional learning of a second foreign language (part-time 2 years)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/e980d237f45fb7d1d7f448197a4f2c9e.pdf",
                        "title": "6В01708 English with additional learning of a second foreign language (part-time 3 years)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/2d2effec3017942933bfb45e2cd42152.pdf",
                        "title": "6В01708 English with additional learning of a second foreign language (full-time 4 years)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/3430ee7fe351af001578e3add5ec7447.pdf",
                        "title": "6В01733 Russian language and literature in schoos with Russian and non-Russian languages of instruction ВВ"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/75c23552dea940d1367c887c66dc4d54.pdf",
                        "title": "6В01733 Russian language and literature in schoos with Russian and non-Russian languages of instruction ТиПО"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/cfeb5b4e7792dc64f65a0356a5bf6f49.pdf",
                        "title": "6В01733 Russian language and literature in schoos with Russian and non-Russian languages of instruction"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/bda317f63d84aba79986d207515873fd.pdf",
                        "title": "6В02212 Domestic and world history"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/b4306eb62d641eb28a747d4ec6f7310f.pdf",
                        "title": "6В02313 Kazakh philology"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/1029/f43bf08b2a80cad182568bb5968a0cae.pdf",
                        "title": "6В03115 Psychology (full-time 4 years, full-time 3 years)"
                    }]
                }
            },
            {
                faculty: "usefulinfo.students.minorCoursesCatalog",
                documents: {
                    ru: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/1126/9bf5a90725823263c229d1736ca63ade.pdf",
                            "title": "Каталог курсов по дополнительной образовательной программе Minor 2024-2025"
                        }
                    ],
                    kz: [{
                        "url": "https://abu.edu.kz/uploads/68/268/1126/3c50bdb9cbdc7a33af61f466c4725318.pdf",
                        "title": "Minor қосымша білім беру бағдарламасы бойынша курстар каталогы 2024-2025"
                    }],
                    en: [{
                        "url": "https://abu.edu.kz/uploads/68/268/1126/e530facb7452180d5bdba744ba7d222a.pdf",
                        "title": "Course catalog for additional educational program Minor 2024-2025"
                    }]
                }
            }


        ]

    },
    {
        year: "2023-2024",
        children: [
            {
                faculty: "usefulinfo.students.faculty1",
                documents: {
                    ru: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/2cd39b5c37a26c6e5c3c02a3a658cc98.pdf",
                            "title": "6В04220 Юриспруденция"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/100d4756fdfefe188e0156bf966e2f2c.pdf",
                            "title": "6В04220 Юриспруденция 2 года"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/1bc3212ed42cefcaebc59604975cb585.pdf",
                            "title": "6В04220 Юриспруденция 3 года"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/1868e00f462c367b4c6ba80cb25d313a.pdf",
                            "title": "6В12330 Правоохранительная деятельность (очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/052e6405d3952358806eee8b1307418d.pdf",
                            "title": "6В04221 Государственная служба и судебная система"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/097f8320a09c1264ad1ff736f012e6d3.pdf",
                            "title": "6В04222 Следственно-прокурорская деятельность"
                        }
                    ],
                    kz: [{
                        "url": "https://abu.edu.kz/uploads/68/268/888/45327700d129c47764bf354479a85c1f.pdf",
                        "title": "6В04220 Құқықтану"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/888/b122447c94896c15ccc54ae7737511d1.pdf",
                        "title": "6В04220 Құқықтану 2 жыл"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/888/82c3016580e11b56af6fb82be50f739f.pdf",
                        "title": "6В04220 Құқықтану 3 жыл"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/888/df105b214c8dcab9b7fa7b0d824ddabc.pdf",
                        "title": "6В12330 Құқық қорғау қызметі (күндізгі 4 жыл)"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/888/5b01ba3bbccefb08aed920ba6587485f.pdf",
                        "title": "6B04221 Мемлекеттік қызмет және сот жүйесі"
                    },
                    {
                        "url": "https://abu.edu.kz/uploads/68/268/888/2257f22349c3fc2d8a34095248f06cac.pdf",
                        "title": "6В04222 Тергеу-прокурорлық қызмет"
                    }],
                    en: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/313136aa14968ecb1c15ef5b76b76dfe.pdf",
                            "title": "6В04220 Jurisprudence"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/e71821bbc2b36a5efedfacbc83e4e7da.pdf",
                            "title": "6В04220 Jurisprudence 2 years"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/ade00ec75dafc94468b17af72c676da6.pdf",
                            "title": "6В04220 Jurisprudence 3 years"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/de458e5c200277fdc846869976d9aa17.pdf",
                            "title": "6В12330 Law enforcement (Full-time)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/3b1e739b78cd16e41846bba3dcefb957.pdf",
                            "title": "6B04221 Public service and the judicial system"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/888/83eaaaa8fb2f6866059037bb4f3955eb.pdf",
                            "title": "6В04222 Investigative and prosecutorial activities"
                        }
                    ]
                }
            },
            {
                faculty: "usefulinfo.students.faculty2",
                documents: {
                    ru: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/3dd6b8ff6acb7722abfa0ccca60f785e.pdf",
                            "title": "6В05121 БИОТЕХНОЛОГИЯ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/325afb91f04f36b42136796fb3951894.pdf",
                            "title": "6В04118 Финансы (очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b05fbd5496ba6f54c12fa5d3df402927.pdf",
                            "title": "6В04118 Финансы (очное 2,9 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/417ef5ccd84e73a716baf4b20c4aa094.pdf",
                            "title": "6В04118 Финансы (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b1d8340dd2311c740294bce77b36c990.pdf",
                            "title": "6В04117 Учет и аудит (очное 2,9 год)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/12ad791792de288d684297b7d00e5ff6.pdf",
                            "title": "6В04117 Учет и аудит (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/9f7a09456374bdc2b5822d97bd68d013.pdf",
                            "title": "6В04116 Экономика ( очное-4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b014c70e31bfe5c37c9eaac75273bd7e.pdf",
                            "title": "6В04116 Экономика ( очное-2.9 год)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/ee6803d8751555687b6706912db4b33c.pdf",
                            "title": "6В04116 Экономика ( очное-2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/8b5612aca46cfa5c9346fbdce4d6a381.pdf",
                            "title": "6В04119 Государственное и местное управление (очное 2,9 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/cb1ddb8e3cd0a9f98bd20250538098d5.pdf",
                            "title": "6В04119 Государственное и местное управление (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/87ae24ebeb49bf6e897012002dbba49d.pdf",
                            "title": "6В01509 – ХИМИЯ-БИОЛОГИЯ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/fe1a0aeafc17460b481863b19559424f.pdf",
                            "title": "6В01509 – ХИМИЯ-БИОЛОГИЯ (очное, 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/e449da06e510ecfb6a430e0f3af68176.pdf",
                            "title": "6В01509 – ХИМИЯ-БИОЛОГИЯ (очное, 2 года 10 месяцев)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/c83f45936f79333d1284d6892cea986e.pdf",
                            "title": "6В01404 Физическая культура и спорт"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b071a5a036de0828909ed266753648b2.pdf",
                            "title": "6В01404 Физическая культура и спорт ВВ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/2ed1ad807e5c90deb6883ed49723b300.pdf",
                            "title": "6B06123 IT в здравоохранении"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b275d58a775c6068acec0b57abeddec3.pdf",
                            "title": "6В06102 «Информационные системы»"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/fbf935eeb9d89fc2b2ad121a91580ce2.pdf",
                            "title": "6В06122 Информатика"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/dc73e844f7eeecf798857facd9499359.pdf",
                            "title": "6В07125 – ЭЛЕКТРОЭНЕРГЕТИКА"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/17c285be4bd76fab60a86b8d3ecbf054.pdf",
                            "title": "6В01404 Физическая культура и спорт СПО"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/94bb1b36fea479d504834b6c0bcf936c.pdf",
                            "title": "6B01403 Начальная военная подготовка (очное, 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/fbdbe13b1769972362e160be8d894487.pdf",
                            "title": "6B01403 Начальная военная подготовка"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/766cb1689fe8c1b1cec8699d51dc56fd.pdf",
                            "title": "6В04119 Государственное и местное управление"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/6e3ab60c58b75767d460fb54506c6ce4.pdf",
                            "title": "6В04117 Учет и аудит"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/fbd9c24f7f138be2ca77a925737b8332.pdf",
                            "title": "6В07527 Стандартизация, сертификация и метрология в строительстве"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/a917a4af50e53c0360a5458008fdd37f.pdf",
                            "title": "6В06124 Вычислительная техника и программное обеспечение"
                        }

                    ],
                    kz: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/130c1640e0173670e5b02f278d521937.pdf",
                            "title": "6В01403 Бастапқы әскери дайындық"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/cfa428df9b1ac45fb0c56d605b902d48.pdf",
                            "title": "6В01403 Бастапқы әскери дайындық (күндізгі 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/e31a7535e5b05461aa66dcee1cac015d.pdf",
                            "title": "6В01404 Дене шынықтыру және спорт"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/8b9410f825d3ad1c38d4bc9d05dd952f.pdf",
                            "title": "6В06123 Денсаулық сақтаудағы IT"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/b11776d2792bb2af58e76e1ec10847e9.pdf",
                            "title": "6В04116 Экономика"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/3e0c6f046bd40bff13e75dee97a554cb.pdf",
                            "title": "6В04116 Экономика 4 жыл"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/ade99eb34d6efbdca5eaf16b0b995d70.pdf",
                            "title": "6В04116 Экономика- 2.9 жыл"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/fba07d02081a71f5884a0834b5bfdad6.pdf",
                            "title": "6В04116 Экономика 2 жыл"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/d8db09406492dfe83d09d758305edf87.pdf",
                            "title": "6В04117 Есеп және аудит (күндізгі 4 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/c5d6835e02add931467b69e35fed90ba.pdf",
                            "title": "6В04117 Есеп және аудит (күндізгі 2,9 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/ecf62f78aa66fdee1530b883189a0a09.pdf",
                            "title": "6В04117 Есеп және аудит (күндізгі 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/143cebe756776cfdd1ee4f32508f6721.pdf",
                            "title": "6В04118 Қаржы СШ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/10edfe721e866357b9629978315e16c3.pdf",
                            "title": "6В04118 Қаржы СПО"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/893c8ecadb5937a52bbe1d55ae0cf8a2.pdf",
                            "title": "6В04118 Қаржы ВВ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/2dbb4090329471838406cdd2ebbb9b14.pdf",
                            "title": "6В05121 Биотехнология"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/a1869361fbaa97126674036cd617b378.pdf",
                            "title": "6В06102 Ақпараттық жүйелер"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/7b996918da764e9308c1e2fed7447657.pdf",
                            "title": "6В06122 Информатика (күндізгі 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/bfad3331024777f39323f4b16578db18.pdf",
                            "title": "6В06122 Информатика (күндізгі 2,9 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/6c5b5e25b045cc181e57dfc71e629863.pdf",
                            "title": "6В06124 Есептеу техникасы және бағдарламалық қамтамасыз ету"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/7997047d82f360b01d70ac820e092945.pdf",
                            "title": "6В06124 Есептеу техникасы және бағдарламалық қамтамасыз ету (Оқу мерзімі 2 жыл 9 ай)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/dd3afaa350e54fb1377645fe8602b01f.pdf",
                            "title": "6В01509 Химия-Биология"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/7cd25b63bc9eb1393112281ada68f93e.pdf",
                            "title": "6В01404 Дене шынықтыру және спорт ССО"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/9fa8c76c522272598e94adef552524f4.pdf",
                            "title": "6В01509 Химия-Биология (күндізгі, 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/84a765e5d8753bc1c2a5d1026ff4769e.pdf",
                            "title": "6В01404 Дене шынықтыру және спорт ВВ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/a9a43c5507c0f11c5825901d13ce4d05.pdf",
                            "title": "6В04119 Мемлекеттік және жергілікті басқару (күндізгі 4 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/18234d482ec7dff8b41517366ddde333.pdf",
                            "title": "6В04119 Мемлекеттік және жергілікті басқару 2 ж"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/889/1d003dc177a13560951f0293ecae34a3.pdf",
                            "title": "6В04119 Мемлекеттік және жергілікті басқару 2,9 ж"
                        }
                    ],
                    en: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/7b13668a08c7c348c89b808439c60d0d.pdf",
                            "title": "6В05121 - BIOTECHNOLOGY"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/93a46808ad3b5b9a87928ea534f6e877.pdf",
                            "title": "6B04118 Finance (full-time 4 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/d9ec5bf61c05a3ed1c1967aa89aa038c.pdf",
                            "title": "6B04118 Finance (full-time 2,9 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/5bbc8f7738f13e61c5cc0b8809433742.pdf",
                            "title": "6B04118 Finance (full-time 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/a7a48bfe631e99d87d2f5ec49c980206.pdf",
                            "title": "6В04117 Aссоunting and auditing (full-time 2,9 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/7693eb66c14c1ca918464e89d3f5aa7b.pdf",
                            "title": "6В04117 Accounting and augiting (full-time 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/c20f385e10f9089d2974a5d03ed3e25c.pdf",
                            "title": "6В04116 Economics ( full- tim 4 yars)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/ed400c3adc3cb7c89a59c40470378f70.pdf",
                            "title": "6В04116 Economics ( full- tim 2.9 yars)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b13d647d79e07eb5cc8568c68c61bdc0.pdf",
                            "title": "6В04116 Economics ( full- tim 2 yars)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/0125f37c8645c8534695582b1095c336.pdf",
                            "title": "6В04119 State and local government (full-time 2,9 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/d07092bb27a7f6f0cdbea004fedb17a5.pdf",
                            "title": "6В04119 State and local government (full-time 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/6dc0d0c90168926d64907119839df372.pdf",
                            "title": "6В01509 - CHEMISTRY- BIOLOGY"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/0b9dcaf8fa26486fe377cb8347dd7e82.pdf",
                            "title": "6В01509 - CHEMISTRY- BIOLOGY (full-time, 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/c300eaddc53b5cf0778a74abb87e9878.pdf",
                            "title": "6В01509 - CHEMISTRY- BIOLOGY (full-time, 2 YEARS 10 MONTHS)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/706ef337ac614e3c30e889178cfdb6c1.pdf",
                            "title": "6B01404 Physical culture and sports"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/61f2396fcbd752eedb5709ffac5d848d.pdf",
                            "title": "6B01404 Physical culture and sports ВВ"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/c421215629bc0833fc00d6696653b730.pdf",
                            "title": "6B06123 \"IT IN HEALTHCARE''"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/1fec5716acbea06a7363ab129ffe3685.pdf",
                            "title": "6В06102 «Information systems»"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/b70c22b9fa7aae1c346f2b30d9a9e212.pdf",
                            "title": "6B06122 \"INFORMATICS\""
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/c4a957f0273fccb060eae18619bf2f5f.pdf",
                            "title": "6В07125 ELECTROENERGETICS"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/fe16661ea41bcc83b74ce80a6f568abd.pdf",
                            "title": "6B01404 Physical culture and sports СПО"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/eef36f41a7fb75a8e1302d8697f8a987.pdf",
                            "title": "6B01403 INITIAL MILITARY TRAINING (full-time, 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/e6b0510d3aeb8bdaf6a93f348f4cf404.pdf",
                            "title": "6B01403 INITIAL MILITARY TRAINING"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/5cffcedf9055f9c883063da85b45037c.pdf",
                            "title": "6В04119 State and local government"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/20b3822a3d779355a6c08b14b62b2a56.pdf",
                            "title": "6В04117 Accounting and augiting"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/6b678fef9fb150af13f108be572797e4.pdf",
                            "title": "6В07527 Standardization, certification and metrology in construction"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/361/3a7c516ae6f152b3afedf77997e2f129.pdf",
                            "title": "6В06124 Computer technology and software"
                        }

                    ]
                }
            },
            {
                faculty: "usefulinfo.students.faculty3",
                documents: {
                    ru: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/1ed5f8cc88dba8741fd8c783083e08f3.pdf",
                            "title": "6В01201 Дошкольное обучение и воспитание ( очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/ba9ef6c0755da395aba48e310680fe56.pdf",
                            "title": "6В01201 Дошкольное обучение и воспитание 2 года 9 месяцев"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/41ac489bba05d25944e3af2e678dfdd7.pdf",
                            "title": "6В01201 Дошкольное обучение и воспитание (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/4ea4c44dc0a20068f83d4a9ec0c2db9b.pdf",
                            "title": "6В01302 Педагогика и методика начального обучения"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/4d77a921929da3e2452b1fdeb06a7974.pdf",
                            "title": "6B01732 Русский язык и литература  в школха с нерусским языком обучения"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/6da6784aae8f579e5012f9b7c9c2cf31.pdf",
                            "title": "6В01606 История (очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/061e8c61cd4c0f4ecf6bab1805da7e8d.pdf",
                            "title": "6В01606 ИСТОРИЯ (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/9b022a6de83ae68651d32100bab70d49.pdf",
                            "title": "6В01707 Казахский язык и литература"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/bbc394e38a68acc0d1e29c863a1462e1.pdf",
                            "title": "6В01708_Английский язык с дополнительным изучением второго иностранного языка (очное 4 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/d8d3267e1807ba674f8da3ee0879f8a5.pdf",
                            "title": "6В01708_Английский язык с дополнительным изучением второго иностранного языка (очное 3 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/234f50913a66bc1835feab89f607a5a3.pdf",
                            "title": "6В01708_Английский язык с дополнительным изучением второго иностранного языка (очное 2 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/25ad217ab77a207c05fd87c797122f6c.pdf",
                            "title": "6В02212 Отечественная и всемирная история"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/666c403ea91ecb5202e6778703414b77.pdf",
                            "title": "6В03115  Психология (очное 4 года, очное 3 года)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/affc0665d144db5ff49f968ff04e081d.pdf",
                            "title": "6В01510 География-История 2023 (СШ)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/cd7d19d4a083f4145e51638495647ae3.pdf",
                            "title": "6В01510 География-История ВВ"
                        }
                    ],
                    kz: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/cdb4cc910b9a95c6838e6990818e5d54.pdf",
                            "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу (күндізгі 4 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/ad06e7556f463ddb97799e52142234e3.pdf",
                            "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу (күндізгі 2 жыл 9 ай)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/06a09b710388ed8fd740e38b7abb151d.pdf",
                            "title": "6В01201 Мектепке дейінгі оқыту және тәрбиелеу (күндізгі 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/fd51804a4b20116b47ece6af1cd1e606.pdf",
                            "title": "6В01302 Бастауышта оқыту педагогикасы мен әдістемесі"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/ae72283d5e6f802d2c8d6d41165fe729.pdf",
                            "title": "6В01732 Орыс тілінде оқытпайтын мектептердегі орыс тілі мен әдебиеті"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/7e0905655ac8cb9a1706f8a9f5660dc5.pdf",
                            "title": "6В01606 Тарих (очное 4 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/abccdb74d236247f415edd4b6c96e4d5.pdf",
                            "title": "6В01606 Тарих (очное 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/1b7a8e487416fbfe78c8f3b29fe84ae8.pdf",
                            "title": "6В01707 Қазақ тілі мен әдебиеті"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/b2a1ed0e84b0b236c06f34d9a048c30d.pdf",
                            "title": "6В01708_Ағылшын тілі қосымша екінші шетел тілін оқытумен (күндізгі 4 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/bd9207443a8c4b5a081adc139349d15e.pdf",
                            "title": "6В01708_Ағылшын тілі қосымша екінші шетел тілін оқытумен (күндізгі 3 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/c684ff5bac2081a1787a19b995cb5a88.pdf",
                            "title": "6В01708_Ағылшын тілі қосымша екінші шетел тілін оқытумен (күндізгі 2 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/c0499b7969665345c6e257fb040ae6bc.pdf",
                            "title": "6В02212 Отан және дүние жүзі тарихы"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/a45191a0a85cfa755093bb27cf95f61e.pdf",
                            "title": "6В03115 Психология (күндізгі 4 жыл, күндізгі 3 жыл)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/35ec8a99e512c5b6ce07f5016db265b6.pdf",
                            "title": "6В01510 География-Тарих (СШ)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/890/265ca28e2c5d1dc9c655146b87ba07a8.pdf",
                            "title": "6В01510 География-Тарих ВВ"
                        }
                    ],
                    en: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/367227753e47aa53bbf9313e6b14bbe3.pdf",
                            "title": "6В01201 Preschool education and upbringing (Full-time 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/f740d1bc4bdf8bfc57802c55d23c6a27.pdf",
                            "title": "6В01201 Preschool education and upbringing (Full-time 2 years 8 months  )"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/226f2dc43dca8e6497a2d6d4e7d77414.pdf",
                            "title": "6В02313 KAZAKH PHILOLOGY"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/6c8156173e5e9a5a3fd3beeb633f7439.pdf",
                            "title": "6В01606 History (full-time, 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/43d2589df979bf4174b8f70040d2e3cb.pdf",
                            "title": "6В01708_English with additional learning of a second foreign language (full-time 4 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/58403a7ceaadeee4f40042cf37e082a6.pdf",
                            "title": "6В01708_English with additional learning of a second foreign language (part-time 3 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/24765ffe56b4823d09a8904c841cf7ce.pdf",
                            "title": "6В01708_English with additional learning of a second foreign language (part-time 2 years)"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/e5ff7ac7571cb0f9054a72805afbf882.pdf",
                            "title": "6В01707 Kazakh language and literature"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/bfd1354fee7ecb1c36c41be624638526.pdf",
                            "title": "6В01732 Russian language and literature in the school with non-Russian language of training"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/1271cec54dbdc19ec211d4f533b8fe49.pdf",
                            "title": "6В01510 Geography-History"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/78d3be4856a51c29fe95f3a169618aff.pdf",
                            "title": "6В01606 History"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/ee01a22194b283ec37f66e85d0733f23.pdf",
                            "title": "6В02212 Domestic and world history"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/281c8dd8782073bea82493e0c0c706c7.pdf",
                            "title": "6В01101 Pedagogy and psychology"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/d24ee23e7f02142ff68c02375c1d5078.pdf",
                            "title": "6В01201 Preschool education and upbringing"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/1c27c8f439bff9b569a2501c57f6b5e1.pdf",
                            "title": "6В01302 Pedagogy and methods of primary education"
                        },
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/719/ccb01945cd7fb138d78fbad88aa869d3.pdf",
                            "title": "6В03115 Psychology"
                        }
                    ]
                }
            },
            {
                faculty: "usefulinfo.students.minorCoursesCatalog",
                documents: {
                    ru: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/776/0764b00a95263ecc64bbd0703405c7c4.pdf",
                            "title": "Каталог курсов по дополнительной образовательной программе Minor 2023-2024"
                        }
                    ],
                    kz: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/776/e06d1c8ff9a744a342537f0aad6194d3.pdf",
                            "title": "Minor қосымша білім беру бағдарламасы бойынша курстар каталогы 2023-2024"
                        }

                    ],
                    en: [
                        {
                            "url": "https://abu.edu.kz/uploads/68/268/776/8f1d0fe7309d25cadc0c493ac149fdcd.pdf",
                            "title": "Сourse catalog for additional educational program Minor 2023-2024"
                        }
                    ]
                }
            }
        ]
    },
]
