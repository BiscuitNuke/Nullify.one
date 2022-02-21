import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 
import Link from 'next/link'; 



export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Welcome to the supersecretpage!</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/Icons/Atom.svg" width="300%" height="300%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <h2>As reading the name, this is a hidden webpage, and congrats for finding it! Here you can find my Twitch, among other gameserver links! Have fun!</h2>
                    </div> 
                </div> 
                <hr></hr>
                <h3>IP Address : 107.150.23.164 --- You are going to need port 25568 to connect to the Minecraft Server</h3>
                <br></br>
                <br></br>
                <br></br>
                <Link href="https://twitch.tv/biscuitgoingnuclear">
                    <h1> My Twitch!</h1>
                </Link>
            </div> 
        </main> 
  ); 
}
