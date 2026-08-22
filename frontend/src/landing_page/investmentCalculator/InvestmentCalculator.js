import React from 'react';
import "./InvestmentCalculator.css"
import { NavLink, Outlet } from "react-router-dom";


function InvestmentCalculator() {
    return ( 
        <div className="calculator-page">

            <div className="calculator-nav">

                <NavLink to="/calculator" end>
                    SIP
                </NavLink>
                <NavLink to="/calculator/lumpsum">
                    Lumpsum
                </NavLink>
                <NavLink to="/calculator/swp">
                    SWP
                </NavLink>
                <NavLink to="/calculator/fd">
                    Fixed Deposit
                </NavLink>
                <NavLink to="/calculator/retirement">
                    Retirement
                </NavLink>
            </div>

            <div className="calculator-content">
                <Outlet />
            </div>

        </div>
     );
}

export default InvestmentCalculator;