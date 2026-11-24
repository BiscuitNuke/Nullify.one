const N = "M298.84,250c4.25-65.16,8.5-130.32,12.75-195.47H86.89c-11.95,111.16-23.9,222.31-35.86,333.47 c136.53-115.65,213.55-180.88,213.55-180.88l0,0c0,0,172.37-151.42,173.71-152.59c-4.12,111.16-8.23,222.31-12.35,333.47H192.07 l21.91-219.12c3.29-0.81,12.33-2.57,22.31,1.59c11.66,4.86,16.81,14.56,18.33,17.53c3.36,6.56,3.82,12.26,4.75,23.54 c1.21,14.79-1.03,16.82,1.65,23.92c1.04,2.75,4.79,12.64,15.11,16.69C287.16,256.46,297.34,250.86,298.84,250z";

/** The Nullify icon. It draws itself in on page load. */
export default function Mark({ size = 40, weight = 14, className = "" }: { size?: number; weight?: number; className?: string }) {
    return (
        <svg
            className={`mark ${className}`}
            viewBox="34 28 420 380"
            width={size * (420 / 380)}
            height={size}
            aria-hidden="true"
            focusable="false"
        >
            <path className="mark-n" pathLength={1} d={N} fill="none" stroke="currentColor" strokeWidth={weight} strokeLinejoin="round" />
            <g stroke="#ED1C24" strokeWidth={weight + 2} strokeLinecap="round">
                <line className="mark-s1" pathLength={1} x1="70.56" y1="349.35" x2="294.86" y2="162.49" />
                <line className="mark-s2" pathLength={1} x1="217.17" y1="266.88" x2="430.72" y2="83.61" />
            </g>
        </svg>
    );
}
