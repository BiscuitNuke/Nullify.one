import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Hardware Projects</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/GHP_stuff/PC.jpg" width="600%" height="350%" className="rounded img-fluid" /> 
                        <p>This image shows my desktop today! It still contains parts from my first build. The image to the right shows when I was working on installing my Liquid cooling unit so I could overclock my CPU.</p>
                    </div> 
                    <div className="col-sm">
                        <p>Computer hardware has been my main interest as I like to work with things physically and find out issues through trying different things. I have the main desktop computer that I have been working on since I was ten years old, and I have servers in my basement to test different virtual machines and different hardware combinations.</p> 
                        <Image src="/GHP_stuff/My_PC.jpg" width="500%" height="350%" className="rounded img-fluid" /> 
                    </div> 
                </div> 
                <hr />
                <div className="row">
                    <div className="col-sm text-center position-relative">
                        <Image src="/GHP_stuff/servera.png" width="600%" height="250%" className="rounded img-fluid" />
                        <p>This is the server that runs my applications</p> 
                        <Image src="/GHP_stuff/mining.jpg" width="600%" height="350%" className="rounded img-fluid" /> 
                        <p>This is my Bitcoin Mining rig, where I use 3x 3060 Ti graphics cards to hash transactions on the Bitcoin Blockchain</p> 
                    </div> 
                    <div className="col-sm">
                        <p>
                            Currently, my main ESXi server is running on a My central ESXi server is currently running on a Ryzen 5, 3600x, the same server presently hosting this website! This server also runs various applications such as my code to train and test other AI datasets.Ryzen 5, 3600x, the same server that is currently hosting this website! This server also runs various applications such as my code that I use to train and test other AI datasets.
                        </p> 
                        <Image src="/GHP_stuff/AMDENGA.jpg" width="600%" height="400%" className="rounded img-fluid" /> 
                        <p>
                        I have been working on my server network's hardware, where I was testing an AMD Development processor that a workstation machine used for first-generation EPYC server processor development. This project so far has not worked due to vendor locks on the processor itself. I have also worked on fixing devices such as routers and phones as I try to learn more about how things work and how to repair something independently.
                        </p> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
