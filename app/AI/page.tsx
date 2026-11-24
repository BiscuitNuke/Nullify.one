import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Nullify AI" };

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
                    <div><h3>Flows, not packets</h3><p>Who talked to who, when, how much. Flow data is small, and it works on encrypted traffic.</p></div>
                    <div><h3>One network at a time</h3><p>Every network has its own normal. The model learns yours instead of a global idea of bad.</p></div>
                    <div><h3>Explain the flag</h3><p>An alert has to say why. "Score 0.93" helps nobody. "This camera started talking to a new country" does.</p></div>
                </div>
            </section>
            <section className="wrap block">
                <h2>Status</h2>
                <p className="empty">Not started. First step is collecting flow logs from my lab.</p>
            </section>
            <section className="wrap block">
                <h2>Luna, retired</h2>
                <div className="prose">
                    <p>The 2022 site had a GPT-3 chatbot called Luna. It was fun to build. It had nothing to do with network security, so it's gone.</p>
                </div>
            </section>
        </>
    );
}
