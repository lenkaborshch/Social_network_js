import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = (props) => {
    return (
        <div className={s.friends}>
            <div className={s.avaFriends}>
                <img src={props.src} />
            </div>
            <div>
                { props.name }
            </div>
        </div>
    );
};

export default Sidebar;