import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Website Design</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/GHP_stuff/Webcode.png" width="700%" height="100%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>I have been working on this website so I learn both how to do CSS and how to host and deploy websites using Next.JS as well as learning Javascript.</p> 
                    </div> 
                </div>
                <hr />
                <div className="row">
                    <div className="col-sm">
                        <p>
                            This site is currently running on my local computers as it is shown on the open internet. I use Cloudflare to deploy development versions that let me test my code and push it to Github.
                        </p> 
                            <Image src="/GHP_stuff/Gitcode.png" width="800%" height="340%" className="rounded img-fluid" /> 
                        <p>
                            Base files for the website were from a development project called "BiscuitHost", but since then I have been working on this website due to an improved name and development system, so a big thanks to @Lathryx for the previous website teplate. 
                        </p> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
