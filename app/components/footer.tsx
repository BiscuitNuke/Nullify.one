import Link from "next/link";

const cols = [
    { h: "Product", links: [{ href: "/Product/", t: "NullifyOne" }, { href: "/Product/#roadmap", t: "Roadmap" }, { href: "/Devup/", t: "Updates" }] },
    { h: "Company", links: [{ href: "/About/", t: "About" }, { href: "/Contact/", t: "Contact" }, { href: "/Brand/", t: "Brand kit" }, { href: "/Help/", t: "Under attack?" }] },
    { h: "Legal", links: [{ href: "/ToS/", t: "Terms" }, { href: "/Privacy/", t: "Privacy" }, { href: "/Legal/", t: "Legal" }] },
];

export default function Footer() {
    return (
        <footer className="foot">
            <div className="wrap foot-grid">
                <div className="foot-id">
                    <img src="/brand/lockup-color.svg" alt="Nullify.one" width={168} height={27} />
                    <p>Network security for small offices and homes.</p>
                    <p className="social">
                        <a href="https://github.com/NullifyOne">GitHub</a>
                                                <a href="https://ksw.dev/">ksw.dev</a>
                    </p>
                </div>
                {cols.map(c => (
                    <div key={c.h}>
                        <h2>{c.h}</h2>
                        <ul>
                            {c.links.map(l => (
                                <li key={l.href}><Link href={l.href}>{l.t}</Link></li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className="wrap copy">NullifyOne © 2020–{new Date().getFullYear()}.</p>
        </footer>
    );
}
