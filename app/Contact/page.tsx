import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Contact", description: "Contact Nullify, or join the NullifyOne early list." };

export default function Contact() {
    return (
        <>
            <PageHead title="Contact" lede="Questions, partnerships, or the early list. Email is fastest." />
            <section className="wrap block">
                <ul className="contact">
                    <li><span className="what">General</span><a href="mailto:kierana@nullify.one">kierana@nullify.one</a></li>
                    <li><span className="what">Early list</span><a href="mailto:kierana@nullify.one?subject=NullifyOne%20early%20list">Email with &quot;early list&quot; in the subject</a></li>
                    <li><span className="what">Security</span><a href="/.well-known/security.txt">security.txt</a></li>
                    <li><span className="what">GitHub</span><a href="https://github.com/NullifyOne">github.com/NullifyOne</a></li>
                </ul>
            </section>
        </>
    );
}
