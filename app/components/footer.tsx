import Link from "next/link";

const cols = [
    {
        h: "Development",
        links: [
            { href: "/AI/", t: "AI Development" },
            { href: "/Cybersec/", t: "Cybersecurity" },
            { href: "/Devup/", t: "Development Updates" },
            { href: "/Hardware/", t: "Hardware Development" },
        ],
    },
    {
        h: "Legal",
        links: [
            { href: "/ToS/", t: "Terms & Conditions" },
            { href: "/Privacy/", t: "Privacy Policy" },
            { href: "/Legal/", t: "Legal Information" },
        ],
    },
    {
        h: "Other",
        links: [
            { href: "/About/", t: "About NullifyOne" },
            { href: "/Contact/", t: "Contact Us" },
            { href: "/Brand/", t: "Brand Kit" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="foot">
            <div className="wrap foot-grid">
                <div className="foot-id">
                    <img src="/brand/lockup-color.svg" alt="Nullify.one" width={168} height={30} />
                    <p>Need help? <a href="mailto:kierana@nullify.one">Email us</a>.</p>
                    <p className="social">
                        <a href="https://github.com/NullifyOne">GitHub</a>
                        <a href="https://chipnuke.com/">chipnuke.com</a>
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
            <p className="wrap copy">NullifyOne © 2020–{new Date().getFullYear()}. A side project by Kieran Wittstruck.</p>
        </footer>
    );
}
