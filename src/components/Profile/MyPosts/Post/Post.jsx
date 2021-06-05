import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amateur-made_Na%27vi.jpg/1200px-Amateur-made_Na%27vi.jpg" />
            {props.message}
            <div>
                <span>like</span> {props.like}
            </div>

        </div>
    );
}

export default Post;