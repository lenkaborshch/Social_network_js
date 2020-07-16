import {NavLink} from "react-router-dom";
import React from "react";
import s from "./DialogItem.module.css";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active}>
                <span className={s.avaFriend}>
                    <img src={props.src} alt={props.name}/>
                </span>
                {props.name}
            </NavLink>
        </div>
    )
}

export default DialogItem;
