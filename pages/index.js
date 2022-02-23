<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
import styles from '../styles/Home.module.css'; 
export default function Home() {
  return ( 
        <main className="d-flex flex-column justify-content-around align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center homepage-head" style={{ width: '100vw', height: '100vh' }}> 
                <div className="container">
                    <h1 className="px-5 mb-3" style={{fontWeight: 250}}>Welcome to <span id="gradient-text" style={{ fontWeight: 650 }}>Nullify.one!</span></h1>
                    <p className="px-5 lead">This is a demo site for my projects and learning experiences. <br></br><br></br> Click the different pages to see different projects!</p> 
                </div> 
            </div> 

            <div className="container p-5">
                <p className="h2 mb-4">Click on the top bars to look at other pages!</p> 
                <hr />
                <p>
                    Made by Kieran Wittstruck, Template from BiscuitHost old website!
                </p> 
            </div>
        </main> 
  ); 
}
