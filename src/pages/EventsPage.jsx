import { useLocale } from "@/shared/context/locale"
import { fileUrl } from "@/shared/lib/utils"
import { CardMenu } from "@/shared/ui/card-menu"

export const EventsPage = () => {
    const { locale } = useLocale()
    return (<section className="container">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {data.map(d => <CardMenu img={fileUrl + `/events/${d.img}`} trigger={d.title} children={
                <div class="bg-white shadow-lg rounded-2xl p-6 max-w-3xl mx-auto space-y-6">
                    <div dangerouslySetInnerHTML={{ __html: d.content[locale] }} />
                </div>
            } />)}
        </section>
    </section>)
}


const data = [
    {
        title: "DEBATE SHOW",
        img: "/debats.png",
        content: {
            ru: `
 <div>
    <h2 class="text-xl font-bold text-gray-800 mb-2">🇷🇺 DEBATE SHOW</h2>
    <p class="text-sm text-gray-600 mb-1">
      🗓 <strong>16 апреля 2025 года</strong> состоялось наше долгожданное дебат-шоу.
    </p>
    <p class="text-sm text-gray-700">
      В увлекательной дискуссии яркое «противостояние» продемонстрировали <strong>Ерасыл Өміралінов</strong> и <strong>Нурсултан Кадыргазиев</strong>.<br />
      🏆 По результатам шоу <strong>переходящий кубок завоевал — Нурсултан!</strong><br />
      Огромная благодарность всем, кто поддержал!<br />
      <strong>От всей души поздравляем победителя и всех участников!</strong> 🔥
    </p>
  </div>
            `,
            kz: `<div>
    <h2 class="text-xl font-bold text-gray-800 mb-2">🇰🇿 DEBATE SHOW</h2>
    <p class="text-sm text-gray-600 mb-1">
      🗓 <strong>2025 жылдың 16 сәуірінде</strong> көптен күткен дебат-шоуымыз болды.
    </p>
    <p class="text-sm text-gray-700">
      Қызықты ойынның талқысында <strong>Өмірәлінов Ерасыл</strong> және <strong>Қадырғазыев Нұрсұлтан</strong> тартысты "жекпе-жек" көрсетті.<br />
      🏆 Шоу нәтижесінде <strong>ауыспалы кубок иегері атанған: Нұрсұлтан мырза!</strong><br />
      Қолдау білдірген жандарға мың алғыс!<br />
      <strong>Жеңімпаздарды және қатысушыларды шын жүректен құттықтаймыз!</strong> 🔥
    </p>
  </div>`,
            en: `
 <div>
    <h2 class="text-xl font-bold text-gray-800 mb-2">🇬🇧 DEBATE SHOW</h2>
    <p class="text-sm text-gray-600 mb-1">
      🗓 On <strong>April 16, 2025</strong>, our long-awaited debate show took place.
    </p>
    <p class="text-sm text-gray-700">
      In a captivating discussion, <strong>Yerasyl Omiralinov</strong> and <strong>Nursultan Kadyrgaziev</strong> delivered an intense “face-off.”<br />
      🏆 As a result of the show, <strong>the winner of the rotating trophy was — Mr. Nursultan!</strong><br />
      Huge thanks to everyone who supported us!<br />
      <strong>We sincerely congratulate the winner and all participants!</strong> 🔥
    </p>
  </div>
            `

        }
    },
    {
        title: "ICE CREAM TEAM BUILDING",
        img: "/ice-cream.jpg", // замените на нужный путь к изображению
        content: {
            kz: `<div><h2 class="text-xl font-bold text-gray-800 mb-2">🇰🇿 ICE CREAM TEAM BUILDING</h2><p class="text-sm text-gray-700 mb-1">📢Қымбатты 1 курс студенттері!</p><p class="text-sm text-gray-700">✨18 мамыр күні Жастар ісі жөніндегі комитет дәстүрлі 1 курс студенттеріне арналған табиғат аясындағы ICE CREAM TEAM BUILDING өткізетінін хабарлаймыз!<br />⭐Іс-шара барысында сіздер үшін пайдалы тренингтер мен қызықты ойындар, жүлделі сайыстар әрі естен кетпес көңілді басқосу ұйымдастырылады!<br />⛹🏻Егер сіз салауатты өмір салтына бей-жай қарамасаңыз, демалыс күнгі бос уақытыңызды пайдалы да қызықты өткізгіңіз келсе, қатарымызға қосылып, ICE CREAM TEAM BUILDING шарасына қатысыңыз!<br />🌲Іс-шара Қарағайлы орман алқабында орналасқан демалыс базасында өтеді.<br />🕕 Жиналу уақыты: 6:00-ден 6:30-ге дейін<br />📍 Жиналу орны: Бас ғимарат ауласы (Мәңгілік ел, 11)<br />❗Орындар шектеулі! Іс-шараға қатысу үшін Жастар ісі жөніндегі комитетке хабарласып, арнайы тіркелуден өтіңіздер</p></div>`,
            ru: `<div><h2 class="text-xl font-bold text-gray-800 mb-2">🇷🇺 ICE CREAM TEAM BUILDING</h2><p class="text-sm text-gray-700 mb-1">Уважаемые студенты 1 курса!</p><p class="text-sm text-gray-700">✨18 мая Комитет по делам молодежи проводит традиционный ICE CREAM TEAM BUILDING на природе для студентов первого курса!<br />⭐Вас ждут полезные тренинги, увлекательные игры, соревнования с призами и незабываемое весёлое общение!<br />⛹🏻Если вы неравнодушны к здоровому образу жизни и хотите провести выходной с пользой и удовольствием — присоединяйтесь к нам на ICE CREAM TEAM BUILDING!<br />🌲Мероприятие пройдёт на базе отдыха в сосновом бору.<br />🕕 Время сбора: с 6:00 до 6:30<br />📍 Место сбора: двор главного корпуса (пр. Мәңгілік ел, 11)<br />❗Количество мест ограничено! Для участия необходимо связаться с Комитетом по делам молодежи и пройти регистрацию.</p></div>`,
            en: `<div><h2 class="text-xl font-bold text-gray-800 mb-2">🇬🇧 ICE CREAM TEAM BUILDING</h2><p class="text-sm text-gray-700 mb-1">Dear First-Year Students!</p><p class="text-sm text-gray-700">✨On May 18, the Youth Affairs Committee is organizing the traditional ICE CREAM TEAM BUILDING in nature, specially for first-year students!<br />⭐The event will feature useful trainings, fun games, prize contests, and an unforgettable, cheerful gathering!<br />⛹🏻If you're into a healthy lifestyle and want to spend your weekend in a fun and meaningful way, join us for the ICE CREAM TEAM BUILDING!<br />🌲The event will take place at a recreation base located in the Pine Forest.<br />🕕 Gathering time: from 6:00 to 6:30<br />📍 Meeting point: Main building courtyard (Mangilik El, 11)<br />❗Spots are limited! To participate, please contact the Youth Affairs Committee and complete registration.</p></div>`
        }
    },
    {
        title: "MISS ABU - 2025",
        img: "/missabu.jpeg",
        content: {
            ru: `
<div>
  <h2 class="text-2xl font-bold text-pink-600 mb-2">👑 MISS ABU - 2025</h2>
  <p class="text-sm text-gray-600 mb-1">
    🎉 <strong>25 марта</strong> на сцене Театра им. Абая прошёл традиционный конкурс красоты и грации — "Miss ABU - 2025", организованный студенческой организацией «Альянс студентов» Alikhan Bokeikhan University (@qsa_bokeikhan).
  </p>
  <p class="text-sm text-gray-700">
    🌟 В конкурсе приняли участие 8 талантливых студенток, продемонстрировавших интеллект, артистизм, эрудицию и обаяние. Победительницы:<br />
    👑 <strong>MISS ABU 2025</strong> — Әділбекова Гүлім<br />
    🥇 I Vice Miss — Баяқыш Елназ<br />
    🥈 II Vice Miss — Минуар Шұғыла<br />
    🥉 III Vice Miss — Қадылханова Еркежан<br />
    💖 Приз зрительских симпатий — Саулебекова Зарина<br />
    🎁 Участницы получили дипломы и подарки от спонсоров.<br />
    👏 Благодарим всех за участие, поддержку и вклад в праздник!
  </p>
</div>
      `,
            kz: `
<div>
  <h2 class="text-2xl font-bold text-pink-600 mb-2">👑 MISS ABU - 2025</h2>
  <p class="text-sm text-gray-600 mb-1">
    🎉 <strong>25 наурыз</strong> күні Абай атындағы театр сахнасында "Miss ABU - 2025" байқауы өтті. Іс-шараны Alikhan Bokeikhan University-дің студенттік ұйымы (@qsa_bokeikhan) ұйымдастырды.
  </p>
  <p class="text-sm text-gray-700">
    🌟 Байқауға 8 талантты студент қыз қатысып, зеректік, шығармашылық, білімділік пен тартымдылықтарын көрсетті. Жеңімпаздар:<br />
    👑 <strong>MISS ABU 2025</strong> — Әділбекова Гүлім<br />
    🥇 I Вице Мисс — Баяқыш Елназ<br />
    🥈 II Вице Мисс — Минуар Шұғыла<br />
    🥉 III Вице Мисс — Қадылханова Еркежан<br />
    💖 Көрермендер көзайымы — Саулебекова Зарина<br />
    🎁 Барлық қатысушыларға дипломдар мен демеушілер сыйлықтар табыстады.<br />
    👏 Қатысушыларға, көрермендерге және серіктестерге алғыс білдіреміз!
  </p>
</div>
      `,
            en: `
<div>
  <h2 class="text-2xl font-bold text-pink-600 mb-2">👑 MISS ABU - 2025</h2>
  <p class="text-sm text-gray-600 mb-1">
    🎉 On <strong>March 25</strong>, the traditional "Miss ABU - 2025" beauty and grace contest took place at the Abai Theatre, organized by the Student Alliance of Alikhan Bokeikhan University (@qsa_bokeikhan).
  </p>
  <p class="text-sm text-gray-700">
    🌟 Eight talented students took part, showcasing intelligence, artistry, knowledge, and charm. Winners:<br />
    👑 <strong>MISS ABU 2025</strong> — Gulim Adilbekova<br />
    🥇 I Vice Miss — Elnaz Bayakysh<br />
    🥈 II Vice Miss — Shugyla Minuar<br />
    🥉 III Vice Miss — Erkzhan Kadylkhanova<br />
    💖 Audience Choice — Zarina Saulebekova<br />
    🎁 All received diplomas and gifts from sponsors.<br />
    👏 Thanks to all participants, the audience, and our partners for making this event special!
  </p>
</div>
      `
        }
    }
]
