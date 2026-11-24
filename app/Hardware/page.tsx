import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Hardware Development" };

export default function Hardware() {
    return (
        <>
            <PageHead
                title={<><span className="struck">Shipping</span> Hardware.</>}
                lede="The plan was always a small box that sits on your network. Nothing is built yet. Here's what it would need to do."
            />
            <section className="wrap block">
                <h2>The box</h2>
                <div className="cols">
                    <div><h3>Sit on the network</h3><p>Plug it into a mirror port or sit it inline. It sees traffic. It doesn't need to see inside it.</p></div>
                    <div><h3>Run locally</h3><p>The model runs on the box. No cloud. Your traffic data stays in your house or office.</p></div>
                    <div><h3>Stay cheap</h3><p>Small-board computer, not a rack server. If it costs more than the router, nobody buys it.</p></div>
                </div>
            </section>
            <section className="wrap block">
                <h2>Status</h2>
                <p className="empty">Not started. Software comes first. The box only makes sense once the detection model works on my lab network.</p>
            </section>
        </>
    );
}
