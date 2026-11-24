import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "About NullifyOne" };

const history = [
    { year: "2020", text: "NullifyOne starts in Alpharetta, GA. I pitch it like a startup: AI that stops network attacks." },
    { year: "2022", text: "First real site. Next.js, Bootstrap, and a GPT-3 chatbot named Luna." },
    { year: "2024", text: "NullifyNEXT. A slick rebuild on a template. It never shipped." },
    { year: "2026", text: "Rebooted as what it actually is: a research project I come back to." },
];

const principles = [
    { h: "Local first", p: "Your traffic is your business. Anything Nullify builds runs on your network, not in someone else's cloud." },
    { h: "Plain English", p: "If an alert needs a security degree to read, it failed. Same goes for this site." },
    { h: "Honest status", p: "No fake customers, no fake team, no \"coming soon\" that isn't. The roadmap says what's done and what isn't." },
];

const faq = [
    { q: "Can I buy it?", a: <>No. There&apos;s no product yet. The <Link href="/#roadmap">roadmap</Link> shows where things stand.</> },
    { q: "Is this the Nullify that does AI product security?", a: <>No. That&apos;s Nullify at nullify.ai, a separate, funded company. This project started in 2020 and has no connection to them.</> },
    { q: "Why \"Nullify\"?", a: "Make the attack null. The red slash through the N in the logo is the same idea." },
    { q: "Can I help?", a: <>Yes. If you run a small network and want to say what you&apos;d want caught, or you want to help test later, <Link href="/Contact/">get in touch</Link>.</> },
    { q: "Are you hiring?", a: "No. There's nothing to hire for. It's one person." },
];

export default function About() {
    return (
        <>
            <PageHead
                title="About NullifyOne"
                lede="I started Nullify in 2020. I wanted to build an AI that stops network attacks. It never became a company. It did get me into security for real."
            />
            <section className="wrap block">
                <h2>Where it came from</h2>
                <ol className="history">
                    {history.map(h => (
                        <li key={h.year}>
                            <span className="year">{h.year}</span>
                            <span>{h.text}</span>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="wrap block">
                <h2>How I run it</h2>
                <div className="cols">
                    {principles.map(p => (
                        <div key={p.h}><h3>{p.h}</h3><p>{p.p}</p></div>
                    ))}
                </div>
            </section>
            <section className="wrap block">
                <h2>Now</h2>
                <div className="prose">
                    <p>I study Computing Security at RIT. Nullify is where I park the network detection idea between classes and work.</p>
                    <p>No team, no funding, no customers. Just me. If that changes, this page will say so.</p>
                </div>
            </section>
            <section className="band">
                <div className="wrap block">
                    <h2>Questions people ask</h2>
                    <dl className="faq">
                        {faq.map(f => (
                            <div key={f.q}><dt>{f.q}</dt><dd>{f.a}</dd></div>
                        ))}
                    </dl>
                </div>
            </section>
        </>
    );
}
