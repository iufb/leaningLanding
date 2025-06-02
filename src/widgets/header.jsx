import { LocaleSwitcher } from "@/features/LocaleSwitcher";
import { cn } from "@/shared/lib/utils";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/shared/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "wouter";

const navItems = [
    { label: "navigation.department", href: "/department" },
    { label: "navigation.selfGovernment", href: "/self-government" },
    // { label: "navigation.services", href: "/services" },
    { label: "navigation.studentHouse", href: "https://studdom.abu.edu.kz/" },

    { label: "navigation.events", href: "/events" },
    {
        label: "navigation.opportunities",
        href: "/opportunities",
    },
];

export const Header = () => {
    return (
        <header className="px-10 py-5 flex items-center justify-between">
            <Link
                className="w-[150px] h-[84px] mr-5 flex items-center justify-center"
                href="/"
            >
                <img aria-label="logo" src="/abu-logo.png" />
            </Link>
            <Navbar />
            <LocaleSwitcher className={"xl:flex hidden"} />
            <Burger />
        </header>
    );
};

const Burger = () => {
    return (
        <Sheet>
            <SheetTrigger className="block xl:hidden ml-5 text-primary cursor-pointer border-2 border-border px-2 py-1 rounded-lg">
                <Menu size={32} />
            </SheetTrigger>
            <SheetContent
                side="left"
                className={"min-w-full md:min-w-xl bg-primary text-white text-2xl"}
            >
                <SheetHeader>
                    <SheetTitle className={"invisible"}>Burger</SheetTitle>
                    <SheetDescription className={"invisible"}>
                        Mobile menu
                    </SheetDescription>
                </SheetHeader>

                <nav className="space-y-2">
                    {navItems.map((item, i) => (
                        <div key={i}>
                            {!item.children ? (
                                <a
                                    href={item.href}

                                    target={item.href == 'https://studdom.abu.edu.kz/' && "_blank"}
                                    className="block px-4 py-2 hover:opacity-75 rounded"
                                >
                                    <FormattedMessage id={item.label} />
                                </a>
                            ) : (
                                <details className="group">
                                    <summary className="px-4 py-2 cursor-pointer hover:opacity-75 rounded">
                                        <FormattedMessage id={item.label} />
                                    </summary>
                                    <div className="ml-4 mt-1 space-y-1">
                                        {item.children.map((child, j) => (
                                            <a
                                                key={j}
                                                href={child.href}
                                                className="block px-4 py-1 hover:opacity-75 rounded"
                                            >
                                                <FormattedMessage id={child.label} />
                                            </a>
                                        ))}
                                    </div>
                                </details>
                            )}
                        </div>
                    ))}
                </nav>
                <LocaleSwitcher className={"mt-auto mx-auto mb-5 text-white"} />
            </SheetContent>
        </Sheet>
    );
};
const Navbar = () => {
    const [location] = useLocation();
    return (
        <nav>
            <ul className="hidden xl:flex flex-wrap gap-6 text-lg text-gray-600 ">
                {navItems.map((item) =>
                    item.children ? (
                        <li key={item.label} className="relative group">
                            <div className="cursor-pointer flex  items-center group-hover:text-primary">
                                <FormattedMessage id={item.label} />
                                <ChevronDown size={16} className="mt-1 ml-0.5" />
                            </div>
                            <div className="absolute left-0 top-full bg-white shadow-md rounded-md  min-w-max z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                                <ul className="flex flex-col">
                                    {item.children.map((child) => (
                                        <li key={child.label}>
                                            <a
                                                href={child.href}
                                                className={cn(
                                                    "px-4 py-2 hover:bg-gray-100 block",
                                                    location.includes(child.href) && "text-primary",
                                                )}
                                            >
                                                <FormattedMessage id={child.label} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ) : (
                        <li key={item.label}>
                            <a
                                href={item.href}

                                target={item.href == 'https://studdom.abu.edu.kz/' && "_blank"}
                                className={cn(
                                    "hover:underline hover:text-primary hover:transition-colors",
                                    location.includes(item.href) && "text-primary",
                                )}
                            >
                                <FormattedMessage id={item.label} />
                            </a>
                        </li>
                    ),
                )}
            </ul>
        </nav>
    );
};
