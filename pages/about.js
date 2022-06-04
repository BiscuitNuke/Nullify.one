import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">About Nullify</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/nully.svg" width="450%" height="150%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>Hello! I am Kieran Wittstruck! Welcome to Nullify.one, my portfolio and testing site! Nullify is based in Alpharetta, GA and has been a project/site I have actively been updating. I have different tabs for different things that I have worked on, researched, and done, so make sure to check out each one. My main focus for this site is Cybersecurity, and the impact AI can have on computer system security.</p> 
                    </div> 
                </div> 
                <div className="row">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/Nullif.svg" width="500%" height="300%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
