import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "About" };

const history = [
    { year: "2020", text: "Nullify starts in Alpharetta, GA as a network security idea." },
    { year: "2022", text: "First site." },
    { year: "2026", text: "Refocused on one product: NullifyOne, an all-in-one appliance for small networks." },
];

const principles = [
    { h: "Simple", p: "If it needs an IT department to run, it missed the point." },
    { h: "Local", p: "Your network data stays on your network." },
    { h: "Honest", p: "The roadmap says what's done and what isn't." },
];

export default function About() {
    return (
        <>
            <PageHead
                title="About Nullify"
                lede="Small offices and homes face the same attacks as big companies, without the security team. Nullify builds the box that fills that gap."
            />
            <section className="wrap block">
                <h2>What we believe</h2>
                <div className="cols">
                    {principles.map(p => <div key={p.h}><h3>{p.h}</h3><p>{p.p}</p></div>)}
                </div>
            </section>
            <section className="wrap block">
                <h2>History</h2>
                <ol className="history">
                    {history.map(h => <li key={h.year}><span className="year">{h.year}</span><span>{h.text}</span></li>)}
                </ol>
            </section>
            <section className="wrap block">
                <h2>Founder</h2>
                <div className="prose">
                    <p>Nullify is founded and run by Kieran Wittstruck, a Computing Security student at RIT who works in network engineering. More at <a href="https://ksw.dev/">ksw.dev</a>.</p>
                </div>
            </section>
        </>
    );
}
