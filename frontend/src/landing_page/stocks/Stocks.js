import React from 'react';
import "./Stocks.css";
import Explore from './Explore/Explore';
import Holdings from './Holdings/Holdings';
import Orders from './Orders/Orders';
import Position from './Position/Position';
import { NavLink, Outlet } from "react-router-dom";


function Stocks() {
    return ( 
        <>
         <div className="stocks-page">
            <div className='stocks-nav'>
                <NavLink to="/stocks" end>
                    Explore
                </NavLink>

                <NavLink to="/stocks/holdings">
                    Holdings
                </NavLink>

                <NavLink to="/stocks/orders">
                    Orders
                </NavLink>

                <NavLink to="/stocks/positions">
                    Positions
                </NavLink>
            </div>
            <Outlet/>
        </div>
        </>
     );
}

export default Stocks;