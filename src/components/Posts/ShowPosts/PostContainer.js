import React from 'react';
import { Link } from 'react-router-dom';

const PostContainer = (props) => {
    const { city, title, message, _id } = props.post;
    return (
        <>
            <Link to={`/posts/${_id}`}>
                <div className='post-card'>
                    {/* <div className='image-wrapper'>
                        <img src={TODO for userprofile img} alt={title} />
                    </div> */}
                    <h3>{city}</h3>
                    <h3>{title}</h3>
                    <h3>{message}</h3>
                    {/* TODO for user who authored <p>By: {author}</p> */}
                </div>
            </Link>
            <Link to={`/posts/${_id}/edit`} style={{color: 'black'}}>Edit</Link>
        </>
    )
}

export default PostContainer;