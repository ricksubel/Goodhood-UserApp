import React from 'react'
import { Container, Row, Button, Form } from 'react-bootstrap';

import './Footer.css';

function Footer() {

    return (
        <Container fluid className="footer">
            <p className="copyright">&copy;2020 Goodhood</p>
        </Container>
    );
}

export default Footer;
