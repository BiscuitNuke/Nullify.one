import Link from "next/link";
import Mark from "./components/mark";
import Struck from "./components/strike";

const problems = [
    { h: "Small networks get hit too", p: "Homes and small offices see the same scans, phishing and malware as large companies. They don't have a security team watching." },
    { h: "Nobody reads the logs", p: "A small business won't hire a SOC. The router keeps a log that nobody opens until something has already gone wrong." },
    { h: "Cloud tools want your data", p: "Most monitoring products ship your traffic to someone else's servers. For a lot of small offices, that's a non-starter." },
];

const steps = [
    { h: "Watch", p: "A small device on your network reads flow data: who talked to who, when, and how much. It works on encrypted traffic." },
    { h: "Learn", p: "A model learns what normal looks like on your network. Not a global list of bad. Your printer, your cameras, your people." },
    { h: "Flag", p: "When something breaks the pattern, you get a plain-English alert that says what changed and why it matters." },
];

const roadmap = [
    { item: "Concept", state: "done", note: "On-premise anomaly detection for small networks. Since 2020." },
    { item: "Test network", state: "done", note: "A live lab network with real devices and real traffic." },
    { item: "Traffic collection", state: "planned", note: "Flow logs from the lab network." },
    { item: "Detection model", state: "not started", note: "First model trained on lab data." },
    { item: "Hardware device", state: "not started", note: "Small, cheap, plugs into your switch." },
];

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
                            Nullify is building on-premise threat detection for small networks. It learns what normal looks like on your network and tells you when something isn&apos;t.
                        </p>
                        <div className="cta">
                            <Link href="/AI/" className="button">How it works</Link>
                            <Link href="#roadmap" className="button button-ghost">See the roadmap</Link>
                        </div>
                    </div>
                    <div className="hero-mark">
                        <Mark size={360} weight={10} className="mark-big" />
                    </div>
                </div>
            </section>

            <section className="wrap block">
                <h2>The problem</h2>
                <div className="cols">
                    {problems.map(i => (
                        <div key={i.h}>
                            <h3>{i.h}</h3>
                            <p>{i.p}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="band">
                <div className="wrap block">
                    <h2>How Nullify works</h2>
                    <p className="sub">Everything runs on your network. Your traffic never leaves the building.</p>
                    <ol className="steps">
                        {steps.map((s, i) => (
                            <li key={s.h}>
                                <span className="step-n">{i + 1}</span>
                                <h3>{s.h}</h3>
                                <p>{s.p}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section id="roadmap" className="wrap block">
                <h2>Roadmap</h2>
                <p className="sub">Nullify is in the research stage. There is no product to buy yet. This is where each piece stands.</p>
                <ul className="status">
                    {roadmap.map(s => (
                        <li key={s.item}>
                            <span className="what">{s.item}</span>
                            <span className={`tag t-${s.state.replace(/\s/g, "-")}`}>{s.state}</span>
                            <span className="note">{s.note}</span>
                        </li>
                    ))}
                </ul>
                <p className="more"><Link href="/Devup/">Read the development updates</Link></p>
            </section>

            <section className="wrap block">
                <h2>Need something today?</h2>
                <p className="sub">Nullify isn&apos;t ready. These are.</p>
                <div className="paths">
                    <Link href="/Help/" className="path path-red">
                        <span className="kicker">Right now</span>
                        <strong>Being attacked?</strong>
                        <span>Ransomware, hacked email, money sent to a scammer. What to do first and who to call.</span>
                    </Link>
                    <Link href="/Cybersec/" className="path">
                        <span className="kicker">This week</span>
                        <strong>Small network checklist</strong>
                        <span>The free basics that stop most attacks on home and small-office networks.</span>
                    </Link>
                </div>
            </section>

            <section className="wrap">
                <div className="closer">
                    <div>
                        <h2>Run a small network?</h2>
                        <p>Tell us what you&apos;d want it to catch. Early input shapes what gets built.</p>
                    </div>
                    <a href="mailto:kierana@nullify.one" className="button button-invert">Get in touch</a>
                </div>
            </section>
        </>
    );
}
