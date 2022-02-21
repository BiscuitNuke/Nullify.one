import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 

const teamInfo = [ // in progress 
    {
        imgSrc: "https://res.cloudinary.com/practicaldev/image/fetch/s--g26D0EvY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiz4s3guxkngasst7tdg.png", 
        name: "Lathryx", 
        title: "Senior Dev"
    }, 
    {
        imgSrc: "https://res.cloudinary.com/practicaldev/image/fetch/s--g26D0EvY--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eiz4s3guxkngasst7tdg.png", 
        name: "Nick", 
        title: "Concept Artist/Hardware Engineer"
    }
]; 

export default function About() {
  return ( 
        <main className="vp-container d-flex flex-column align-items-center" style={{ padding: "10vh 15vw" }}>
            <div className="container mt-5">
                <h1 className="px-4 mt-2 mb-4">About Nullify</h1> 
                <div className="row mb-3">
                    <div className="col-sm text-center position-relative">
                        <Image src="/brand_pkg/SVG/null.svg" width="250%" height="150%" className="rounded img-fluid" /> 
                    </div> 
                    <div className="col-sm">
                        <p>Hello! I am Kieran Wittstruck! Welcome to Nullify.one, my personal portfolio and testing site! Nullify is based in Alpharetta, GA and has been a project I have been working on I have different tabs for different things that I have worked on and done, so make sure to check out each one. I have also been starting to make open source github repositories for my projects so make sure to check out my Github.</p> 
                    </div> 
                </div> 
                <hr></hr>
                <div className="row">
                    <div className="col-sm text-center position-relative">
                        <Image src="/GHP_stuff/school.jpeg" width="500%" height="300%" className="rounded img-fluid" /> 
                    </div> 
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
