import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Under attack?", description: "What to do first if your network is under attack, and who to call in the US." };

const steps = [
    { h: "Disconnect", p: "Unplug the affected device or turn off its Wi-Fi. Don't power it off." },
    { h: "Money moved?", p: "Call your bank now and ask for a recall. The first day matters most." },
    { h: "Use a clean device", p: "Change passwords and contact people from a device you trust." },
    { h: "Report it", p: "CISA and the FBI. Both are free." },
];

export default function Help() {
    return (
        <>
            <PageHead title="Under attack?" lede="Do these first. Nullify doesn't offer incident response, so the people to call are below." />
            <section className="wrap block">
                <ol className="steps steps-tight">
                    {steps.map((s, i) => (
                        <li key={s.h}><span className="step-n">{i + 1}</span><h3>{s.h}</h3><p>{s.p}</p></li>
                    ))}
                </ol>
            </section>
            <section className="wrap block">
                <h2>Who to call (US)</h2>
                <ul className="contact">
                    <li><span className="what">CISA</span><span><a href="tel:+18447292472">1-844-SAY-CISA</a>, <a href="mailto:report@cisa.gov">report@cisa.gov</a> or <a href="https://www.cisa.gov/report">cisa.gov/report</a>. 24/7.</span></li>
                    <li><span className="what">FBI</span><span><a href="https://www.ic3.gov/">ic3.gov</a> or your <a href="https://www.fbi.gov/contact-us/field-offices">local field office</a>.</span></li>
                    <li><span className="what">Your bank</span><span>The fraud number on your card, for any money sent.</span></li>
                    <li><span className="what">Emergency</span><span>If anyone is in danger, call 911.</span></li>
                </ul>
            </section>
        </>
    );
}
