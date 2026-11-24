"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Mark from "./mark";

export const pages = [
    { href: "/Product/", short: "Product", long: "NullifyOne" },
    { href: "/About/", short: "About", long: "About" },
    { href: "/Devup/", short: "Updates", long: "Updates" },
];
export default function Nav() {
    const path = usePathname();
    return (
        <header className="top">
            <div className="wrap top-in">
            <Link href="/" className="brand" aria-label="Nullify.one home">
                <Mark size={30} weight={22} />
                <img src="/brand/wordmark-black.svg" alt="" width={128} height={26} />
            </Link>
            <nav aria-label="Site">
                {pages.map(p => (
                    <Link key={p.href} href={p.href} aria-current={path?.toLowerCase() === p.href.toLowerCase() ? "page" : undefined}>
                        {p.short}
                    </Link>
                ))}
            </nav>
            <Link href="/Contact/" className="button button-sm">Contact us</Link>
            </div>
        </header>
    );
}
