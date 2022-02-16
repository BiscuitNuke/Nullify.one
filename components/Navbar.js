import Link from 'next/link'; 
import Image from 'next/image'; 

export default function Navbar() {
    return (
        <nav className="pt-4 position-fixed top-0 w-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(5px)", zIndex: 100 }}>
            <ul className="d-flex justify-content-start align-items-center" id="navlist">
                <Link href="/"><li className="position-relative"><Image src="/brand_pkg/SVG/n1.svg" width="75" height="42.9" /></li></Link> 
                <Link href="/about"><li><a>About Nullify</a></li></Link> 
                <Link href="/Hardware"><li><a>Hardware Projects</a></li></Link>
                <Link href="/AI"><li><a>Artificial Intellgence</a></li></Link> 
                <Link href="/Cybersec"><li><a>Cybersecurity</a></li></Link> 
                <Link href="/WebsiteDesign"><li><a>Website Design</a></li></Link> 
                <Link href="/Contact"><li><a>Contact</a></li></Link>                 
            </ul> 
        </nav> 
    ); 
}
