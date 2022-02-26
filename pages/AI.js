import TeamCard from '../components/TeamCard'; 
import Image from 'next/image'; 
import ChatBox from '../components/ChatBox'; 

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
                        <p>Recently, I have been working on different research projects into AI. This has included testing out other models such as GPT-3 and EleutherAI. These models let me change the specific-use dataset, so I have been trying to train different models and learn how machine learning works. You can see other models that I have worked with down below! I have been researching AI due to my interest in cybersecurity and how AI can help find issues before humans can, thus keeping systems secure and safe while protecting user privacy. </p> 
                    </div> 
                </div> 
                <hr />
                <div className="row">
                <div className="col-sm text-center position-relative">
                    <Image src="/GHP_Stuff/Devc.jpg" width="800%" height="500%" className="rounded img-fluid" /> 
                    <p>This was one of my testing AI's, coded in Python 3</p>
                </div> 
                    <div className="col-sm">
                        <p>
                        Here is one of the AI's I have recently worked with, called GPT-3 made by OpenAI, it can use API requests to return responses using a pre set model. This image also shows how I have added a small training model of my own, so it learns from what I have inputted for a first sentence.
                            It can also be changed to use different models and learn in many different ways. This AI was used in connection to Discord.JS, a package that lets me control a discord bot, so it presumed a personality on a Discord Server.
                        </p> 
                        <Image src="/GHP_Stuff/Demo.jpg" width="650%" height="600%" className="rounded img-fluid" /> 
                        <p>
                            This image shows one of the bots I have worked on responding to what I say, as it pulls what I say from the chat application and automatically formulates a response using OpenAI's API.
                        </p> 
                    </div> 
                </div> 
            </div>
            <ChatBox /> 
        </main> 
  ); 
}
