import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className='border-top bg-light'>
        <div className='container '>
            <div className='row mt-5'>
                <div className='col'>
                    <>
                        <a class="navbar-brand" href="#"><img src='images/logo1.png' alt='logo' style={{ width: "40px" }} /><b>Tradezy</b></a>
                        <p>&copy; 2026 Tradezy. All rights reserved.</p>
                    </>
                </div>
                <div className='col'>
                    <p>company</p>
                </div>
                <div className='col'>
                    <p>support</p>
                </div>
                <div className='col'>
                    <p>Account</p>
                    <br />
                    <Link to="/stocks">Stocks</Link>
                    <br />
                    <Link to="/mutualfunds">Mutual Funds</Link>
                    <br />
                    <Link to="/calculator">Investment Calculator</Link>
                </div>
            </div>
        <div className='mt-5 text-small text-muted'>
            <p>Tradezy is a learning project created for educational and demonstration purposes only. It is not a registered stock broker, investment adviser, research analyst, or financial institution.</p>

            <p>Important Disclaimer: The information, stock prices, charts, portfolios, transactions, and trading features displayed on Tradezy are provided for learning and demonstration purposes only. Some or all market data may be simulated or based on dummy data and should not be considered real-time or actual market information.</p>

            <p>Tradezy does not facilitate real stock trading, investments, deposits, withdrawals, or financial transactions.</p>

            <p>Nothing on this website constitutes financial, investment, legal, or tax advice. Please conduct your own research and consult a qualified financial professional before making any investment decisions.</p>

            <p>Risk Disclosure: Investments in securities are subject to market risks. The value of investments can go up or down, and past performance does not guarantee future results.</p>

            <p>Tradezy is an educational project and should not be used for making real-world investment decisions.</p>

            <p>&copy; 2026 Tradezy. All rights reserved. Built for learning purposes only.</p>

    </div>
        </div>
        </footer>
    );
}

export default Footer;