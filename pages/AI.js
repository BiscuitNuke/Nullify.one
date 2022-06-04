import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 
import ChatBox from '../components/ChatBox'; 

export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Artificial Intelligence</h1> 
                <div className="row mb-3">
                </div> 
            </div>
            <ChatBox /> 
        </main> 
  ); 
}
