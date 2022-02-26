import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 

const teamInfo = [ // in progress 
    {
        imgSrc: "https://res.cloudinary.com/practicaldev/image/fetch/s--g26D0EvY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiz4s3guxkngasst7tdg.png", 
        name: "Lathryx", 
        title: "Senior Dev"
    }, 
    {
        imgSrc: "https://res.cloudinary.com/practicaldev/image/fetch/s--g26D0EvY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiz4s3guxkngasst7tdg.png", 
        name: "Nick", 
        title: "Concept Artist/Hardware Engineer"
    }
]; 

export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">About Nullify</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/null.svg" width="450%" height="150%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>Hello! I am Kieran Wittstruck! Welcome to Nullify.one, my portfolio and testing site! Nullify is based in Alpharetta, GA and has been a project I have actively been updating. I have different tabs for different things that I have worked on and done, so make sure to check out each one. I have also been starting to make open source GitHub repositories for my projects, so check out my Github. This website is meant to instruct or teach people as the code will (soon) be open source to many of my projects! My main interest is focused on cybersecurity and how growing digital threats impact everyone</p> 
                    </div> 
                </div> 
                <hr />
                <div className="row">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/Nullify.svg" width="500%" height="300%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>
                        This project has been developed and worked on by many people, as the website template was made by @Lathryx for BiscuitHost. I have changed and edited things, and I thank him for his help.
                        </p> 
                        <h3>
                            Keep checking back in for more updates on projects and developments! We have a lot of things in the works and can't wait to share them!
                        </h3> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
