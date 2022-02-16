import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Hardware Projects</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/primary_black.svg" width="300%" height="300%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>Computer hardware has been my main interest as I like to work with things physcially and find out issues through trying different things. I have my main desktop computer that I have been working on since I was 10 years old, and I have servers in my basement to test different virtual machines as well as different hardware combinations.</p> 
                    </div> 
                </div> 
                <hr></hr>
                <div className="row">
                    <div className="col-sm">
                        <p>
                            More text can go here! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis lectus quis massa venenatis pulvinar. Donec sapien libero, varius sit amet rutrum sed, vulputate at justo. Ut aliquam quis risus dictum facilisis. In cursus leo augue, sed laoreet lectus egestas sed. Praesent metus purus, cursus a venenatis eu, volutpat sit amet sapien. Phasellus diam turpis, cursus at fringilla quis, pretium tempor ex. Proin blandit vel tellus et auctor.
                        </p> 
                        <p>
                            Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque faucibus magna eget massa porttitor, quis volutpat felis dignissim. Maecenas pulvinar neque arcu, in cursus lacus facilisis id. Aenean rhoncus hendrerit mi, vel molestie mi rhoncus vitae. Aenean aliquam diam tortor, non placerat felis semper id. Praesent in velit quam. Maecenas vel mollis quam, tincidunt ultrices diam. Nulla facilisi. Pellentesque non feugiat eros.
                        </p> 
                    </div> 
                </div> 
            </div> 
        </main> 
  ); 
}
