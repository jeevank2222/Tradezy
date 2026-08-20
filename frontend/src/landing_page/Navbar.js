import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (

            <nav class="navbar navbar-expand-lg bg-body-white sticky-top ">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/"><img src='images/logo1.png' alt='logo' style={{width:"60px"}}/><b className='tradezy-logo'>Tradezy</b></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link"  to="/stocks">Stocks</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/mutualfunds">Mutual Funds</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/calculator">Investment Calculator</Link>
                            </li>
                        </ul>
                        <form class="d-flex ms-auto" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <form>
                            <button className='btn btn-primary ms-3'>Login/Sign up</button>
                        </form>
                    </div>
                </div>
            </nav>
        
    );
}

export default Navbar;