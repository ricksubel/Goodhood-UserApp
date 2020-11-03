import React, { useState, useEffect } from 'react';
import PostContainer from './PostContainer';
import usePosts from '../../../hooks/usePosts';

import InfiniteScroll from "react-infinite-scroll-component";
import './PostScroll.css';


const PostScroll = (props) => {
    const [post] = usePosts();

    // fetchPosts (() => {
    //     setTimeout(() => {
    //     function to get array of posts;
    //         }, 1500);
    //     });

    return (
        <InfiniteScroll
        id="scroll"
        style={{
            height: 650,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
        }}
        dataLength={10}
        // next={fetchPosts}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        endMessage={
            <p>You've seen all posts!</p>
        }
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
        </InfiniteScroll>
    );
}


export default PostScroll;
