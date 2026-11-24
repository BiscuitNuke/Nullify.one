import Link from "next/link";

export default function TopBar() {
    return (
        <div className="topbar">
            <div className="wrap topbar-in">
                <p><span className="pulse" aria-hidden="true" /> <strong>Under attack?</strong> <span className="hide-sm">Here&apos;s what to do first.</span></p>
                <Link href="/Help/">Get help</Link>
            </div>
        </div>
    );
}
