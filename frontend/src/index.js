import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './landing_page/home/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import InvestmentCalculator from './landing_page/investmentCalculator/InvestmentCalculator';
import Signup from './landing_page/signup/Signup.js';
import MutualFunds from './landing_page/mutualfunds/MutualFunds.js';
import Stocks from './landing_page/stocks/Stocks.js';
import Navbar from './landing_page/Navbar.js';
import Footer from './landing_page/Footer.js';
import Explore from './landing_page/stocks/Explore/Explore.js';
import Holdings from './landing_page/stocks/Holdings/Holdings.js';
import Orders from './landing_page/stocks/Orders/Orders.js';
import Position from './landing_page/stocks/Position/Position.js';
import ExploreMF from './landing_page/mutualfunds/ExploreMF/ExploreMF.js';
import Dashboard from './landing_page/mutualfunds/Dashboard/Dashboard.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    
    <Route path='/stocks' element={<Stocks/>}>
          <Route index element={<Explore />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="orders" element={<Orders />} />
          <Route path="positions" element={<Position />} />
    </Route>

    <Route path='/mutualfunds' element={<MutualFunds/>}>
            <Route index element={<ExploreMF/>} />
            <Route path='dashboard' element={<Dashboard />} />
    </Route>

    <Route path='/calculator' element={<InvestmentCalculator/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
