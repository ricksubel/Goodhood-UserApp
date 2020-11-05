import React from 'react'
import { Container } from 'react-bootstrap';

import './Header.css';

function Header() {
        return (
                <Container fluid className="header text-bold">
                        <h1 className="welcome">Welcome to Goodhood!</h1>
                        <h5 className="text-muted">Making a Difference Everyday Everywhere!</h5>
                </Container>
        );
}

export default Header;