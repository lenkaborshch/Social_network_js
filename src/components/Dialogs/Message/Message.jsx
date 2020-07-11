import React from "react";
import s from "./../Dialogs.module.css";

const Message = (props) => {
    return (
        <div className={props.className}>
            <img src={props.src} />
            <span>{props.message}</span>
        </div>
    )
}

export default Message;