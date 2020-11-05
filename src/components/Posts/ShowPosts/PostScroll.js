import React from 'react';
import Posts from "../ShowPosts/Posts";

import usePosts from '../../../hooks/usePosts';

import InfiniteScroll from "react-infinite-scroll-component";
import './PostScroll.css';


const PostScroll = (props) => {
    const [posts, fetchPosts] = usePosts();

    // TODO add function to fetch data from longer list of posts
    // fetchMorePosts (() => {
    //     setTimeout(() => {
    //     return usePosts()
    //         }, 1500);
    //     });

    return (
        <InfiniteScroll
            id="scroll"
            style={{
                height: 750,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
            }}
            // dataLength={10}
            // // next={fetchPosts}
            // hasMore={true}
            // loader={<h4>Loading...</h4>}
            // endMessage={
            //     <p>You've seen all posts!</p>
            // }
            >
        { posts.length ? <Posts data={posts} /> :  
            <h1>Loading...</h1>}
        </InfiniteScroll>
    );
}


export default PostScroll;
