<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
import styles from '../styles/Home.module.css'; 
import Head from "next/head";


export default function Home() {
  return ( 
        <main className="d-flex flex-column justify-content-around align-items-center">
            <Head>
                <title>Nullify.one - Homepage</title>
                <meta
                name="Nullify.one - Homepage"
                content="Welcome to Nullify.one! Our team is working to eliminate complicated network security, one computational intelligence at a time."
                />
            </Head>
            <div className="d-flex flex-column justify-content-center align-items-center homepage-head" style={{ width: '100vw', height: '100vh' }}> 
                <div className="container">
                    <h1 className="px-5 mb-3" style={{fontWeight: 250}}>Welcome to <span id="headtext" style={{ fontWeight: 650 }}>Nullify.one!</span></h1>
                    <p className="px-5 mb-3 text-muted lead"  style={{fontWeight: 200, width: "60%"}}>I am working on a project to <span id="gradtext" style={{ fontWeight: 650 }}>eliminate complicated network security, one computational intelligence at a time.</span></p>
                </div> 
            </div> 

            <div className="container p-5">
                <p className="h2 mb-4">Click on the navigation bars to look at other pages! Some might be incomplete!</p> 
                <hr />
                <p>
                    Made by Kieran Wittstruck and the Nullify.one team. THIS SITE IS STILL BEING REWORKED, AND IS CURRENTLY INCOMPLETE.
                </p> 
            </div>
        </main> 
  ); 
}
