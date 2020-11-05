import React from 'react';
import PostContainer from '../Posts/ShowPosts/PostContainer';

import usePosts from '../../hooks/usePosts';

function PostShow(props) {
    const [post] = usePosts(props.match.params.id);
    return post ? <PostContainer post={post} /> : <h3>Loading...</h3>;
}

export default PostShow;
