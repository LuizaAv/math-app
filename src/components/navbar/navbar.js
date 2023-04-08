
import React, {useState} from "react";
import "./navbar.scss";

import {
    Link
} from "react-router-dom";


import BurgerMenu from "./burgerMenu";
import Login from "./login";

export default function Navbar(){


    return(
        <div className="navbarContent">
            <BurgerMenu />
            <Link to="/login">
                <Login className="loginComponent"/>
            </Link>
        </div>
    )
}
