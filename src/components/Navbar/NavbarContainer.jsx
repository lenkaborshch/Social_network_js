import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar";
import StoreContext from "../../StoreContext";

const NavbarContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => <Navbar state={store.getState().sidebar} /> }
        </StoreContext.Consumer>
    );
}

export default NavbarContainer;