import Link from 'next/link'; 
import Image from 'next/image'; 

export default function Navbar() {
    return (
        <nav className="navbar-light navbar navbar-expand-lg pt-4 position-fixed top-0 w-100" style={{ backgroundColor: "rgba(255, 255, 255, 0.7)", backdropFilter: "blur(5px)", zIndex: 100 }}>
            <div className="container-fluid">
                <Link href="/" className="position-relative navbar-brand"><Image src="/brand_pkg/SVG/N1.svg" width="75" height="42.9" /></Link> 
                <button className="navbar-toggler fwm_button border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent " aria-expanded="false" aria-label="Toggle navigation" ><span className="navbar-toggler-icon" /></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav " id="navlist">
                        <li className="nav-item"><Link className="nav-link" href="/about">About Nullify </Link></li> 
                        <li className="nav-item"><Link className="nav-link" href="/Hardware">Hardware Projects </Link></li> 
                        <li className="nav-item"><Link className="nav-link" href="/AI">Artifical Intellegence </Link></li> 
                        <li className="nav-item"><Link className="nav-link" href="/Cybersec">Cybersecurity </Link></li> 
                        <li className="nav-item"><Link className="nav-link" href="/Photos">Extra Photos </Link></li> 
                        <li className="nav-item"><Link className="nav-link" href="/Contact">Contact </Link></li>                 
                    </ul> 
                </div>
            </div>
        </nav> 
    ); 
}
