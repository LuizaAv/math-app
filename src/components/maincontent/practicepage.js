import React from "react"
import "./practicepage.scss"


import {
    Link
} from "react-router-dom";

import Card from '@mui/material/Card';


let sections = [
    {
        section: "Mental math",
        link: "/mentalmathpractice",
        number:1
    },
    {
        section: "Addition",
        link: "/addition",
        number:2
    },
    {
        section: "Subtruction",
        link: "/subtruction",
        number:3
    },
    {
        section: "Algebra",
        link: "/algebra",
        number:4
    },
    {
        section: "Geometric",
        link: "/geometric",
        number:5
    }
]

export default function Practicepage(){

    return(
        <div className="mathItemsContainer">
            {
                sections.map(item => {
                    return(
                        <Link to={item.link} key={item.link}>
                            <Card className="sectionCard" key={item.number}>
                                <div className="mathItem" key={item.section}>{item.section}</div>
                            </Card>
                        </Link>
                    )
                })
            } 
        </div>
    )
}