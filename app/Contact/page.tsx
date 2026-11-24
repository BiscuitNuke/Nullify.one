import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Contact Us", description: "How to reach Nullify. It's one person, and email is best." };

const reasons = [
    { h: "You run a small network", p: "Tell me what you'd want a detector to catch, and what alerts you'd actually read. This shapes what gets built." },
    { h: "You want to test it later", p: "Home or small office, any size. When there's something to run, testers hear first." },
    { h: "You found a security problem", p: "On this site or in the code. Email with details. See security.txt below." },
];

export default function Contact() {
    return (
        <>
            <PageHead title="Contact" lede="It's just me. Email is best. I usually reply within a few days." />
            <section className="wrap block">
                <ul className="contact">
                    <li><span className="what">Email</span><a href="mailto:kierana@nullify.one">kierana@nullify.one</a></li>
                    <li><span className="what">GitHub</span><a href="https://github.com/NullifyOne">github.com/NullifyOne</a></li>
                    <li><span className="what">Security</span><a href="/.well-known/security.txt">/.well-known/security.txt</a></li>
                    <li><span className="what">Me</span><a href="https://ksw.dev/">ksw.dev</a></li>
                </ul>
            </section>
            <section className="wrap block">
                <h2>Good reasons to email</h2>
                <div className="cols">
                    {reasons.map(r => <div key={r.h}><h3>{r.h}</h3><p>{r.p}</p></div>)}
                </div>
            </section>
            <section className="wrap block">
                <div className="ir-note">
                    <div>
                        <h2>Under attack right now?</h2>
                        <p>Don&apos;t wait on my email. I can&apos;t do incident response. The Help page has the steps and the people who can.</p>
                    </div>
                    <Link href="/Help/" className="button">Get help now</Link>
                </div>
            </section>
        </>
    );
}
