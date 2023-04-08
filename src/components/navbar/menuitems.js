import React, { useState } from "react";

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

import {
    Link
} from "react-router-dom";

import "./menuitems.scss"

export default function Menuitems(props){
    let menu = props.menu
    const menuStatus = props.menuStatus

    const handleClick = () => {
       menu = true
       menuStatus(menu)
    }

    return(
        <div className="menuItemsContainer">
            <Paper sx={{ width: 320, maxWidth: '100%' }}>
                <MenuList>
                <Link to="/aboutus">
                <MenuItem 
                onClick={handleClick} 
                className="eachItemMenu"
                id="first"
                >
                    <ListItemIcon>
                    </ListItemIcon>
                   <ListItemText>About Us</ListItemText>
                </MenuItem>
                </Link>
                <MenuItem 
                onClick={handleClick} 
                className="eachItemMenu"
                id="second"
                >
                    <ListItemIcon>
                    </ListItemIcon>
                    <Link to="/aboutapp">
                        <ListItemText>About App</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem 
                onClick={handleClick} 
                className="eachItemMenu"
                id="third"
                >
                    <ListItemIcon>
                    </ListItemIcon>
                    <Link to="/history">
                        <ListItemText>History</ListItemText>
                    </Link>
                </MenuItem>
                <MenuItem 
                onClick={handleClick} 
                className="eachItemMenu"
                id="forth"
                >
                    <ListItemIcon>
                    </ListItemIcon>
                    <Link to="/contactus">
                        <ListItemText>Contact with us</ListItemText>
                    </Link>
                </MenuItem>
                </MenuList>
            </Paper>
        </div>
    )
}