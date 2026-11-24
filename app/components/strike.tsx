/**
 * A word with two red slashes through it, like the logo.
 *
 * Each slash is a filled brush shape, not a stroked line. A fill stays the
 * right shape when the SVG stretches to fit the word (preserveAspectRatio
 * "none"). A stroke would get thick on one axis and thin on the other.
 *
 * The draw-in animates `clip-path: inset()` on the wrapper span. That works
 * the same in every browser. Animating stroke-dashoffset on a stretched SVG
 * does not.
 */
const SLASH_1 = "M0.6,16.4 C22,14.6 58,10.4 99.2,5.1 L99.6,9.3 C58,14.2 22,18.4 0.2,20.2 Z";
const SLASH_2 = "M0.6,10.9 C24,9.1 60,5.2 99.2,0.6 L99.6,4.4 C60,8.9 24,12.8 0.2,14.4 Z";

export default function Struck({ children }: { children: React.ReactNode }) {
    return (
        <span className="struck">
            {children}
            <span className="slash slash-1" aria-hidden="true">
                <svg viewBox="0 0 100 21" preserveAspectRatio="none" focusable="false">
                    <path d={SLASH_1} />
                </svg>
            </span>
            <span className="slash slash-2" aria-hidden="true">
                <svg viewBox="0 0 100 21" preserveAspectRatio="none" focusable="false">
                    <path d={SLASH_2} />
                </svg>
            </span>
        </span>
    );
}
