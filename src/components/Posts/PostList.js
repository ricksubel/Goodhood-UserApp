import React from 'react';
import Posts from '../Posts/ShowPosts/Posts';
import usePosts from '../../hooks/usePosts';

function PostList(props) {
    const [posts, fetchPosts] = usePosts();

    return (
        <div>
            <h1>All Posts</h1>
            {posts.length ? <Posts data={posts} /> : <h1>Loading...</h1>}
        </div>
    );
}

export default PostList;
