import Navbar from '../components/Navbar'; 
import Footer from '../components/Footer'; 
import '../styles/globals.css'; 
import 'bootstrap/dist/css/bootstrap.css'; 
import Head from "next/head";
import { useEffect } from 'react';
import $ from 'jquery';

function MyApp({ Component, pageProps }) {
useEffect(() => {
  import("bootstrap/dist/js/bootstrap"); 
}, []); 
  return (
    <div>
      <head>
        <meta name="description" content="Welcome to Nullify.one! This is my research and personal projects to work to eliminate complicated network security, one computational intelligence at a time." />
      </head>
      <Head>
        <meta property="og:image" content="/brand_pkg/PNG/N1.png" />
      </Head>
        <Navbar /> 
        <Component {...pageProps} />
        <Footer />
    </div> 
  ); 
}

export default MyApp