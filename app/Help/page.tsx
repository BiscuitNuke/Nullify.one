import type { Metadata } from "next";
import PrintButton from "../components/print";

export const metadata: Metadata = {
    title: "Being attacked?",
    description: "What to do right now if your home or small-business network is under attack: ransomware, hacked email, wire fraud, data breaches. Who to call in the US.",
};

const first = [
    { h: "Disconnect", p: "Unplug the network cable or turn off Wi-Fi on the affected devices. Don't power them off. Memory and logs help investigators." },
    { h: "Use a clean device", p: "Do everything else from a phone or computer you trust, ideally on cellular data. Assume the attacker can read your email." },
    { h: "Write it down", p: "Time you noticed, what you saw, which devices. Take photos of screens. Don't delete anything." },
    { h: "Call for help", p: "Money moved? Call your bank first. Everything else: CISA, the FBI, and your insurer or IT provider." },
];

type Scenario = { id: string; h: string; tell: string; urgent?: boolean; now: React.ReactNode[]; dont: string[]; report: React.ReactNode[] };

const scenarios: Scenario[] = [
    {
        id: "money",
        h: "Money went to a scammer",
        tell: "A fake invoice, changed bank details, a boss asking for a wire or gift cards.",
        urgent: true,
        now: [
            <><strong>Call your bank right now.</strong> Use the number on your card or statement. Say &quot;fraudulent wire&quot; or &quot;business email compromise&quot; and ask for a recall.</>,
            <>Call your <a href="https://www.fbi.gov/contact-us/field-offices">local FBI field office</a> and file at <a href="https://www.ic3.gov/">ic3.gov</a>. The FBI&apos;s Recovery Asset Team works with banks to freeze money, but only while it&apos;s fresh.</>,
            "Keep every email, text and invoice. Don't reply to the scammer.",
        ],
        dont: ["Wait to see if it sorts itself out. The first day matters most.", "Pay a \"recovery service\" that contacts you. That's a second scam."],
        report: [<>Bank fraud line</>, <><a href="https://www.ic3.gov/">ic3.gov</a></>, <>Local FBI field office</>],
    },
    {
        id: "ransomware",
        h: "Ransomware",
        tell: "Files renamed or won't open, a ransom note, screens locked with a payment demand.",
        urgent: true,
        now: [
            "Disconnect affected devices. If it's spreading, unplug the internet at the modem.",
            "Disconnect backup drives and NAS boxes so they don't get encrypted too.",
            "Photograph the ransom note. It often names the ransomware.",
            <>Check <a href="https://www.nomoreransom.org/">nomoreransom.org</a> for a free decryptor.</>,
        ],
        dont: ["Pay before talking to law enforcement and your insurer.", "Wipe or reinstall yet. Evidence goes with it.", "Plug a backup into an infected machine."],
        report: [<><a href="https://www.cisa.gov/report">cisa.gov/report</a></>, <><a href="https://www.ic3.gov/">ic3.gov</a></>, <>Your insurer</>],
    },
    {
        id: "account",
        h: "Hacked email or account",
        tell: "Password changed, messages you didn't send, login alerts from places you've never been.",
        now: [
            "From a clean device, reset the password and sign out every session.",
            "Turn on two-factor sign-in. Use an app or key, not text messages, if you can.",
            "Check forwarding rules, filters, recovery email and phone. Attackers add these to stay in.",
            "Change any other account that used the same password.",
            "Warn your contacts. They're next.",
        ],
        dont: ["Reset passwords from the device you think is infected."],
        report: [<>The provider&apos;s account recovery</>, <><a href="https://www.identitytheft.gov/">identitytheft.gov</a> if your identity was used</>],
    },
    {
        id: "remote",
        h: "Someone was on your computer",
        tell: "A \"tech support\" call, a pop-up with a phone number, a stranger moving your mouse.",
        now: [
            "Disconnect from the internet.",
            "Uninstall any remote access app they had you install, like AnyDesk or TeamViewer.",
            "If you opened banking or typed card numbers, call your bank.",
            "From a clean device, change your email and banking passwords.",
            "Have the computer checked or reinstalled before you trust it again.",
        ],
        dont: ["Call back a number from a pop-up.", "Let them \"refund\" you. That's how they get more money."],
        report: [<><a href="https://reportfraud.ftc.gov/">reportfraud.ftc.gov</a></>, <><a href="https://www.ic3.gov/">ic3.gov</a></>],
    },
    {
        id: "data",
        h: "Customer or employee data got out",
        tell: "A stolen laptop, a leaked database, an attacker with access to records.",
        now: [
            "Stop the leak: lock the account, revoke the key, take the share offline.",
            "Figure out what data, whose, and when. Keep logs.",
            "Call your insurer and a lawyer before you announce anything.",
            <>Businesses with New York residents&apos; data have to notify the people affected and the state. <a href="https://ag.ny.gov/internet/data-breach">Report to the NY Attorney General</a>. Other states have their own rules.</>,
        ],
        dont: ["Delete logs to clean up.", "Guess publicly about what happened."],
        report: [<><a href="https://ag.ny.gov/internet/data-breach">NY Attorney General</a> (NY businesses)</>, <><a href="https://www.cisa.gov/report">cisa.gov/report</a></>],
    },
    {
        id: "site",
        h: "Website down or defaced",
        tell: "Your site won't load, shows a hacker's message, or someone wants money to stop an attack.",
        now: [
            "Call your hosting or DNS provider. Most have DDoS protection you can turn on now.",
            "Change hosting, CMS and DNS passwords. Turn on two-factor.",
            "Take a copy of the defaced site and the server logs before you restore.",
            "Restore from a clean backup, then patch whatever got in.",
        ],
        dont: ["Pay an extortion demand to stop a DDoS."],
        report: [<><a href="https://www.cisa.gov/report">cisa.gov/report</a></>, <><a href="https://www.ic3.gov/">ic3.gov</a></>],
    },
    {
        id: "weird",
        h: "Something just seems off",
        tell: "Strange devices on the Wi-Fi, a camera with its light on, a router setting you didn't change.",
        now: [
            "Unplug the device that's acting weird.",
            "Change the router admin password and the Wi-Fi password.",
            "Update the router firmware. Turn off remote admin and UPnP.",
            "Look for port forwards and connected devices you don't recognize.",
        ],
        dont: ["Ignore it because nothing is broken yet."],
        report: [<>Your IT provider, if you have one</>, <><a href="https://www.cisa.gov/report">cisa.gov/report</a> if it&apos;s a business</>],
    },
];

