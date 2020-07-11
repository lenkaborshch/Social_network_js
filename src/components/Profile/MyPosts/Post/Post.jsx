import React from "react";
import s from "./Post.module.css";
import enot from "./../../../../img/enot.jpg"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={enot} />
            { props.message }
            <div>
                <span> {props.likesCount} like</span>
            </div>
        </div>
    );
}

export default Post;