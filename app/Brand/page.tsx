import type { Metadata } from "next";
import PageHead from "../components/head";

export const metadata: Metadata = { title: "Brand Kit" };

const colors = [
    { name: "Ink", hex: "#0B0B0C", use: "Text, outline, wordmark" },
    { name: "Paper", hex: "#FFFFFF", use: "Background" },
    { name: "Red", hex: "#ED1C24", use: "The slash. Nothing else." },
    { name: "Red text", hex: "#B3121A", use: "Red text on white" },
    { name: "Muted", hex: "#5B5F66", use: "Secondary text" },
    { name: "Line", hex: "#E4E4E6", use: "Dividers" },
];

const marks = [
    { src: "lockup-color.svg", label: "Lockup", dark: false },
    { src: "lockup-color-on-dark.svg", label: "Lockup, dark", dark: true },
    { src: "icon-color.svg", label: "Icon", dark: false },
    { src: "icon-color-on-dark.svg", label: "Icon, dark", dark: true },
    { src: "wordmark-black.svg", label: "Wordmark", dark: false },
    { src: "n1-black.svg", label: "N1 monogram", dark: false },
];

export default function Brand() {
    return (
        <>
            <PageHead
                title="Brand Kit"
                lede="The N with a slash through it, black and white, and one red. Same logo since 2020, cleaned up."
            />
            <section className="wrap block">
                <a className="button" href="/brand/nullify-brand-kit.zip" download>Download the kit (ZIP, 0.5 MB)</a>
                <p className="sub dl-note">SVG and PNG logos, favicons, color tokens, and a short guide.</p>
            </section>
            <section className="wrap block">
                <h2>Logos</h2>
                <ul className="marks">
                    {marks.map(m => (
                        <li key={m.src} className={m.dark ? "dark" : undefined}>
                            <a href={`/brand/${m.src}`}><img src={`/brand/${m.src}`} alt={m.label} /></a>
                            <span>{m.label}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="wrap block">
                <h2>Colors</h2>
                <ul className="swatches">
                    {colors.map(c => (
                        <li key={c.hex}>
                            <span className="chip" style={{ background: c.hex }} />
                            <strong>{c.name}</strong>
                            <code>{c.hex}</code>
                            <span className="note">{c.use}</span>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="wrap block">
                <h2>Rules</h2>
                <div className="prose">
                    <p>Use the lockup first. Use the icon alone when space is tight.</p>
                    <p>Keep the slash red. Don't fill the outline, rotate it, or add effects.</p>
                    <p>Red goes on one mark per page. Not on big areas.</p>
                    <p>At 64 px and smaller, use the favicon version. It has thicker lines.</p>
                    <p>Headings are Helvetica Neue, weight 800, italic.</p>
                </div>
            </section>
        </>
    );
}
