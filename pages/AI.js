import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 


export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">Artifical Intellegence</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/NullAI.svg" width="300%" height="200%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>Recently, I have been working on different research projects into AI. This has included testing out different models such as GPT-3 and EleutherAI. These models let me change the specific-use dataset, and so I have been trying to train different models and learn how machine learning works. You can see different models that I have worked with down below!</p> 
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
