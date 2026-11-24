import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Development Updates" };

const updates = [
    {
        date: "2026-11-24",
        title: "Reboot",
        items: [
            "New site. Same pages as before, honest content this time.",
            "New brand kit. Same N and slash, cleaned up. Get it on the Brand page.",
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
                        <li key={u.date}>
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
