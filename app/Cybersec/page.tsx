import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";

export const metadata: Metadata = {
    title: "Cybersecurity Initiatives",
    description: "A free checklist for securing a home or small-office network, plus where the rest of my security work lives.",
};

const checklist = [
    {
        h: "Accounts",
        items: [
            "Turn on two-factor sign-in for email first. Email resets everything else.",
            "Use a password manager. One unique password per account.",
            "Give every person their own login. No shared admin account.",
            "Remove accounts for people who left. Same day.",
        ],
    },
    {
        h: "Router and Wi-Fi",
        items: [
            "Change the router's default admin password.",
            "Update the router firmware, then turn on auto-update if it has it.",
            "Use WPA3, or WPA2 if a device can't do WPA3. Turn off WPS.",
            "Turn off remote admin and UPnP unless you know you need them.",
            "Put guests on a guest network.",
        ],
    },
    {
        h: "Devices",
        items: [
            "Turn on automatic updates for computers and phones.",
            "Put cameras, TVs and other smart stuff on their own network or VLAN.",
            "Replace anything that stopped getting updates.",
            "Turn on full-disk encryption on laptops.",
        ],
    },
    {
        h: "Backups",
        items: [
            "Keep 3 copies, on 2 kinds of storage, with 1 offline or off-site.",
            "Test a restore. A backup you've never restored is a guess.",
            "Make sure ransomware on one PC can't reach the backup.",
        ],
    },
    {
        h: "Email and money",
        items: [
            "Call to confirm any change to payment or bank details. Use a number you already have, not one from the email.",
            "Two people sign off on wire transfers over a set amount.",
            "Report phishing instead of deleting it, so others get warned.",
        ],
    },
    {
        h: "Be ready",
        items: [
            "Write down who to call if something happens. Start with the Help page.",
            "Know where your router, modem and switch are, and how to unplug them.",
            "Check if your business insurance covers cyber incidents.",
        ],
    },
];

const where = [
    { h: "School", p: "Computing Security BS/MS at RIT. Classes, labs and competitions." },
    { h: "Work", p: "Network engineering on a university IT team. Switches, Wi-Fi and the boring stuff that keeps a campus online." },
    { h: "Homelab", p: "A real network with real devices, VLANs and an SSO portal. It's where I test things, break things, and will train the Nullify model." },
    { h: "Writing", p: <>Projects and writeups live on <a href="https://ksw.dev/">ksw.dev</a>. Less serious stuff lives on <a href="https://chipnuke.com/">chipnuke.com</a>.</> },
];

const resources = [
    { what: "CISA Cyber Essentials", href: "https://www.cisa.gov/cyber-essentials", note: "Free starter kit for small businesses from the US government." },
    { what: "CISA small business", href: "https://www.cisa.gov/small-business", note: "Short, current advice on the attacks that actually hit small businesses." },
    { what: "FTC small business", href: "https://www.ftc.gov/cybersecurity", note: "Plain-English guides and printable fact sheets." },
    { what: "StopRansomware", href: "https://www.cisa.gov/stopransomware", note: "Ransomware guides, including what to do before it happens." },
];

export default function Cybersec() {
    return (
        <>
            <PageHead
                title="Cybersecurity"
                lede="Nullify isn't built yet. Most attacks on small networks are stopped by basics anyway. Here's the checklist I'd give a friend."
            />

            <section className="wrap block">
                <h2>Small network checklist</h2>
                <p className="sub">Do the top of each list first. Free, and no product needed.</p>
                <div className="checks">
                    {checklist.map(c => (
                        <div key={c.h}>
                            <h3>{c.h}</h3>
                            <ul>{c.items.map(i => <li key={i}>{i}</li>)}</ul>
                        </div>
                    ))}
                </div>
                <p className="more">Something already wrong? <Link href="/Help/">Go to the Help page</Link>.</p>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>Good free resources</h2>
                    <ul className="contact wide">
                        {resources.map(r => (
                            <li key={r.what}>
                                <span className="what"><a href={r.href}>{r.what}</a></span>
                                <span className="note">{r.note}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="wrap block">
                <h2>Where I do security work</h2>
                <div className="cols">
                    {where.map(w => (
                        <div key={w.h}><h3>{w.h}</h3><p>{w.p}</p></div>
                    ))}
                </div>
            </section>
        </>
    );
}
