import { fileUrl, imgFallback } from "@/shared/lib/utils";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/shared/ui/drawer";
import { FileCard } from "@/shared/ui/file-card";
import { ArrowUpRight, FileText, Instagram, Mail, MessageCircle, Music2, PhoneIcon, X } from "lucide-react";
import { FormattedMessage, useIntl } from "react-intl";

const selfgovermentList = [
  {
    label: "selfgoverment.ask",
    img: "/selfgoverment/ask/logo.png",
    leaderImg: "/selfgoverment/ask/leader.png",
    number: "+7 705 635 49 27",
    instagram: "qsa_bokeikhan",
    instagramUrl: "https://www.instagram.com/qsa_bokeikhan?stkn=OHZva2J6cWlwdXJ1",
    whatsappUrl: "https://chat.whatsapp.com/B6t3jvLP2osCYhFHrtcjCM?s=cl&p=i&mlu=4&ilr=4",
    tiktokUrl: "https://www.tiktok.com/@qsa_bokeikhan?_r=1&_t=ZS-99uRECvqQLa",
    registration: true,
    documents: [
      { name: "selfgoverment.plan", link: "/selfgoverment/ask/plan.pdf" },
      { name: "selfgoverment.studentlist", link: "/selfgoverment/ask/list.pdf" },
      { name: "selfgoverment.structure", link: "/selfgoverment/ask/leaders.pdf" },
      { name: "selfgoverment.regulations", link: "/selfgoverment/ask/regulations.pdf" },
      { name: "selfgoverment.report", link: "/selfgoverment/ask/independence-day.pdf" },
    ],
  },
  {
    label: "selfgoverment.everest",
    img: "/selfgoverment/everest/logo.jpg",
    leaderImg: "/selfgoverment/everest/leader.jpg",
    number: "+7 705 268 22 75",
    instagram: "everest_bokeikhan",
    instagramUrl: "https://www.instagram.com/everest_bokeikhan?stkn=MWtzaWswbnZhNXhucg%3D%3D&utm_source=qr",
    whatsappUrl: "https://chat.whatsapp.com/G6MbP3xWxv15hjE9H4DEJW?s=cl&p=i&mlu=4&ilr=4",
    tiktokUrl: "https://www.tiktok.com/@everest_idc?_r=1&_t=ZS-99uQrJPcec0",
    registration: true,
    content: "selfgoverment.everest.content2026",
    documents: [
      { name: "selfgoverment.plan", link: "/selfgoverment/everest/plan.pdf" },
      { name: "selfgoverment.studentlist", link: "/selfgoverment/everest/list.pdf" },
      { name: "selfgoverment.structure", link: "/selfgoverment/everest/structure.pdf" },
      { name: "selfgoverment.regulations", link: "/selfgoverment/everest/regulations.pdf" },
      { name: "selfgoverment.report", link: "/selfgoverment/everest/report.pdf" },
    ],
  },
  {
    label: "selfgoverment.jastarRuhy",
    img: "/selfgoverment/jastar-ruhy/logo.jpg",
    leaderImg: "/selfgoverment/jastar-ruhy/leader.jpg",
    number: "+7 700 677 03 14",
    instagram: "jastar_ruhy_bokeikhan",
    instagramUrl: "https://www.instagram.com/jastar_ruhy_bokeikhan?stkn=ejJraDNhcHhueGl1&wa_status_inline=true",
    whatsappUrl: "https://chat.whatsapp.com/E9Fdll4IRxN2unQ8JQo5pd?mode=gi_t",
    tiktokUrl: "https://www.tiktok.com/@jastar_ruhy_bokeikhan?_r=1&_t=ZS-99uSL3YEVOu",
    content: "selfgoverment.jastarRuhy.content2026",
    documents: [
      { name: "selfgoverment.plan", link: "/selfgoverment/jastar-ruhy/plan.pdf" },
      { name: "selfgoverment.studentlist", link: "/selfgoverment/jastar-ruhy/list.pdf" },
      { name: "selfgoverment.structure", link: "/selfgoverment/jastar-ruhy/structure.pdf" },
      { name: "selfgoverment.regulations", link: "/selfgoverment/jastar-ruhy/regulations.pdf" },
    ],
  },
  {
    label: "selfgoverment.lawyers",
    img: "/selfgoverment/lawyers/logo.jpg",
    leaderImg: "/selfgoverment/lawyers/leader.jpg",
    number: "+7 771 538 9720",
    instagram: "smu._bokeikhan",
    instagramUrl: "https://www.instagram.com/smu._bokeikhan?stkn=MWJhbmhiaHpuaGlz",
    whatsappUrl: "https://chat.whatsapp.com/HNchpPGfW9FCjgO1oRndfD?s=sw&p=i&mlu=4&ilr=4",
    tiktokUrl: "https://www.tiktok.com/@_smu_bokeikhan?_r=1&_t=ZS-99uTk8pVaPy",
    registration: true,
    content: "selfgoverment.lawyers.content2026",
    documents: [
      { name: "selfgoverment.plan", link: "/selfgoverment/lawyers/plan.pdf" },
      { name: "selfgoverment.studentlist", link: "/selfgoverment/lawyers/list.pdf" },
      { name: "selfgoverment.structure", link: "/selfgoverment/lawyers/structure.pdf" },
      { name: "selfgoverment.regulations", link: "/selfgoverment/lawyers/regulations.pdf" },
      { name: "selfgoverment.report", link: "/selfgoverment/lawyers/report.pptx" },
    ],
  },
  {
    label: "selfgoverment.urker",
    img: "/selfgoverment/urker/logo.jpg",
    leaderImg: "/selfgoverment/urker/leader.jpg",
    number: "+7 706 707 10 29",
    instagram: "urker_bokeikhan",
    instagramUrl: "https://www.instagram.com/urker_bokeikhan?stkn=MWFsN3l2ZTg0amxvcw==",
    whatsappUrl: "https://chat.whatsapp.com/Cv5k5ru9ZSB2bTd2iLszbe?s=cl&p=i&mlu=4&ilr=4",
    tiktokUrl: "https://www.tiktok.com/@urker_bokeikhan?_r=1&_t=ZS-99uS3b9YA1F",
    content: "selfgoverment.urker.content2026",
    documents: [
      { name: "selfgoverment.plan", link: "/selfgoverment/urker/plan.pdf" },
      { name: "selfgoverment.studentlist", link: "/selfgoverment/urker/list.pdf" },
      { name: "selfgoverment.structure", link: "/selfgoverment/urker/structure-2026-2027.pdf" },
      { name: "selfgoverment.regulations", link: "/selfgoverment/urker/regulations.pdf" },
    ],
  },
  // {
  //   label: "",
  //   img: "",
  //   leaderImg: "",
  //   number: "",
  //   email: "",
  // },
];

