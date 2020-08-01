import React from "react";
import s from "./ProfileInfo.module.css";
import me from "./../../../img/ava.jpg";
import sea from "./../../../img/sea.jpg"
import Preloader from "../../Preloader/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.cover}>
                <img src={sea} alt="wrapper"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="avatar" />
                + description
            </div>
        </div>
    );
}

export default ProfileInfo;