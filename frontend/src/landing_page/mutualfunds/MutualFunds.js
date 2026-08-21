import React from 'react';
import "./MutualFunds.css"
import ExploreMF from './ExploreMF/ExploreMF';
import Dashboard from './Dashboard/Dashboard';
import { NavLink, Outlet } from "react-router-dom";


function MutualFunds() {
    return ( 
        <>
        <div className="mutual-funds-page">
            <div className="mf-nav">
                <NavLink to="/mutualfunds" end>
                    Explore
                </NavLink>
                <NavLink to="/mutualfunds/dashboard">
                    Dashboard
                </NavLink>
            </div>
            <Outlet />

        </div>
        </>
     );
}

export default MutualFunds;