import React, { useState } from "react"
import "./burgerMenu.scss"
import {FiMenu} from "react-icons/fi";
import {CgClose} from "react-icons/cg";

import Menuitems from "./menuitems";

export default function Burgermenu() {
    const [menu, setMenu] = useState(true)

    const handleClick = () => {
        if(menu){
            setMenu(false)
        }else{
            setMenu(true)
        }
    }

    const menuStatus = (arg) => {
        setMenu(arg)
    }

    return(
        <div className="menuMainContainer">
            <div className="burgermenuContainer">
                {
                    menu ?
                    <FiMenu className="menu" onClick={handleClick}/>
                        :
                    <CgClose className="menu" onClick={handleClick} />
                }
            </div>
            <div>
                {
                    !menu ?
                    <Menuitems className="menuItem" menu={menu} menuStatus={menuStatus}/>
                        :
                    null
                }
            </div>
        </div>
    )
}