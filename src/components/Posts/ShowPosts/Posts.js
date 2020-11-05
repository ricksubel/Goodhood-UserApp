import React from 'react';
import PostContainer from './PostContainer';

import './Posts.css';

const Posts = (props) => {
    function generatePostContainers(posts) {
        return posts.map(post => {
            return <PostContainer key={post._id} post={post} />
        })
    }

    return (
        <div className='post-containers'>
            {generatePostContainers(props.data)}
        </div>
    )
}

export default Posts;