import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav className="navbar navbar-light bg-light">
            <Link to='/' className='nav-item nav-link'>Homepage</Link>
                    <ul className="nav">
                        <li className="nav-item">
                        <Link to="/checkout" className="nav-link">
                               Checkout
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/product/1" className="nav-link">
                                <button className="btn btn-primary">Chci bílé zuby</button>
                            </Link>
                        </li>
                    </ul>
        </nav>
    );
};

export default Navbar;
