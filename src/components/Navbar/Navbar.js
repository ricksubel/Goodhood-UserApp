import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {

    return (
        <div className="navbar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              {/* <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" /> */}
            </a>
            <Link to="/" className="navbar-brand">Goodhood!</Link>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                    <Link to="/Posts" className="nav-link">Posts</Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/Posts/Create-Posts" className="nav-link">Create Post</Link>
                    </li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
