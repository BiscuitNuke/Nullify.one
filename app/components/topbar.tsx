import Link from "next/link";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="wrap topbar-in">
                <p><span className="pulse" aria-hidden="true" /> <strong>Being attacked?</strong> <span className="hide-sm">Disconnect, then report it. Here&apos;s who to call.</span></p>
                <Link href="/Help/">Get help now</Link>
            </div>
        </div>
    );
}