export const SelfGovernmentPage = () => {
  return (
    <section className="container relative py-8 md:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top,rgba(170,58,40,0.12),transparent_68%)]" />
      <header className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-primary" />
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          <FormattedMessage id="selfgoverment.title" />
        </h1>
      </header>
      <section className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {selfgovermentList.map((s, index) => (
          <GovermentItem goverment={s} index={index} key={s.label} />
        ))}
      </section>
    </section>
  );
};

const GovermentItem = ({ goverment: s, index }) => {
  const { formatMessage } = useIntl();
  const imageUrl = (path) => path.startsWith("/") ? path : fileUrl + path;
  const handlePointerMove = (event) => {
    if (event.pointerType === "touch") return;
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    card.style.setProperty("--mouse-x", `${x * 100}%`);
    card.style.setProperty("--mouse-y", `${y * 100}%`);
    card.style.setProperty("--rotate-x", `${(0.5 - y) * 12}deg`);
    card.style.setProperty("--rotate-y", `${(x - 0.5) * 14}deg`);
    card.style.setProperty("--parallax-x", `${(x - 0.5) * 12}px`);
    card.style.setProperty("--parallax-y", `${(y - 0.5) * 12}px`);
  };
  const resetPointerEffect = (event) => {
    const card = event.currentTarget;
    card.style.setProperty("--rotate-x", "0deg");
    card.style.setProperty("--rotate-y", "0deg");
    card.style.setProperty("--parallax-x", "0px");
    card.style.setProperty("--parallax-y", "0px");
  };
  return (
    <Drawer>
      <DrawerTrigger
        className="organization-card group relative flex min-h-56 cursor-pointer flex-col overflow-hidden rounded-2xl border border-black/5 bg-white text-center focus-visible:ring-2 focus-visible:ring-primary"
        style={{
          "--card-delay": `${index * 90}ms`,
          "--rotate-x": "0deg",
          "--rotate-y": "0deg",
          "--parallax-x": "0px",
          "--parallax-y": "0px",
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        }}
        onPointerMove={handlePointerMove}
        onPointerLeave={resetPointerEffect}
      >
        <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-gradient-to-br from-stone-50 to-primary/5 p-5 sm:p-7">
          <div className="organization-orbit absolute -right-10 -top-10 h-32 w-32 rounded-full border border-primary/10" />
          <div className="organization-orbit organization-orbit-reverse absolute -bottom-14 -left-12 h-36 w-36 rounded-full border border-primary/10" />
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-[2.2]" />
          <div className="absolute inset-y-0 -left-1/2 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
          <object
            data={imageUrl(s.img)}
            type={`image/${s.img.split(".").pop()}`}
            className="organization-logo relative aspect-square w-full max-w-36 rounded-2xl object-contain"
          >
            <img
              src={imgFallback}
              className="aspect-square w-full rounded-2xl object-cover"
              alt={formatMessage({ id: s.label })}
            />
          </object>
        </div>
        <h4 className="flex min-h-20 items-center justify-center px-8 py-4 text-sm font-bold leading-snug sm:text-base">
          <FormattedMessage id={s.label} />
        </h4>
        <span className="organization-arrow absolute bottom-4 right-4 z-30 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full bg-primary text-white opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </DrawerTrigger>
      <DrawerContent className="!inset-0 !m-0 !h-[100dvh] !max-h-[100dvh] !rounded-none border-0 bg-stone-50">
        <DrawerHeader className="relative border-b border-black/5 bg-white px-16 pb-5 pt-2 text-center">
          <DrawerTitle className="text-xl font-bold md:text-2xl">
            <FormattedMessage id={s.label} />
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            <FormattedMessage id={s.label} />
          </DrawerDescription>
          <DrawerClose
            aria-label="Close"
            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-stone-100 text-stone-700 transition-all duration-300 hover:rotate-90 hover:bg-primary hover:text-white focus-visible:ring-2 focus-visible:ring-primary md:right-7"
          >
            <X className="h-5 w-5" />
          </DrawerClose>
        </DrawerHeader>
        <section className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 overflow-auto px-4 pb-12 pt-6 md:px-8">
          <section className="shrink-0 overflow-hidden rounded-3xl border border-black/5 bg-white shadow-[0_10px_35px_rgba(30,30,30,0.07)]">
            <div className="flex flex-col md:flex-row">
              <div className="flex justify-center bg-gradient-to-br from-primary/10 via-stone-50 to-white p-5 md:w-80 md:flex-none md:p-7">
            <object
              data={imageUrl(s.leaderImg)}
                  type={`image/${s.leaderImg.split(".").pop()}`}
                  className="aspect-[3/4] max-h-96 w-full max-w-64 rounded-2xl object-cover shadow-md"
            >
              <img
                src={imgFallback}
                    className="aspect-[3/4] w-full rounded-2xl object-cover"
                    alt={formatMessage({ id: s.label + ".leader" })}
              />
            </object>
              </div>
              <section className="flex flex-1 flex-col justify-center gap-5 p-6 md:p-10">
              <div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                <FormattedMessage id="selfgoverment.leader" />
                </p>
                <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                <FormattedMessage id={s.label + ".leader"} />
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
              <a className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-white" href={`tel:${s.number}`}>
                <PhoneIcon className="h-4 w-4" /> {s.number}
              </a>
              {s.email && (
                  <a className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-white" href={`mailto:${s.email}`}>
                    <Mail className="h-4 w-4" />
                  {s.email}
                </a>
              )}
              {s.instagram && (
                <a
                    className="flex items-center gap-2 rounded-full bg-stone-100 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-primary hover:text-white"
                  href={s.instagramUrl || `https://www.instagram.com/${s.instagram}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    <Instagram className="h-4 w-4" />@{s.instagram}
                </a>
              )}
                </div>
            </section>
            </div>
          </section>
          <section className="shrink-0 rounded-3xl border border-black/5 bg-white px-6 py-7 shadow-[0_10px_35px_rgba(30,30,30,0.05)] md:px-10 md:py-9">
            <div
              className="space-y-4 text-base leading-8 text-stone-700 md:text-lg [&_a]:text-primary [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-stone-950"
              dangerouslySetInnerHTML={{
                __html: formatMessage({ id: s.content || s.label + ".content" }),
              }}
            />

            <div className="mt-8 border-t border-stone-100 pt-7">
              {s.registration && (
                <h4 className="mb-4 text-lg font-bold text-stone-950">
                  <FormattedMessage id="selfgoverment.registration" />
                </h4>
              )}
              <div className="grid gap-3 md:grid-cols-2">
                <ContactLink icon={<PhoneIcon className="h-5 w-5" />} label="selfgoverment.contactPhone" href={`tel:${s.number.replaceAll(" ", "")}`} value={s.number} />
                <ContactLink icon={<MessageCircle className="h-5 w-5" />} label="selfgoverment.whatsapp" href={s.whatsappUrl} />
                <ContactLink icon={<Instagram className="h-5 w-5" />} label="selfgoverment.instagram" href={s.instagramUrl} />
                <ContactLink icon={<Music2 className="h-5 w-5" />} label="selfgoverment.tiktok" href={s.tiktokUrl} />
              </div>
            </div>
          </section>

          <section className="shrink-0">
            <div className="mb-4 flex items-center gap-3 px-1">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                <FileText className="h-5 w-5" />
              </span>
              <h3 className="text-xl font-bold md:text-2xl">
                <FormattedMessage id="selfgoverment.documents" />
              </h3>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {(s.documents || [
              { name: "selfgoverment.plan", link: s.label.replace(".", "/") + "plan.pdf" },
              { name: "selfgoverment.studentlist", link: s.label.replace(".", "/") + "list.pdf" },
              { name: "selfgoverment.report", link: s.label.replace(".", "/") + "report.pdf" },
            ]).map((document) => (
              <FileCard
                key={document.link}
                name={document.name}
                link={document.link}
                exact={document.link.startsWith("/")}
                variant="modern"
                className="h-44"
              />
            ))}
            </div>
          </section>
        </section>
      </DrawerContent>
    </Drawer>
  );
};

const ContactLink = ({ icon, label, href, value }) => (
  <a
    className="group/contact flex min-w-0 items-center gap-3 rounded-2xl bg-stone-50 p-4 transition-colors hover:bg-primary/5"
    href={href}
    target={href.startsWith("http") ? "_blank" : undefined}
    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
  >
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm">
      {icon}
    </span>
    <span className="min-w-0">
      <span className="block text-sm font-semibold text-stone-950">
        <FormattedMessage id={label} />
      </span>
      <span className="block truncate text-sm text-stone-500 group-hover/contact:text-primary">
        {value || href}
      </span>
    </span>
  </a>
);