const contacts = [
    { who: "911", how: <>Anyone in danger, threats of violence, or extortion that names a place or person.</>, hot: true },
    { who: "CISA", how: <><a href="tel:+18447292472">1-844-SAY-CISA</a> (1-844-729-2472), <a href="mailto:report@cisa.gov">report@cisa.gov</a>, or <a href="https://www.cisa.gov/report">cisa.gov/report</a>. 24/7, free.</> },
    { who: "FBI", how: <>File at <a href="https://www.ic3.gov/">ic3.gov</a>. For money that just moved, also call your <a href="https://www.fbi.gov/contact-us/field-offices">local field office</a>.</> },
    { who: "Your bank", how: <>The fraud number on the back of your card or on your statement. Not a number from an email.</> },
    { who: "FTC", how: <>Scams: <a href="https://reportfraud.ftc.gov/">reportfraud.ftc.gov</a>. Identity theft: <a href="https://www.identitytheft.gov/">identitytheft.gov</a>.</> },
    { who: "NY AG", how: <>Businesses reporting a data breach: <a href="https://ag.ny.gov/internet/data-breach">ag.ny.gov/internet/data-breach</a>.</> },
    { who: "Insurer / IT", how: <>Your cyber insurance carrier and IT provider. Many policies need early notice and have their own response team.</> },
];

const log = [
    "Date and time you first noticed",
    "What you saw, in your own words",
    "Which devices, accounts and people are affected",
    "Photos of ransom notes, error messages and pop-ups",
    "Email addresses, phone numbers and websites the attacker used",
    "Money: amount, date, your account, the receiving bank and account",
    "Who you called, when, and any case or ticket numbers",
];

