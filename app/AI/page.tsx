import type { Metadata } from "next";
import Link from "next/link";
import PageHead from "../components/head";

export const metadata: Metadata = {
    title: "Nullify AI",
    description: "How Nullify plans to detect attacks: flow records, a per-network baseline, and alerts that explain themselves.",
};

const pipeline = [
    { h: "Collect", p: "Turn traffic into flow records. One line per conversation." },
    { h: "Describe", p: "Add context: which device, what time, what's new." },
    { h: "Baseline", p: "Learn what each device normally does." },
    { h: "Score", p: "Rate how far a flow is from that normal." },
    { h: "Explain", p: "Say what changed, in plain English." },
];

const features = [
    { h: "Who", p: "Source and destination, the device type behind each IP, the network owner (ASN) and country of the far end." },
    { h: "How much", p: "Bytes and packets each way, how long it lasted, upload vs. download ratio." },
    { h: "When", p: "Time of day, day of week, and how regular the timing is. Malware check-ins are suspiciously regular." },
    { h: "New", p: "First time this device talked to this place. First time it used this port. New devices on the network." },
];

const models = [
    { what: "Per-device baselines", state: "planned", note: "Simple stats first. If a camera never uploads more than 2 MB an hour, 2 GB is a flag. Cheap and easy to explain." },
    { what: "Isolation forest", state: "planned", note: "Classic unsupervised anomaly detection. Fast on small hardware. Good first real model." },
    { what: "Autoencoder", state: "not started", note: "Learns to rebuild normal flows. Bad rebuild means abnormal flow. Needs more data and more compute." },
    { what: "Large language models", state: "not now", note: "Maybe to write alert text later. Not for detection. Too slow and too hard to trust on a small box." },
];

const evals = [
    { h: "Public datasets", p: "Labeled attack traffic like CIC-IDS2017, UNSW-NB15 and CTU-13. Good for a first score. Known to be cleaner than real life." },
    { h: "My lab", p: "Real devices, real traffic, and attacks I run on purpose: scans, brute force, a fake exfil, a fake C2 beacon." },
    { h: "False alarms", p: "The number that matters most. A detector that cries wolf every day gets unplugged. Goal: under one false alert a week on the lab." },
];

export default function AI() {
    return (
        <>
            <PageHead
                title="Nullify AI"
                lede="The AI part is anomaly detection: learn what normal looks like on one network, then flag what doesn't fit. No chatbot."
            />

            <section className="wrap block">
                <h2>The approach</h2>
                <div className="cols">
                    <div><h3>Flows, not packets</h3><p>Who talked to who, when, how much. Flow data is small, and it works on encrypted traffic. No need to break TLS.</p></div>
                    <div><h3>One network at a time</h3><p>Every network has its own normal. The model learns yours instead of a global idea of bad.</p></div>
                    <div><h3>Explain the flag</h3><p>An alert has to say why. &quot;Score 0.93&quot; helps nobody. &quot;This camera started talking to a new country&quot; does.</p></div>
                </div>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>Pipeline</h2>
                    <p className="sub">Five stages. Everything runs on the box.</p>
                    <ol className="pipe">
                        {pipeline.map((s, i) => (
                            <li key={s.h}>
                                <span className="step-n">{i + 1}</span>
                                <h3>{s.h}</h3>
                                <p>{s.p}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="wrap block">
                <h2>What the model looks at</h2>
                <p className="sub">Metadata only. No payloads, no browsing history, no message contents.</p>
                <div className="cols cols-4">
                    {features.map(f => (
                        <div key={f.h}>
                            <h3>{f.h}</h3>
                            <p>{f.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="wrap block">
                <h2>Models</h2>
                <p className="sub">Start dumb, add complexity only when it earns its place.</p>
                <ul className="status">
                    {models.map(m => (
                        <li key={m.what}>
                            <span className="what">{m.what}</span>
                            <span className={`tag t-${m.state.replace(/\s/g, "-")}`}>{m.state}</span>
                            <span className="note">{m.note}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="wrap block">
                <h2>An alert should read like this</h2>
                <div className="alert-demo" role="img" aria-label="Example alert">
                    <p className="alert-head"><span className="pulse" aria-hidden="true" /> Unusual upload <span className="alert-time">Tue 03:12</span></p>
                    <p className="alert-body"><strong>Front door camera</strong> sent 1.8 GB to a server in a country it has never contacted. It normally sends under 50 MB a day, only to the camera maker.</p>
                    <p className="alert-why">Why this matters: cameras get hijacked and used to move data or join botnets. Check the camera&apos;s account, update its firmware, or unplug it.</p>
                    <p className="alert-foot">Example only. Nullify doesn&apos;t send alerts yet.</p>
                </div>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>How it gets tested</h2>
                    <div className="cols">
                        {evals.map(e => (
                            <div key={e.h}>
                                <h3>{e.h}</h3>
                                <p>{e.p}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="wrap block">
                <h2>What it won&apos;t do</h2>
                <div className="prose">
                    <p>It won&apos;t stop attacks by itself. It flags them. Blocking on a guess breaks networks.</p>
                    <p>It won&apos;t catch everything. Anomaly detection misses attacks that look normal, and some attackers try hard to look normal.</p>
                    <p>It won&apos;t replace patching, backups, strong passwords and two-factor sign-in. Those still do most of the work. See the <Link href="/Cybersec/">checklist</Link>.</p>
                </div>
            </section>

            <section className="wrap block">
                <h2>Status</h2>
                <p className="empty">Not started. First step is collecting flow logs from my lab.</p>
            </section>

            <section className="wrap block">
                <h2>Luna, retired</h2>
                <div className="prose">
                    <p>The 2022 site had a GPT-3 chatbot called Luna. It was fun to build. It had nothing to do with network security, so it&apos;s gone.</p>
                </div>
            </section>
        </>
    );
}
