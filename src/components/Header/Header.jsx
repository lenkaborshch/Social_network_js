import React from "react";
import s from "./Header.module.css";
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://cdn170.picsart.com/upscale-230131032035212.png?type=webp&to=min&r=640"/>
            <div className={s.loginBlock}>
                {props.isFetching ? <Preloader /> : null}
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;