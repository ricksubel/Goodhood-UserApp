import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostContainer = (props) => {

    const PostList = props.post.map(post => {
        return (
            <Container className="p-4" key={post._id}>
                    <div className='post-card'>
                        {/* <div className='image-wrapper'>
                            <img src={TODO for userprofile img} alt={title} />
                        </div> */}
                        <h5>{post.city}</h5>
                        <h5>{post.title}</h5>
                        <p>{post.message}</p>
                        {/* TODO for user who authored <p>By: {author}</p> */}
                    </div>
                <Link to={`/posts/${post._id}/edit`}><FontAwesomeIcon variant="outline-primary" icon={faEdit} size="md"/></Link>
                <hr/>
            </Container>
        )
    })

    console.log(props);

    return PostList
}

export default PostContainer;