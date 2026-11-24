import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Legal Information" };

export default function Legal() {
    return (
        <>
            <PageHead title="Legal Information" lede="Who runs this, who owns what, and how to report a problem." />
            <section className="wrap block">
                <h2>Who runs this</h2>
                <div className="prose">
                    <p>Nullify is run by Kieran Wittstruck. It is not yet a registered business and doesn&apos;t sell anything yet.</p>
                    <p>Site content and the Nullify name and logo © 2020–2026 Kieran Wittstruck. The site source is on GitHub.</p>
                </div>
            </section>
            <section className="wrap block">
                <h2>Not affiliated</h2>
                <div className="prose">
                    <p>This project has no connection to Nullify (nullify.ai), the AI product security company, or to any other business using the Nullify name.</p>
                    <p>Other product names belong to their owners.</p>
                </div>
            </section>
            <section className="wrap block">
                <h2>Report a security problem</h2>
                <div className="prose">
                    <p>Email <a href="mailto:kierana@nullify.one">kierana@nullify.one</a> with what you found and how to reproduce it. Please don&apos;t test in ways that break things for other people. Good-faith reports won&apos;t get legal threats from me.</p>
                    <p>Details are in <a href="/.well-known/security.txt">security.txt</a>. See also the <Link href="/ToS/">terms</Link> and <Link href="/Privacy/">privacy policy</Link>.</p>
                </div>
            </section>
        </>
    );
}
