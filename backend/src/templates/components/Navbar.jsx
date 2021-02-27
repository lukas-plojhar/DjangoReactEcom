import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 navbar navbar-light bg-light">
            <div className="container">
                <ul className="nav">
                    <li className="nav-item"><Link to="/" className="nav-link">teethy.cz</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">teethy.sk</Link></li>
                    <li className="nav-item"><Link to="/" className="nav-link">mojefreya.cz</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
