import { useLocale } from "@/shared/context/locale";
import { cn, fileUrl, insertBeforeExtension } from "@/shared/lib/utils";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

export const FileCard = ({ name, link, className, ...props }) => {
    const { locale } = useLocale();
    const [finalUrl, setFinalUrl] = useState("");

    useEffect(() => {
        const localizedUrl = fileUrl + insertBeforeExtension(link, locale);
        const fallbackUrl = fileUrl + insertBeforeExtension(link, "ru");

        const checkFile = async () => {
            try {
                const res = await fetch(localizedUrl, { method: "HEAD" });
                setFinalUrl(res.ok ? localizedUrl : fallbackUrl);
            } catch (e) {
                setFinalUrl(fallbackUrl);
            }
        };

        checkFile();
    }, [locale, link]);

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

