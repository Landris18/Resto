import React from "react";
import { Link } from "react-router-dom";
import '../css/navbar.css';


function Navbar() {

    return (
        <nav className="navbar">
            <div className="container">
                <h3 className="logo">Logo</h3>
                <ul className="nav-links">
                    <Link to="/"> <li>Home</li> </Link>
                    <Link to="/about"> <li>About</li> </Link>
                    <Link to="/contact"> <li>Contact</li> </Link>
                </ul>
            </div>
        </nav>
    );
}


export default Navbar;