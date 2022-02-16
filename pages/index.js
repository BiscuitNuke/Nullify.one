import styles from '../styles/Home.module.css'; 

export default function Home() {
  return ( 
        <main className="d-flex flex-column justify-content-around align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center homepage-head" style={{ width: '100vw', height: '100vh' }}> 
                <div className="container">
                    <h1 className="px-5 mb-3">Welcome to <span id="gradient-text" style={{ fontWeight: 650 }}>Nullify.one!</span></h1>
                    <p className="px-5 lead">This is a demo site for my projects and learning experiences. <li></li>Click the different pages to see different projects!</p> 
                </div> 
            </div> 

            <div className="container p-5">
                <p className="h2 mb-4">Nullify.one</p> 
                <hr></hr>
                <p>
                    Made by Kieran Wittstruck. Please do not take content without asking first!
                    @BiscuitNuke on github!
                </p> 
            </div>
        </main> 
  ); 
}
