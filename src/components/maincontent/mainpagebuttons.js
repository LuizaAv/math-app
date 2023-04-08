import React, {useState, useEffect} from "react";
import "./mainpagebuttons.scss"

import {
    Link
} from "react-router-dom";

export default function MainpageButton(){
    const [theoryIsClicked, setTheoryIsClicked] = useState(true)
    const [practiceIsClicked, setPracticeIsClicked] = useState(false)

    useEffect(() => {
        theoryBtnCreatorFunction()
    }, [])

    const theoryBtnCreatorFunction = () => {
        let theoryBtn = document.getElementById("theoryBtn")
        theoryBtn.style.backgroundColor = "#4d046b"
        theoryBtn.style.color = "#FFFFFF"
        theoryBtn.style.fontWeight = 1000
        let practiceBtn = document.getElementById("practiceBtn")
        practiceBtn.style.backgroundColor = "#c872ed"
        practiceBtn.style.color = "#000000"
    }

    const practiceBtnCreatorFunction = () => {
        let practiceBtn = document.getElementById("practiceBtn")
        practiceBtn.style.backgroundColor = "#4d046b"
        practiceBtn.style.color = "#FFFFFF"
        practiceBtn.style.fontWeight = 1000
        let theoryBtn = document.getElementById("theoryBtn")
        theoryBtn.style.backgroundColor = "#c872ed"
        theoryBtn.style.color = "#000000"
    }

    const handleTheoryBtn = () => {
        if(practiceIsClicked){
            setTheoryIsClicked(true)
            setPracticeIsClicked(false)
            theoryBtnCreatorFunction()
        }
    }

    const handlePracticeBtn = () => {
        if(theoryIsClicked){
            setPracticeIsClicked(true)
            setTheoryIsClicked(false)
            practiceBtnCreatorFunction()
        }
    }

    return(
        <div className="changeBtnContainer">
            <Link to="/">
                <button id="theoryBtn" onClick={() => handleTheoryBtn()}>Learning</button>
            </Link>
            <Link to="/practicePage">
                <button id="practiceBtn" onClick={() => handlePracticeBtn()}>Practice</button>
            </Link>
        </div>
    )
}