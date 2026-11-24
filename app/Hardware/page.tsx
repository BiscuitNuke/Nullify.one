import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";
import Struck from "../components/strike";

export const metadata: Metadata = {
    title: "Hardware Development",
    description: "The Nullify sensor concept: a small box on a mirror port that runs flow-based detection locally. Not built yet.",
};

const modes = [
    {
        h: "Mirror port",
        tag: "Plan A",
        p: "A managed switch copies traffic to the box. The box only listens. If it dies, the network doesn't notice.",
    },
    {
        h: "Flow export",
        tag: "Plan B",
        p: "No spare switch port? A lot of routers can send NetFlow, sFlow or IPFIX. The box reads that instead. Less detail, zero wiring.",
    },
    {
        h: "Inline bridge",
        tag: "Maybe never",
        p: "Sit between the modem and router and see everything. Also a single point of failure. Not worth it for a detector.",
    },
];

const specs = [
    { what: "Board", target: "ARM single-board computer or a low-power x86 mini PC", why: "Has to run a small model and a flow collector at the same time." },
    { what: "Network", target: "1 GbE listen port, separate management port", why: "Keeps the sniffing side passive and off the LAN." },
    { what: "Storage", target: "SSD, 30 days of flow records", why: "Flows are small. A month of history fits on a cheap drive." },
    { what: "Power", target: "Under 15 W", why: "It runs 24/7 next to the router." },
    { what: "Cost", target: "Under $150 in parts", why: "If it costs more than the router, nobody buys it." },
    { what: "Updates", target: "Signed images, manual by default", why: "A security box that auto-updates from the internet is an attack surface." },
];

const comparison = [
    { what: "Firewall boxes (Firewalla, UniFi IDS)", does: "Block known-bad with signatures and blocklists.", gap: "Great at known threats. Weak at \"this device is acting weird.\"" },
    { what: "Open-source sensors (Zeek, Suricata, Security Onion)", does: "Log everything and match rules.", gap: "Powerful, but you need to be the SOC to use them." },
    { what: "Enterprise NDR (Darktrace, Vectra)", does: "Behavior-based detection with ML.", gap: "Priced for companies with a security team. Mostly cloud." },
];

export default function Hardware() {
    return (
        <>
            <PageHead
                title={<><Struck>Shipping</Struck> Hardware.</>}
                lede="The plan was always a small box that sits on your network. Nothing is built yet. This is what it has to do, and how it would plug in."
            />

            <section className="wrap block">
                <h2>How it plugs in</h2>
                <p className="sub">Three ways to get traffic to the box. Only one is the default.</p>
                <figure className="diagram" aria-label="Mirror port setup: internet to router to switch, switch copies traffic to the Nullify box">
                    <div className="node">Internet</div>
                    <div className="link" />
                    <div className="node">Router</div>
                    <div className="link" />
                    <div className="node">Switch</div>
                    <div className="link link-dash"><span>mirror</span></div>
                    <div className="node node-red">Nullify box</div>
                </figure>
                <div className="cols">
                    {modes.map(m => (
                        <div key={m.h}>
                            <p className="kicker">{m.tag}</p>
                            <h3>{m.h}</h3>
                            <p>{m.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>Target spec</h2>
                    <p className="sub">Targets, not specs. Nothing here is tested on real hardware yet.</p>
                    <ul className="status spec">
                        {specs.map(s => (
                            <li key={s.what}>
                                <span className="what">{s.what}</span>
                                <span>{s.target}</span>
                                <span className="note">{s.why}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="wrap block">
                <h2>Why not just buy something?</h2>
                <p className="sub">Fair question. Good stuff already exists. Here&apos;s the gap Nullify is aimed at.</p>
                <ul className="status spec">
                    {comparison.map(c => (
                        <li key={c.what}>
                            <span className="what">{c.what}</span>
                            <span>{c.does}</span>
                            <span className="note">{c.gap}</span>
                        </li>
                    ))}
                </ul>
                <div className="prose" style={{ marginTop: 24 }}>
                    <p>The idea: behavior-based detection like the enterprise tools, at the price and effort level of a home firewall, with nothing leaving the building. If a cheap box can&apos;t do that well, the honest answer is to run Zeek and call it a day.</p>
                </div>
            </section>

            <section className="wrap block">
                <h2>Status</h2>
                <p className="empty">Not started. Software comes first. The box only makes sense once the detection model works on my lab network. Progress goes on <Link href="/Devup/">Development Updates</Link>.</p>
            </section>
        </>
    );
}
