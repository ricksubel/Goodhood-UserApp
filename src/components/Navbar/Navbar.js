import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

import UserModel from "../../models/UserModel";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

import Logo from './images/hand-logo.png';
import './Navbar.css';

const Navbar = (props) => {
    const [user, setUser] = useRecoilState(userState);
    console.log(user);

    useEffect(function () {
        if (localStorage.uid)
        UserModel.show().then((response) => {
            setUser(response.data);
        });
    }, [setUser]);

    function logout() {
        setUser(null);
        localStorage.clear();
    }



        return (
            // TODO add hamburger response to navbar
            <div className="navbar">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    {/* TODO fix this on collapse */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <a className="navbar-brand" href="/">
                            <img src={Logo} width="30" height="30" alt="hands connecting" />
                        </a>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/about" className="nav-link">About</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/for-help" className="nav-link">Here for Help</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/to-help" className="nav-link">Here to Help</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav float-right">
                        {user ? (
                            <>
                            <li className="navbar-item">
                                <Link to={"/profile:id"} className="nav-link">My Profile</Link>
                            </li>
                            <li className='btn' onClick={logout}>
                                Log Out
                            </li>
                            </>
                        ) : (
                            <>
                            <li className="navbar-item">
                                <Link to={"/login"} className="nav-link">Login</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to={"/register"} className="nav-link">Register</Link>
                            </li>
                            </>
                        )}                    
                        </ul>
                    </div>
                </nav>
            </div>
        )

}

export default Navbar;
