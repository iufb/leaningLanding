import { LocaleSwitcher } from "@/features/LocaleSwitcher";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/shared/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { FormattedMessage } from "react-intl";

const navItems = [
    { label: "navigation.services", href: "/services" },
    { label: "navigation.studentHouse", href: "/student-house" },
    { label: "navigation.selfGovernment", href: "/self-government" },
    { label: "navigation.psychSupport", href: "/psychological-support" },
    { label: "navigation.usefulInfo", href: "/useful-info" },
    { label: "navigation.events", href: "/events" },
    {
        label: "navigation.opportunities",
        children: [
            { label: "navigation.opportunities.students", href: "/opportunities/students" },
            { label: "navigation.opportunities.masters", href: "/opportunities/masters" },
            { label: "navigation.opportunities.phd", href: "/opportunities/phd" },
        ],
    },
];

export const Header = () => {
    return <header className="px-10 py-5 flex items-center ">
        <div aria-label="logo" className="w-[150px] h-[84px] bg-slate-200 mr-5" />
        <Navbar />
        <LocaleSwitcher />
        <Burger />

    </header>
}


const Burger = () => {
    return <Sheet >
        <SheetTrigger className='block xl:hidden ml-5'><Menu size={32} /></SheetTrigger>
        <SheetContent side='left' className={'min-w-full md:min-w-xl'}>
            <SheetHeader>
                <SheetTitle className={'invisible'}>Burger</SheetTitle>
                <SheetDescription className={'invisible'}>
                    Mobile menu
                </SheetDescription>
            </SheetHeader>

            <nav className="space-y-2">
                {navItems.map((item, i) => (
                    <div key={i}>
                        {!item.children ? (
                            <a href={item.href} className="block px-4 py-2 hover:bg-gray-100 rounded">
                                <FormattedMessage id={item.label} />
                            </a>
                        ) : (
                            <details className="group">
                                <summary className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded">
                                    {item.label}
                                </summary>
                                <div className="ml-4 mt-1 space-y-1">
                                    {item.children.map((child, j) => (
                                        <a key={j} href={child.href} className="block px-4 py-1 hover:bg-gray-100 rounded">
                                            <FormattedMessage id={child.label} />
                                        </a>
                                    ))}
                                </div>
                            </details>
                        )}
                    </div>
                ))}
            </nav>
        </SheetContent>
    </Sheet>
}
const Navbar = () => {
    return <nav>
        <ul className="hidden xl:flex flex-wrap gap-6 text-lg text-gray-600 ">
            {navItems.map((item) =>
                item.children ? (
                    <li className="relative group">
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
                                            className="px-4 py-2 hover:bg-gray-100 block"
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
                        <a href={item.href} className="hover:underline hover:text-primary hover:transition-colors ">
                            <FormattedMessage id={item.label} />
                        </a>
                    </li>
                )
            )}
        </ul>
    </nav>
}


