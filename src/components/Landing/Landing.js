import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Header from './Header/Header';
// import Footer from './Footer/Footer';

import HandsUp2 from '../../components/Landing/Footer/images/handsup2.png';
import './Landing.css';


function Landing() {

    return (
        <Container className="landing">
            <Row className="top-row text-center">
                <Header />
            </Row>
            <Row className="mt-5">
                <Col xs={6} md={4}>
                    <span className="dot1">
                        <h3 className="my-auto">Here for help?</h3>
                    </span>
                </Col>
                <Col xs={6} md={4}>
                    <span className="dot2">
                        <h3 className="my-auto">Here to help?</h3>
                    </span>
                </Col>
                <Col xs={6} md={4}>
                    <span className="dot3">
                        <h3 className="my-auto">Got a Good Idea?</h3>
                    </span>
                </Col>
            </Row>
            <Row className="landing-footer">
                <Image src={HandsUp2} responsive></Image>
            </Row>
            </Container>

    )
}

export default Landing;
