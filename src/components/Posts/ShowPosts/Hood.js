import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { userState } from '../../../recoil/atoms';
import UserModel from '../../../models/UserModel';
import PostShow from '../PostShow';
import CreatePost from '../CreatePost';
import Footer from '../../Landing/Footer/Footer';
import { Modal, Container, Col, Row, Card, Button, Jumbotron, Image } from 'react-bootstrap';

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Love from './images/loveYN.jpg';
import './Hood.css';


const ShowPosts = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const [user, setUser] = useRecoilState(userState);

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
        <Container fluid>
            <Row>
                <Col md={3} className="side-info">
                    <Container className="left-side">
                        <Card>
                            <Card.Img variant="top" src={Love} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text>
                                <Button variant="outline-secondary" size="sm">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                        <hr></hr>
                        <Card>
                            <Card.Body>
                                Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                            </Card.Body>
                        </Card>
                    </Container>
                </Col>
                
                <Col md={6}>
                    <Container className="posts-header">
                        { user ? (
                        <>
                        <Button 
                            className="btn-circle" 
                            size="sm" 
                            variant="outline-info float-right" 
                            onClick={handleShow}><FontAwesomeIcon 
                                icon={faPlus} 
                                size="lg"/></Button> 
                        <Modal 
                            show={show} 
                            onHide={handleClose}>
                            <CreatePost />
                        </Modal>
                        <h3>Neighborhood Posts </h3>
                        </>
                        ) : (  
                        <>
                        <Jumbotron className="jumbo" variant="danger">
                            <h1>Welcome to the Neighborhood!</h1>
                            <p>
                                In order to access posts and information in your area, you must register a new account, or sign in if you are a returning neighbor!
                            </p>
                            <p>
                                <Button 
                                    size="sm"
                                    variant="info"
                                    as={Link} 
                                    to={"/register"}>Register Account
                                </Button>
                            </p>
                            <p>
                                <Button 
                                    size="sm" 
                                    variant="outline-info"
                                    as={Link} 
                                    to={"/login"}>Sign in
                                </Button>
                            </p>
                        </Jumbotron>
                        </>
                        )}
                    </Container>
                    
                    <Container>
                    { user ? (
                        <>
                        <PostShow />
                        </>
                        ) : (  
                        <>
                        <Container className="blurred">
                            <span className="blur">
                                <h1 className="message">Making the world better one neighborhood at a time!</h1>
                            </span>
                        </Container>   
                        </>
                        )}
                    </Container>
                    
                </Col>

                <Col md={3} className="side-info">
                    <Container fluid className="right-side">
                        Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                    </Container>
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}

export default ShowPosts;