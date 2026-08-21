import React from 'react';
import "./ExploreMF.css"
import mutualFunds from "./mfData";

function ExploreMF() {
    return ( 
        <>
             <div className="explore-mf">
            <h1>Explore Mutual Funds</h1>
            <div className="mf-card-container">
                {mutualFunds.map((fund, index) => (
                    <div className="mf-card" key={index}>
                        <div className="mf-image">
                            <img src={fund.image} alt={fund.name} />
                        </div>
                        <h3>{fund.name}</h3>
                    </div>
                ))}
            </div>
        </div>
        </>
     );
}

export default ExploreMF;