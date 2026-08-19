import React from 'react';
import Hero from './Hero';
import Stockui from './Stockui';
import Mfui from './Mfui';
import Navbar from "../Navbar";
import Footer from  "../Footer";

function HomePage() {
    return ( 
        <>
        <Hero/>
        <Stockui/>
        <Mfui/>
        </>
     );
}

export default HomePage;