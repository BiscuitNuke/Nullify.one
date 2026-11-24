"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TopBar() {
    const onHelp = usePathname()?.toLowerCase().startsWith("/help");
    return (
        <div className={`topbar${onHelp ? " topbar-live" : ""}`}>
            <div className="wrap topbar-in">
                {onHelp ? (
                    <>
                        <p><span className="pulse" aria-hidden="true" /> <strong>Incident steps.</strong> <span className="hide-sm">Nullify can&apos;t respond to incidents. The people who can are listed below.</span></p>
                        <a href="tel:+18447292472">Call CISA 24/7</a>
                    </>
                ) : (
                    <>
                        <p><span className="pulse" aria-hidden="true" /> <strong>Being attacked?</strong> <span className="hide-sm">Disconnect, then report it. Here&apos;s who to call.</span></p>
                        <Link href="/Help/">Get help now</Link>
                    </>
                )}
            </div>
        </div>
    );
}
