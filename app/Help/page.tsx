import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Being attacked?" };

const steps = [
    { h: "Disconnect", p: "Unplug the affected device from the network or turn off its Wi-Fi. Don't power it off. Memory and logs help investigators." },
    { h: "Don't pay, don't wipe", p: "If it's ransomware, don't pay and don't reinstall yet. Take photos of any ransom note or error on screen." },
    { h: "Report it", p: "Call CISA or file with the FBI. Both are free. Details below." },
    { h: "Reset from a clean device", p: "Change passwords for email, banking and admin accounts from a device you know is clean. Turn on two-factor sign-in." },
];

export default function Help() {
    return (
        <>
            <PageHead
                title="Being attacked?"
                lede="Do these four things first. Nullify doesn't offer incident response, so the people to call are listed below."
            />
            <section className="wrap block">
                <ol className="steps steps-tight">
                    {steps.map((s, i) => (
                        <li key={s.h}>
                            <span className="step-n">{i + 1}</span>
                            <h3>{s.h}</h3>
                            <p>{s.p}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="wrap block">
                <h2>Who to call (US)</h2>
                <ul className="contact">
                    <li><span className="what">CISA</span><span>Call <a href="tel:+18447292472">1-844-SAY-CISA</a> (1-844-729-2472) or report at <a href="https://www.cisa.gov/report">cisa.gov/report</a>. 24/7.</span></li>
                    <li><span className="what">FBI</span><span>File a complaint at <a href="https://www.ic3.gov/">ic3.gov</a>, or contact your <a href="https://www.fbi.gov/contact-us/field-offices">local field office</a>.</span></li>
                    <li><span className="what">Emergency</span><span>If anyone is in danger, call 911.</span></li>
                    <li><span className="what">Business</span><span>Call your cyber insurance carrier or IT provider. Many policies require early notice.</span></li>
                </ul>
            </section>
        </>
    );
}
