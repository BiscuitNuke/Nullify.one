import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function Privacy() {
    return (
        <>
            <PageHead title="Privacy Policy" lede="This site doesn't collect anything about you." />
            <section className="wrap block">
                <div className="prose">
                    <p>No accounts. No forms. No cookies. No analytics scripts. No chatbot. No third-party fonts or trackers.</p>
                    <p>The site is hosted on Cloudflare Pages. Cloudflare keeps standard request logs, like IP address and the page you asked for, to run and protect its network. That&apos;s how web hosting works. I don&apos;t use those logs to track anyone.</p>
                    <p>If you email me, I get your email address and whatever you wrote. I use it to reply. I don&apos;t sell it, share it, or add you to a list.</p>
                    <p>If a Nullify product ever exists, it will have its own privacy policy. The plan is that your network data never leaves your network.</p>
                    <p className="meta">Last updated 2026-11-24.</p>
                </div>
            </section>
        </>
    );
}
