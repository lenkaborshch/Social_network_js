import React from "react";
import s from "./ProfileInfo.module.css";
import me from "./../../../img/ava.jpg";
import sea from "./../../../img/sea.jpg"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.cover}>
                <img src={sea} alt="wrapper"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={me} alt="avatar" />
                + description
            </div>
        </div>
    );
}

export default ProfileInfo;