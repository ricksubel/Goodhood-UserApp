import React, { useState } from 'react';
import PostContainer from './PostContainer';
import usePosts from '../../../hooks/usePosts';

import InfiniteScroll from "react-infinite-scroll-component";


const PostScroll = (props) => {
    const [post] = usePosts(props.match.params.id);
    const fetchPosts = setTimeout(post.length, 1500);


    return (
        <InfiniteScroll
        dataLength={post.length}
        next={fetchPosts}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        >
        { post ? (
            <>
            <PostContainer post={post} /> 
            </>
            ) : ( 
            <>
            <h3>Loading...</h3>
            </>
            )}
            <hr/>
        </InfiniteScroll>
    );
}


export default PostScroll;
