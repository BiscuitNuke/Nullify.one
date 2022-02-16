import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 



export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Contact me</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/primary_black.svg" width="300%" height="300%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>You can contact me through Email, Phone Number, and Discord!</p> 
                    </div> 
                </div> 
                <hr></hr>
                <div className="row">
                    <div className="col-sm">
                        <p>
                            INFO
                        </p> 
                        <p>
                            INFO
                        </p> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
