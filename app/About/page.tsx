import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "About NullifyOne" };

const history = [
    { year: "2020", text: "NullifyOne starts in Alpharetta, GA. I pitch it like a startup: AI that stops network attacks." },
    { year: "2022", text: "First real site. Next.js, Bootstrap, and a GPT-3 chatbot named Luna." },
    { year: "2024", text: "NullifyNEXT. A slick rebuild on a template. It never shipped." },
    { year: "2026", text: "Rebooted as what it actually is: a research project I come back to." },
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
                <h2>Now</h2>
                <div className="prose">
                    <p>I study Computing Security at RIT. Nullify is where I park the network detection idea between classes and work.</p>
                    <p>No team, no funding, no customers. Just me. If that changes, this page will say so.</p>
                </div>
            </section>
        </>
    );
}
