import React, { useState } from 'react';
import PostContainer from './PostContainer';

import usePosts from '../../../hooks/usePosts';

import { Modal, Container, Col, Row, Card, Button } from 'react-bootstrap';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CreatePost from '../CreatePost';
import Love from './images/loveYN.jpg';
import './Posts.css';

const ShowPosts = (props) => {
    const [post] = usePosts(props.match.params.id);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <Container fluid>
                <Row>
                    <Col md={3} className="side-info">
                        <Container>
                            <Card>
                                <Card.Img variant="top" src={Love} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                    </Card.Text>
                                    <Button variant="primary" size="sm">Go somewhere</Button>
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
                        <Container className="posts">
                            <Button className="btn-circle" size="sm" variant="outline-primary float-right" onClick={handleShow}><FontAwesomeIcon icon={faPlus}/></Button> 
                            <Modal show={show} onHide={handleClose}>
                                <CreatePost />
                            </Modal>
                            <h3>Neighborhood Posts</h3>
                        </Container>
                        {/* TODO not rendering!!! */}
                        <Container>
                            { post ? (
                            <>
                            <PostContainer post={post} /> 
                            </>
                            ) : ( 
                            <>
                            <h3>Loading...</h3>
                            </>
                            )}
                            <hr></hr>
                        </Container>
                    </Col>

                    <Col md={3} className="side-info">
                        <Container>Ornare suspendisse sed nisi lacus sed viverra tellus. Egestas congue quisque egestas diam in arcu. Tincidunt augue interdum velit euismod in. Velit laoreet id donec ultrices tincidunt. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique. Imperdiet sed euismod nisi porta lorem mollis aliquam.
                        </Container>
                    </Col>
                    
                </Row>
        </Container>
    )
}


export default ShowPosts;