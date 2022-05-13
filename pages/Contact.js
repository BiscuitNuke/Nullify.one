import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 
import Link from 'next/link'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center contact-back" style={{ padding: "10vh 15vw", height: '100vh'}} >
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Contact me</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/nully.svg" width="300%" height="100%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>You can contact me through Email, Phone Number, and Discord! Multiple links to my Instagram, Github, and LinkedIn on the page's footer. Thanks for visiting my page! Again this site is in development as I try to work on and research AI use in cybersecurity, but still make sure to check out my different accounts!</p> 
                    </div> 
                </div> 
                <hr />
                <div className="row">
                    <div className="col-sm">
                    </div> 
                    <p> You can check out my LinkedIN profile by clicking the image or going to</p>
                    <Link href="https://www.linkedin.com/in/kieranwittstruck/"><p><u>Click here to go to my LinkedIN profile</u></p></Link> 
                    <hr></hr>
                </div> 
            </div> 
        </main> 
  ); 
}
