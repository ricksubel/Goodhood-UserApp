import React from 'react';
import PostContainer from '../Posts/ShowPosts/PostContainer';

import usePosts from '../../hooks/usePosts';

const PostShow =(props) => {
    const [post] = usePosts(props.match.params.id);
    console.log(props.match.params.id, "WHERE ARE YOU");
    return post ? <PostContainer post={post} /> : <h3>Loading...</h3>;
}

export default PostShow;
