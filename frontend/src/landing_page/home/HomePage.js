import React from 'react';
import Hero from './Hero';
import Stockui from './Stockui';
import Mfui from './Mfui';
import  StockMarketSection from './StockMarketSection';


function HomePage() {
    return ( 
        <>
        <Hero/>
        <Stockui/>
         <StockMarketSection />
        <Mfui/>
        </>
     );
}

export default HomePage;