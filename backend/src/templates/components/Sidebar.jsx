import {Link} from "react-router-dom";

const Navbar = () => {
    return <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
            <ul className="nav flex-column">
                <li className="nav-item"><Link to='/' className="nav-link">Dashboard</Link></li>
                <li className="nav-item"><Link to='/orders' className="nav-link">Orders</Link></li>
            </ul>
        </div>
    </nav>
}

export default Navbar;