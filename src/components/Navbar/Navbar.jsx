import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";

const Navbar = (props) => {
    let sidebarFriends = props.state.friends
        .map(f => <Sidebar name={f.name} src={f.src} key={f.id}/>);

    return (
        <nav className={s.nav}>
            <div className={s.navMenu}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.active}>
                        Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs" activeClassName={s.active}>
                        Messages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}>
                        News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>
                        Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}>
                        Settings
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/users" activeClassName={s.active}>
                        Users
                    </NavLink>
                </div>
            </div>


            <div className={s.sidebar}>
                    <p className={s.textSidebar}>Friends</p>
                    {sidebarFriends}
            </div>

        </nav>
    );
}

export default Navbar;