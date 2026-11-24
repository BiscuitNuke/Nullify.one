import Link from "next/link";
import Mark from "./components/mark";
import Struck from "./components/strike";

const features = [
    { h: "Firewall and router", p: "Replaces the router you have. Gigabit routing, VLANs, and sane defaults out of the box." },
    { h: "Intrusion prevention", p: "Inspects traffic and blocks known attacks, scans and malware before they reach your devices." },
    { h: "DNS filtering", p: "Blocks malware, phishing and ad domains for every device. Nothing to install on each one." },
    { h: "VPN", p: "WireGuard for remote staff and site-to-site links. A QR code, not a manual." },
    { h: "Visibility", p: "Every device, what it talks to, and how much. New devices get flagged." },
    { h: "One dashboard", p: "Runs on the box. No cloud account, no subscription to keep it working." },
];

const replaces = ["Consumer router", "Separate firewall", "Pi-hole", "VPN server", "Network monitor"];

export default function Home() {
    return (
        <>
            <section className="hero">
                <div className="wrap hero-grid">
                    <div>
                        <h1>
                            <Struck>Complicated</Struck>{" "}
                            network security.
                        </h1>
                        <p className="lede">
                            NullifyOne is one box that secures a small office or home network. Firewall, intrusion prevention, filtering and VPN, set up in minutes.
                        </p>
                        <div className="cta">
                            <Link href="/Product/" className="button">See NullifyOne</Link>
                            <Link href="/Contact/" className="button button-ghost">Join the early list</Link>
                        </div>
                        <p className="status-line"><span className="dot" aria-hidden="true" /> In development. Not for sale yet.</p>
                    </div>
                    <div className="hero-mark">
                        <Mark size={360} weight={10} className="mark-big" />
                    </div>
                </div>
            </section>

            <section className="wrap block">
                <h2>One box. Everything a small network needs.</h2>
                <p className="sub">Small offices end up with a pile of gear and nobody who has time to run it. NullifyOne puts it in one place.</p>
                <div className="cols">
                    {features.map(f => (
                        <div key={f.h}><h3>{f.h}</h3><p>{f.p}</p></div>
                    ))}
                </div>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>Replaces</h2>
                    <ul className="replaces">
                        {replaces.map(r => <li key={r}>{r}</li>)}
                    </ul>
                </div>
            </section>

            <section className="wrap">
                <div className="closer">
                    <div>
                        <h2>Run a small network?</h2>
                        <p>Get on the early list. You&apos;ll hear first when there&apos;s something to test.</p>
                    </div>
                    <a href="mailto:kierana@nullify.one?subject=NullifyOne%20early%20list" className="button button-invert">Join the early list</a>
                </div>
            </section>
        </>
    );
}
