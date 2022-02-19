import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/globals.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 

function MyApp({ Component, pageProps }) {
  return (
    <div>
        <Navbar /> 
        <Component {...pageProps} />
        <Footer />
    </div> 
  ); 
}

export default MyApp