import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Development Updates" };

const updates = [
    {
        date: "2026-11-24",
        title: "Help page and full pages",
        items: [
            "Being attacked? is now a real incident page. Pick what's happening, get the steps and who to call. It prints.",
            "AI page: the pipeline, what the model looks at, which models come first, and how it gets tested.",
            "Hardware page: how the box plugs in, target spec, and how it compares to what's already out there.",
            "Cybersecurity page: a free checklist for small networks.",
            "The red slashes through \"Complicated\" are a proper SVG now, drawn like the logo.",
            "Added security.txt so researchers know where to report problems.",
        ],
    },
    {
        date: "2026-11-24",
        title: "Reboot",
        items: [
            "New site. Same pages as before, honest content this time.",
            "New brand kit. Same N and slash, cleaned up. Get it on the Brand page.",
            "New Being attacked? page with who to call.",
            "Luna the chatbot is gone.",
            "The old photo gallery is gone.",
        ],
    },
];

export default function Devup() {
    return (
        <>
            <PageHead title="Development Updates" lede="What changed, and when. Older updates weren't kept." />
            <section className="wrap block">
                <ol className="updates">
                    {updates.map(u => (
                        <li key={u.date + u.title}>
                            <time dateTime={u.date}>{u.date}</time>
                            <div>
                                <h2>{u.title}</h2>
                                <ul>{u.items.map(i => <li key={i}>{i}</li>)}</ul>
                            </div>
                        </li>
                    ))}
                </ol>
            </section>
        </>
    );
}
