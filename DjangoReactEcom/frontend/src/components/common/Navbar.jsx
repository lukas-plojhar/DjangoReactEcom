import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                <Link to='/' className='nav-item nav-link'>
                    <img src="http://ident-system.cz//logo.png" className="logo" alt="iDent logo"/>
                </Link>
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/product/1" className="nav-link">
                            <button className="btn btn-navbar">Chci bílé zuby</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
