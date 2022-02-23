import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Cybersecurity</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/GHP_stuff/Server.png" width="500%" height="300%" className="rounded img-fluid" /> 
                        <p>Screenshot of VMware ESXi where I can host different operating systems</p>
                    </div> 
                    <div className="col-sm">
                        <p>I have worked on many different cybersecurity projects including hosting my own test network for optimizing security and testing applications. I run a test network on my server that lets me simulate unsafe and hackable networks so I can test what I learn and try to learn more about ethical hacking and cybersecurity.</p> 
                    </div> 
                </div> 
                <hr />
                <div className="row">
                <div className="col-sm text-center position-relative">
                    <Image src="/GHP_stuff/Router_edge.jpg" width="500%" height="500%" className="rounded img-fluid" /> 
                    <p>A photo of my testing router, where I can host private networks from, that are seperate from the internet</p>
                </div> 
                    <div className="col-sm">
                        <p>
                            Recently I have been researching the uses of Artifical Intellegence into AI, with programs such as IBM Trusteer and Darktrace AI, programs that automatically scan networks and find issues before anyone can exploit them.
                        </p> 
                        <Image src="/GHP_stuff/Burp.png" width="500%" height="300%" className="rounded img-fluid" /> 
                        <p>
                            I have began to use programs like Burp suite to learn how cybersecurity is a growing concern over user and company data, as well as research into how I can do ethical hacking to earn bug bounties.
                            These types of programs have helped me pursue cybersecurity due to more work I have done in the field, as well as learning how attacks are done.
                        </p> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
