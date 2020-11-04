import React, { useState } from 'react';
import EditPost from '../EditPost';
import { Modal, Container, Col, Row, Image } from 'react-bootstrap';
import { faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './PostContainer.css';
import Default from './images/default.jpg';

const PostContainer = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const PostList = props.post.map(post => {
        return (
            <Container key={post._id}>
                <Row className='post-card'>
                    <Col fluid xs="2">
                        <Row>
                            <Image id="post-img" src={Default} roundedCircle />
                        </Row>
                        <Row fluid className="icons">
                            <FontAwesomeIcon fluid
                                className="faEdit" 
                                icon={faEdit} 
                                size="lg" 
                                onClick={handleShow}></FontAwesomeIcon>
                            <Modal 
                                show={show} 
                                onHide={handleClose}>
                                <EditPost />
                            </Modal>
                            <FontAwesomeIcon fluid
                                className="faHeart" 
                                icon={faHeart} 
                                size="lg"  
                                onClick={handleShow}></FontAwesomeIcon>
                        </Row>
                    </Col>
                    <Col lg="10">
                        <h5>{post.city}</h5>
                        <h5>{post.title}</h5>
                        <p>{post.user}</p>
                        <p>{post.message}</p>
                    </Col>
                    
                </Row>
                
                <hr/>
            </Container>
        )
    })

    return PostList
}

export default PostContainer;

<FontAwesomeIcon variant="outline-primary" icon={faEdit} size="md"/>