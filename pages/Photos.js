import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Photos</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <h2>This is some of the photos from AI development and production</h2>
                        <Image src="/GHP_stuff/Devc.jpg" width="600%" height="350%" className="rounded img-fluid" /> 
                        <p>This image shows the code behind the AI called BiscuitBot</p>
                        <Image src="/GHP_stuff/Jake.png" width="500%" height="450%" className="rounded img-fluid" /> 
                        
                    </div> 
                    <div className="col-sm">
                        <Image src="/GHP_stuff/Demo.jpg" width="500%" height="450%" className="rounded img-fluid" />
                        <p> This image shows the GPT-3 model using my own extra training to act like a coding student enabled, while using the social platform discord to converse</p>
                        <Image src="/GHP_stuff/Keras.png" width="800%" height="450%" className="rounded img-fluid" /> 
                    </div> 
                    <hr />
                    <div className="col-sm text-center position-relative">
                        <h2>This is some of the photos from Hardware repair and building</h2>
                        <Image src="/GHP_stuff/bitcoin.jpg" width="600%" height="350%" className="rounded img-fluid" /> 
                        <p>This image shows my bitcoin rig!</p>
                        <Image src="/GHP_stuff/servers.jpg" width="500%" height="550%" className="rounded img-fluid" />   
                    </div> 
                    <div className="col-sm">
                        <Image src="/GHP_stuff/router.jpg" width="600%" height="350%" className="rounded img-fluid" />
                        <p> This image shows my server network</p>
                        <Image src="/GHP_stuff/building.jpg" width="600%" height="650%" className="rounded img-fluid" /> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
