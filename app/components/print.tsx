"use client";

/** Opens the browser's print dialog. Hidden when printing. */
export default function PrintButton({ className = "" }: { className?: string }) {
    return (
        <button type="button" className={`button ${className}`} onClick={() => window.print()}>
            Print this page
        </button>
    );
}
