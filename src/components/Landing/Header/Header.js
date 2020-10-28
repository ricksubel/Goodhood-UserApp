import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './Header.css';



function Header() {
    return (
            <header className="container">
                <div>
                    <h1>Welcome to Goodhood!</h1>
                    <h6>Making a Difference Everyday Everywhere!</h6>
                </div>
            </header>
    );
}

export default Header;