import { useLocale } from "@/shared/context/locale";
import { cn, fileUrl, insertBeforeExtension } from "@/shared/lib/utils";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

export const FileCard = ({ name, link, className, exact = false, variant = "default", ...props }) => {
    const { locale } = useLocale();
    const [finalUrl, setFinalUrl] = useState("");

    useEffect(() => {
        if (exact) {
            setFinalUrl(link);
            return;
        }

        if (link.startsWith('https')) {
            setFinalUrl(link)
            return;
        }

        if (!link) {
            setFinalUrl(""); // or handle it differently
            return;
        }

        const localizedUrl = fileUrl + insertBeforeExtension(link, locale);
        const fallbackUrl = fileUrl + insertBeforeExtension(link, "ru");

        const checkFile = async () => {
            try {
                const res = await fetch(localizedUrl, { method: "HEAD" });
                if (res.ok) {
                    setFinalUrl(localizedUrl);
                } else {
                    const fallbackRes = await fetch(fallbackUrl, { method: "HEAD" });
                    setFinalUrl(fallbackRes.ok ? fallbackUrl : "");
                }
            } catch {
                // In case of network error on localizedUrl
                try {
                    const fallbackRes = await fetch(fallbackUrl, { method: "HEAD" });
                    setFinalUrl(fallbackRes.ok ? fallbackUrl : "");
                } catch {
                    setFinalUrl("");
                }
            }
        };

        checkFile();
    }, [exact, locale, link]);
    if (!finalUrl) return <></>;

    if (variant === "modern") return (
        <section className={cn("group w-full flex border border-black/5 bg-white h-52 flex-col justify-between rounded-2xl shadow-[0_8px_25px_rgba(30,30,30,0.05)] p-5 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-[0_14px_35px_rgba(170,58,40,0.12)] cursor-pointer transition-all duration-300", className)} {...props}>
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-5 w-5 text-stone-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </div>
            <h2 className="line-clamp-3 text-lg font-semibold leading-snug md:text-xl">
                <FormattedMessage id={name} />
            </h2>
            <a
                className="text-sm font-semibold text-primary"
                href={finalUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FormattedMessage id="card.link" />
            </a>
        </section>
    );

    return (
        <section className={cn("w-full flex border border-border h-52 flex-col justify-between rounded-lg shadow-xl p-5 hover:shadow-2xl cursor-pointer transition-shadow duration-300", className)} {...props}>
            <h2 className="text-xl md:text-2xl line-clamp-4">
                <FormattedMessage id={name} />
            </h2>
            <a
                className="flex gap-2 items-center text-primary"
                href={finalUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                <FormattedMessage id="card.link" /> <ArrowRight />
            </a>
        </section>
    );
};
