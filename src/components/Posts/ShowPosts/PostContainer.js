import React, { useState } from 'react';
import EditPost from '../EditPost';
import { Modal, Container, Col, Row, Card, Button } from 'react-bootstrap';
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostContainer = (props) => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const PostList = props.post.map(post => {
        return (
            <Container className="p-4" key={post._id}>
                <div className='post-card'>
                    {/* <div className='image-wrapper'>
                        <img src={TODO for userprofile img} alt={title} />
                    </div> */}
                    <p>{post.user}</p>
                    <h5>{post.city}</h5>
                    <h5>{post.title}</h5>
                    <p>{post.message}</p>
                </div>
                <FontAwesomeIcon icon={faEdit} size="md" variant="float-right" onClick={handleShow}/>
                    <Modal show={show} onHide={handleClose}>
                        <EditPost />
                    </Modal>
                <hr/>
            </Container>
        )
    })

    console.log(props);

    return PostList
}

export default PostContainer;

<FontAwesomeIcon variant="outline-primary" icon={faEdit} size="md"/>