const signs = [
    "Files you can't open, or new file extensions everywhere",
    "Login alerts, password reset emails, or 2FA codes you didn't ask for",
    "Sent messages you didn't write",
    "New admin accounts, mail rules or apps you didn't add",
    "Antivirus turned off by itself",
    "The internet suddenly slow, with the router lights going nonstop",
];

export default function Help() {
    return (
        <div className="ir">
            <section className="ir-hero">
                <div className="wrap">
                    <p className="ir-label"><span className="pulse" aria-hidden="true" /> Incident response</p>
                    <h1>Being attacked?</h1>
                    <p className="ir-lede">Do these four things first, in order. Then find what&apos;s happening below.</p>
                    <ol className="ir-first">
                        {first.map((s, i) => (
                            <li key={s.h}>
                                <span className="ir-n">{i + 1}</span>
                                <h2>{s.h}</h2>
                                <p>{s.p}</p>
                            </li>
                        ))}
                    </ol>
                    <div className="ir-calls">
                        <a className="ir-call" href="tel:+18447292472"><span>CISA, 24/7</span>1-844-SAY-CISA</a>
                        <a className="ir-call" href="https://www.ic3.gov/"><span>FBI</span>ic3.gov</a>
                        <a className="ir-call ir-call-red" href="tel:911"><span>Someone in danger</span>911</a>
                    </div>
                </div>
            </section>

            <section className="wrap block">
                <h2>What&apos;s happening?</h2>
                <p className="sub">Pick the closest match. If more than one fits, start with the red ones.</p>
                <nav className="triage" aria-label="Incident types">
                    {scenarios.map(s => (
                        <a key={s.id} href={`#${s.id}`} className={s.urgent ? "urgent" : undefined}>
                            <strong>{s.h}</strong>
                            <span>{s.tell}</span>
                        </a>
                    ))}
                </nav>
            </section>

            {scenarios.map(s => (
                <section key={s.id} id={s.id} className={`wrap block scenario${s.urgent ? " urgent" : ""}`}>
                    <div className="scenario-head">
                        {s.urgent && <p className="kicker">Time matters</p>}
                        <h2>{s.h}</h2>
                        <p className="sub">{s.tell}</p>
                    </div>
                    <div className="scenario-grid">
                        <div>
                            <h3>Do now</h3>
                            <ol className="do">{s.now.map((n, i) => <li key={i}>{n}</li>)}</ol>
                        </div>
                        <div>
                            <h3>Don&apos;t</h3>
                            <ul className="dont">{s.dont.map(d => <li key={d}>{d}</li>)}</ul>
                            <h3>Report to</h3>
                            <ul className="report">{s.report.map((r, i) => <li key={i}>{r}</li>)}</ul>
                        </div>
                    </div>
                    <p className="back"><a href="#main">Back to the top</a></p>
                </section>
            ))}

            <section className="band" id="contacts">
                <div className="wrap block">
                    <h2>Who to call (US)</h2>
                    <p className="sub">All free. Reporting helps even if you don&apos;t get the money or data back. It warns the next person.</p>
                    <ul className="contact wide">
                        {contacts.map(c => (
                            <li key={c.who} className={c.hot ? "hot" : undefined}>
                                <span className="what">{c.who}</span>
                                <span>{c.how}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="wrap block">
                <div className="two">
                    <div>
                        <h2>Write this down</h2>
                        <p className="sub">Investigators, banks and insurers will ask for it.</p>
                        <ul className="checklist">{log.map(l => <li key={l}>{l}</li>)}</ul>
                    </div>
                    <div>
                        <h2>Not sure it&apos;s an attack?</h2>
                        <p className="sub">Any of these is worth taking seriously.</p>
                        <ul className="checklist checklist-warn">{signs.map(l => <li key={l}>{l}</li>)}</ul>
                    </div>
                </div>
            </section>

            <section className="wrap block">
                <div className="ir-note">
                    <div>
                        <h2>About this page</h2>
                        <p>Nullify is a research project. It can&apos;t take your case, investigate, or recover anything. This page is general guidance, not legal advice. Last checked 2026-11-24.</p>
                    </div>
                    <PrintButton className="no-print" />
                </div>
            </section>
        </div>
    );
}
