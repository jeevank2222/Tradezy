import React from 'react';
import MutualFundShowcase from './MutualFundShowcase';

function Mfui() {
    return ( 
        <div className='text-center'>
        <h1 className='home-head'>Start Small. Grow Big</h1>
        <h3 className='home-small-head'>Invest in Mutual Funds</h3>
        <button>Invest now</button>
        <MutualFundShowcase />
        </div>
     );
}

export default Mfui;