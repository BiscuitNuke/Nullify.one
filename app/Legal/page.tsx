import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Legal Information" };

export default function Legal() {
    return (
        <>
            <PageHead title="Legal Information" />
            <section className="wrap block">
                <div className="prose">
                    <p>Nullify.one is a personal project run by Kieran Wittstruck. It is not a registered business.</p>
                    <p>Site content and the Nullify name and logo © 2020–2026 Kieran Wittstruck.</p>
                    <p>The site source is on GitHub. Questions go to <a href="mailto:kierana@nullify.one">kierana@nullify.one</a>.</p>
                </div>
            </section>
        </>
    );
}
