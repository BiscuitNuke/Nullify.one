"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const pages = [
    { href: "/About/", short: "About", long: "About NullifyOne" },
    { href: "/Hardware/", short: "Hardware", long: "Hardware Development" },
    { href: "/AI/", short: "AI", long: "Nullify AI" },
    { href: "/Cybersec/", short: "Cybersec", long: "Cybersecurity Initiatives" },
    { href: "/Devup/", short: "Updates", long: "Development Updates" },
    { href: "/Contact/", short: "Contact", long: "Contact Us" },
];

export default function Nav() {
    const path = usePathname();
    return (
        <header className="top wrap">
            <Link href="/" className="brand" aria-label="Nullify.one home">
                <img src="/brand/lockup-color.svg" alt="" width={168} height={30} />
            </Link>
            <nav aria-label="Site">
                {pages.map(p => (
                    <Link key={p.href} href={p.href} aria-current={path?.toLowerCase() === p.href.toLowerCase() ? "page" : undefined}>
                        {p.short}
                    </Link>
                ))}
            </nav>
        </header>
    );
}
