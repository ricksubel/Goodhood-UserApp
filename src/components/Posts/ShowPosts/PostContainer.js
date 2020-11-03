import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                <Link to={`/posts/${post._id}/edit`} style={{color: 'black'}}>Edit</Link>
                <hr/>
            </Container>
        )
    })

    console.log(props);

    return PostList
}

export default PostContainer;