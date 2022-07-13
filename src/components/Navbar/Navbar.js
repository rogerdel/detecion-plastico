import React from "react";
import {Link} from 'react-router-dom';
import './Navbar.css';

export default function Navbar(){
    return(
        <nav className="navbar">
            {/* <h3 className="logo">Logo</h3> */}
            <ul className="nav-link">
                <Link to="/" className="compnav">
                    <li>Home</li>
                </Link>
                <Link to="/image" className="compnav">
                    <li>Imagen</li>
                </Link>
                <Link to="/video" className="compnav">
                    <li>Video</li>
                </Link>
                <Link to="/live" className="compnav">
                    <li>live</li>
                </Link>
            </ul>
        </nav>
    )
}