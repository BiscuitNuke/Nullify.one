import Link from 'next/link'; 
import Image from 'next/image'; 

export default function Footer() {
    return (
        <footer className="pt-4 bottom- w-100" style={{ backgroundColor: "rgba(237, 42, 36)", backdropFilter: "blur(1px)", zIndex: 100 }}>
            <ul className="d-flex justify-content-start align-items-center" id="navlist">
                <Link href="/"><li className="position-relative"><Image src="/brand_pkg/SVG/null.svg" width="200" height="50" /></li></Link> 
                <Link href="https://github.com/biscuitnuke"><li className="position-relative"><Image src="/Icons/GitHub.svg" width="60" height="50" /></li></Link> 
                <Link href="https://www.linkedin.com/in/kieranwittstruck/"><li className="position-relative"><Image src="/Icons/LinkedIN.svg" width="60" height="50" /></li></Link> 
                <Link href="https://www.instagram.com/kieran_wittstruck/"><li className="position-relative"><Image src="/Icons/Instagram.svg" width="60" height="50" /></li></Link> 
                <Link href="/"><p className="position-relative"><Image src="/icons/" width="800" height="50" /></p></Link> 
            </ul>
            <br></br>
        </footer> 
    ); 
}
