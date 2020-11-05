import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Col, Row, Image, Button } from 'react-bootstrap';
import { faEdit, } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './PostContainer.css';
import Default from './images/default.jpg';

const PostContainer = (props) => {
    const { category, tags, city, title, message, user, _id } = props.post;
    console.log(_id);

    return (
        <Container className='p-4'>
            <Row className='post-card'>
                <Col xs="2">
                    <Row>
                        <Image id="post-img" src={Default} roundedCircle />
                    </Row>
                    <Row className="icons">
                        <Button
                            size="sm" 
                            as={Link}
                            to={`/posts/${_id}/edit`}
                            variant="outline-info"
                            >Edit</Button>
                    </Row>
                </Col>
                <Col lg="10">
                    <h5>{city}</h5>
                    <h5>Title: {title}</h5>
                    <p>{user}</p>
                    <p>{message}</p>
                    <p>Category: {category}</p>
                    <p>Tags: {tags}</p>
                </Col>
            </Row>
            <hr/>
        </Container>
    )
}

export default PostContainer;
