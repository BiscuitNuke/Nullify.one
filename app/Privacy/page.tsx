import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
    return (
        <>
            <PageHead title="Privacy Policy" lede="This site doesn't collect anything about you." />
            <section className="wrap block">
                <div className="prose">
                    <p>No accounts. No forms. No cookies. No analytics scripts. No chatbot.</p>
                    <p>The hosting provider keeps standard server logs, like IP address and the page you asked for. That's how web hosting works. I don't use those logs to track anyone.</p>
                    <p>If you email me, I get your email address and whatever you wrote. I use it to reply. That's it.</p>
                    <p className="meta">Last updated 2026-11-24.</p>
                </div>
            </section>
        </>
    );
}
