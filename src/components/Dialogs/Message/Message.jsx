import React from "react";

const Message = (props) => {
    return (
        <div className={props.className}>
            <img src={props.src} alt="avaFriend" />
            <span>{props.message}</span>
        </div>
    )
}

export default Message;