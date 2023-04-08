import React from "react";
import "./maincontent.scss";

import {
    Link
} from "react-router-dom";

import Card from '@mui/material/Card';


let sections = [
    {
        section: "Algebra basics",
        link: "/algebra",
        number:1
    },
    {
        section: "Arithmetic",
        link: "/arithmetic",
        number:2
    },
    {
        section: "Pre-algebra",
        link: "/prealgebra",
        number:3
    },
    {
        section: "Basic geometry and measurement",
        link: "/geometrybasics",
        number:4
    },
    {
        section: "High school geometry",
        link: "/geometry",
        number:5
    }
]

export default function Maincontent(){
    

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