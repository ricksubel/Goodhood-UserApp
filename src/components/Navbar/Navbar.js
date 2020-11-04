import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

import UserModel from "../../models/UserModel";

import { useRecoilState } from "recoil";
import { userState } from "../../recoil/atoms";

import Logo from './images/HandsUpLogo.png';
import './Navbar.css';


const NavMain = (props) => {
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
        <Navbar collapseOnSelect className="color-nav" expand="lg" variant="light">
            <Navbar.Brand href="/"><img src={Logo} width="30" height="30" className="d-inline-block align-top mr-2" />GoodHood!
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/neighborhood">Neighborhood Details</Nav.Link>
                </Nav>
                <Nav>
                    {user ? (
                    <>
                        <Nav.Link as={Link} to={"/profile:id"}>My Profile</Nav.Link>
                        <Button variant="outline-secondary" size="xs" onClick={logout} as={Link} to={"/"} value="Log Out">Log Out</Button>
                    </>
                    ) : (
                    <>
                        <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                        <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                    </>
                    )}                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMain;
