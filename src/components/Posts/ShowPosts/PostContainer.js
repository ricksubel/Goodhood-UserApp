import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditPost from '../EditPost';

import { Modal, Container, Col, Row, Image } from 'react-bootstrap';
import { faEdit, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import './PostContainer.css';
import Default from './images/default.jpg';

const PostContainer = (props) => {
    const { category, tags, city, title, message, user, _id } = props.post;

    return (
        <Container>
            <Link to={`/games/${_id}`}>
                <div className='game-card'>
                    <div className='image-wrapper'>
                        <img src={Default} alt={title} />
                    </div>
                    <h3>{city}</h3>
                    <p>{category}</p>
                    <p>{title}</p>
                    <p>By: {user}</p>
                    <p>{message}</p>
                    <p>{tags}</p>
                    
                </div>
            </Link>
            <Link to={`/games/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
        </Container>
    )
}


//     return (
//         <Container as={Link} to={`/posts/${_id}`}>
//             <Row className='post-card'>
//                 <Col xs="2">
//                     <Row>
//                         <Image id="post-img" src={Default} roundedCircle />
//                     </Row>
//                     {/* <Row className="icons">
//                         <FontAwesomeIcon
//                             className="faEdit" 
//                             icon={faEdit} 
//                             size="lg" 
//                             onClick={handleShow}
//                             ></FontAwesomeIcon>
//                         <Modal 
//                             show={show} 
//                             onHide={handleClose}>
//                             <EditPost />
//                         </Modal>
//                         <FontAwesomeIcon
//                             className="faHeart" 
//                             icon={faHeart} 
//                             size="lg"  
//                             onClick={handleShow}></FontAwesomeIcon>
//                     </Row> */}
//                 </Col>
//                 <Col lg="10">
//                     <h5>{city}</h5>
//                     <h5>{title}</h5>
//                     <p>{user}</p>
//                     <p>{category}</p>
//                     <p>{tags}</p>
//                 </Col>
//             </Row>
//             <hr/>
//         </Container>
//     )
// }

export default PostContainer;
