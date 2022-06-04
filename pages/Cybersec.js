import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Cybersecurity</h1> 
                <div className="row mb-3">
                    <iframe width="640" height="640" src="https://cybermap.kaspersky.com/en/widget/dynamic/dark" frameborder="0"></iframe>
                </div> 

            </div> 
        </main> 
  ); 
}
