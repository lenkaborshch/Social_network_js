import React from "react";
import s from "./ProfileInfo.module.css";
import me from "./../../../img/ava.jpg";
import sea from "./../../../img/sea.jpg"

const ProfileInfo = () => {
    return (
        <div>
            <div className={s.cover}>
                <img src={sea} />
            </div>
            <div className={s.descriptionBlock}>
                <img src={me} />
                + description
            </div>
        </div>
    );
}

export default ProfileInfo;