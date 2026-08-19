import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5">
            <div className='row text-center'>
                <div className='heroHead mb-5 '>
                <h1 className='hero-title mb-5'>Investing&nbsp;made&nbsp;easy</h1>
                <button className='btn btn-primary btn-get'>Get started</button>
                </div>
                <img src='images/Hero.png' alt='HeroImg' />
            </div>
        </div>
     );
}

export default Hero;