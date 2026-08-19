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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Navbar/>
  <Routes>
    <Route path='/' element={<HomePage/>}></Route>
    <Route path='/mutualfunds' element={<MutualFunds/>}></Route>
    <Route path='/stocks' element={<Stocks/>}></Route>
    <Route path='/calculator' element={<InvestmentCalculator/>}></Route>
    <Route path='/signup' element={<Signup/>}></Route>
  </Routes>
  <Footer/>
  </BrowserRouter>
);
