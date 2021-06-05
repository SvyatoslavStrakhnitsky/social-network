import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                My posts
            </div>
            <Post message='Hi, how are you?' like='15' />
            <Post message='It is my first message' like='89' />
        </div>
    );
}

export default MyPosts;