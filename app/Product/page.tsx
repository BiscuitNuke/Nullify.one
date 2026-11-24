import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";

export const metadata: Metadata = {
    title: "NullifyOne",
    description: "NullifyOne: an all-in-one network security appliance for small offices and homes. In development.",
};

const features = [
    { h: "Firewall and router", p: "Stateful firewall, NAT, VLANs, guest network. Sits where your router is now." },
    { h: "Intrusion prevention", p: "Signature-based IDS/IPS on the WAN and between VLANs. Rules update daily." },
    { h: "DNS filtering", p: "Network-wide blocking of malware, phishing and tracking domains, with per-network allow lists." },
    { h: "VPN", p: "WireGuard remote access and site-to-site. Add a phone with a QR code." },
    { h: "Visibility", p: "Device inventory, traffic per device, and alerts for new devices and blocked threats." },
    { h: "Local management", p: "Web dashboard on the box. Works with the internet down. No account required." },
];

const specs = [
    { what: "Ports", val: "2.5 GbE WAN, 2.5 GbE LAN, management port" },
    { what: "Throughput", val: "Gigabit routing with IPS on (target)" },
    { what: "Power", val: "Under 15 W" },
    { what: "Size", val: "Fits next to a modem. Fanless." },
    { what: "Updates", val: "Signed, staged, with one-click rollback" },
    { what: "Subscription", val: "None required to keep it working" },
];

const roadmap = [
    { item: "Concept", state: "done", note: "Since 2020." },
    { item: "Lab network", state: "done", note: "Real devices and traffic to test against." },
    { item: "Software prototype", state: "planned", note: "Firewall, IPS and DNS filtering on test hardware." },
    { item: "Dashboard", state: "not started", note: "Local web UI." },
    { item: "Hardware", state: "not started", note: "Pick a board, design the case." },
    { item: "Early testers", state: "not started", note: "Small offices and homes on the early list." },
];

export default function Product() {
    return (
        <>
            <PageHead
                title="NullifyOne"
                lede="An all-in-one security appliance for small networks. It replaces the router and the pile of boxes around it."
            />

            <section className="wrap block">
                <h2>What it does</h2>
                <div className="cols">
                    {features.map(f => <div key={f.h}><h3>{f.h}</h3><p>{f.p}</p></div>)}
                </div>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>Where it goes</h2>
                    <p className="sub">Between your modem and everything else.</p>
                    <figure className="diagram" aria-label="Internet to modem to NullifyOne to switch and Wi-Fi">
                        <div className="node">Internet</div>
                        <div className="link" />
                        <div className="node">Modem</div>
                        <div className="link" />
                        <div className="node node-red">NullifyOne</div>
                        <div className="link" />
                        <div className="node">Switch / Wi-Fi</div>
                    </figure>
                </div>
            </section>

            <section className="wrap block">
                <h2>Target specs</h2>
                <p className="sub">Targets. They can change before anything ships.</p>
                <ul className="contact wide">
                    {specs.map(s => <li key={s.what}><span className="what">{s.what}</span><span>{s.val}</span></li>)}
                </ul>
            </section>

            <section id="roadmap" className="wrap block">
                <h2>Roadmap</h2>
                <p className="sub">Where each piece stands today.</p>
                <ul className="status">
                    {roadmap.map(s => (
                        <li key={s.item}>
                            <span className="what">{s.item}</span>
                            <span className={`tag t-${s.state.replace(/\s/g, "-")}`}>{s.state}</span>
                            <span className="note">{s.note}</span>
                        </li>
                    ))}
                </ul>
                <p className="more"><Link href="/Devup/">Read the updates</Link></p>
            </section>
        </>
    );
}
