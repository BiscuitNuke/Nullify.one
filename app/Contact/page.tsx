import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Contact Us" };

export default function Contact() {
    return (
        <>
            <PageHead title="Contact" lede="It's just me. Email is best." />
            <section className="wrap block">
                <ul className="contact">
                    <li><span className="what">Email</span><a href="mailto:kierana@nullify.one">kierana@nullify.one</a></li>
                    <li><span className="what">GitHub</span><a href="https://github.com/NullifyOne">github.com/NullifyOne</a></li>
                    <li><span className="what">Me</span><a href="https://ksw.dev/">ksw.dev</a></li>
                </ul>
            </section>
        </>
    );
}
