import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Cybersecurity Initiatives" };

export default function Cybersec() {
    return (
        <>
            <PageHead
                title="Cybersecurity"
                lede="Nullify is one project. Most of my security work happens elsewhere."
            />
            <section className="wrap block">
                <h2>Where I do it</h2>
                <div className="cols">
                    <div><h3>School</h3><p>Computing Security at RIT. Classes and labs.</p></div>
                    <div><h3>Homelab</h3><p>A real network with real devices. It's where I test things, break things, and will train the Nullify model.</p></div>
                    <div><h3>Writing</h3><p>Projects and writeups live on <a href="https://ksw.dev/">ksw.dev</a>. Less serious stuff lives on <a href="https://chipnuke.com/">chipnuke.com</a>.</p></div>
                </div>
            </section>
        </>
    );
}
