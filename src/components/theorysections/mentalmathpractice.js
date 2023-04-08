import React, { useState, useEffect } from "react"
import "./mentalmathpractice.scss"

import {
    Link
} from "react-router-dom";

import Card from '@mui/material/Card';

export default function Mentalmathpractice(){
    let [step, setStep] = useState(0)
    let [currentscore, setCurrentscore] = useState(0)
    let [activeOne, setActiveOne] = useState(false)
    let [activeTwo, setActiveTwo] = useState(false)
    let [activeThree, setActiveThree] = useState(false)
    let [activeFour, setActiveFour] = useState(false)

    let tasks = [
        {
            firstOperand: 1,
            secondOperand: 5,
            operator: " + ",
            result: 6, 
            answerOne: 6,
            answerTwo: 1,
            answerThree: 8,
            answerFour: 4
        },
        {
            firstOperand: 8,
            secondOperand: 2,
            operator: " + ",
            result: 10,
            answerOne: 10,
            answerTwo: 9,
            answerThree: 8,
            answerFour: 11
        },
        {
            firstOperand: 8,
            secondOperand: 2,
            operator: " : ",
            result: 4,
            answerOne: 1.5,
            answerTwo: 16,
            answerThree: 8,
            answerFour: 4
        },
        {
            firstOperand: 15,
            secondOperand: 5,
            operator: " * ",
            result: 75, 
            answerOne: 75,
            answerTwo: 70,
            answerThree: 85,
            answerFour: 80
        },
        {
            firstOperand: 36,
            secondOperand: 9,
            operator: " : ",
            result: 4, 
            answerOne: 6,
            answerTwo: 12,
            answerThree: 8,
            answerFour: 4
        },
        {
            firstOperand: 30,
            secondOperand: 20,
            operator: " * ",
            result: 600, 
            answerOne: 700,
            answerTwo: 620,
            answerThree: 600,
            answerFour: 720
        },
        {
            firstOperand: 121,
            secondOperand: 15,
            operator: " + ",
            result: 136, 
            answerOne: 166,
            answerTwo: 136,
            answerThree: 156,
            answerFour: 126
        },
        {
            firstOperand: 13,
            secondOperand: 5,
            operator: " + ",
            result: 6, 
            answerOne: 6,
            answerTwo: 1,
            answerThree: 8,
            answerFour: 4
        },
        {
            firstOperand: 3859,
            secondOperand: 2500,
            operator: " + ",
            result: 6359, 
            answerOne: 6239,
            answerTwo: 6359,
            answerThree: 6159,
            answerFour: 6203
        },
    ]

    let element1, element2, element3, element4 

    useEffect(() => {
        element1 = document.getElementById("answerOneContainer")
        element2 = document.getElementById("answerTwoContainer")
        element3 = document.getElementById("answerThreeContainer")
        element4 = document.getElementById("answerFourContainer")
    },[activeOne, activeTwo, activeThree, activeFour])

    useEffect(()=>{
        setActiveOne(false)
        setActiveTwo(false)
        setActiveThree(false)
        setActiveFour(false)
    }, [step])

    const handleClick = () => {
        setStep(step+1)
        element1.style.backgroundColor = "#FFFFFF"
        element2.style.backgroundColor = "#FFFFFF"
        element3.style.backgroundColor = "#FFFFFF"
        element4.style.backgroundColor = "#FFFFFF"
    }

    const oneClicked = (e) => {
        setActiveOne(true)
        
        if( !activeOne && !activeTwo && !activeThree && !activeFour && +element1.innerText === tasks[step].result){
            element1.style.backgroundColor = "green"
            setCurrentscore(currentscore + 1) 
        }else if(!activeOne && !activeTwo && !activeThree && !activeFour && +element1.innerText !== tasks[step].result){
            element1.style.backgroundColor = "red"
        }

    }

    const twoClicked = (e) => {
        setActiveTwo(true)
        
        if( !activeOne && !activeTwo && !activeThree && !activeFour && +element2.innerText === tasks[step].result){
            element2.style.backgroundColor = "green"
            setCurrentscore(currentscore + 1) 
        }else if(!activeOne && !activeTwo && !activeThree && !activeFour && +element2.innerText !== tasks[step].result){
            element2.style.backgroundColor = "red"
        }
    }

    const threeClicked = (e) => {
        setActiveThree(true)
        
        if( !activeOne && !activeTwo && !activeThree && !activeFour && +element3.innerText === tasks[step].result){
            element3.style.backgroundColor = "green"
            setCurrentscore(currentscore + 1) 
        }else if(!activeOne && !activeTwo && !activeThree && !activeFour && +element3.innerText!== tasks[step].result){
            element3.style.backgroundColor = "red"
        }
    }
    

    const fourClicked = (e) => {
        setActiveFour(true)

        if( !activeOne && !activeTwo && !activeThree && !activeFour && +element4.innerText === tasks[step].result){
            element4.style.backgroundColor = "green"
            setCurrentscore(currentscore + 1) 
        }else if(!activeOne && !activeTwo && !activeThree && !activeFour && +element4.innerText !== tasks[step].result){
            element4.style.backgroundColor = "red"
        }
    }

    return(
        <div className="mathItemsContainer">
            <span>Your score is {currentscore}</span>
            {
                <div className="taskContainer">
                    <div>
                        <Card>{tasks[step].firstOperand}</Card>
                    </div>
                    <div>
                        <Card>{tasks[step].operator}</Card>
                    </div>
                    <div>
                        <Card>{tasks[step].secondOperand}</Card>
                    </div>
                </div>
            }
            {
                <div className="resultContainer">
                    <div>
                        <label>1.</label>
                        <button id="answerOneContainer" onClick={(e) => oneClicked(e)} style={{disabled: {activeTwo} || {activeThree} || {activeFour} ? true : false}}>
                            {tasks[step].answerOne}
                        </button>
                        <label>2.</label>
                        <button id="answerTwoContainer" onClick={(e) => twoClicked(e)} style={{disabled: {activeOne} || {activeThree} || {activeFour} ? true : false}}>
                            {tasks[step].answerTwo}
                        </button>
                    </div>
                    <div>
                        <label>3.</label>
                        <button id="answerThreeContainer" onClick={(e) => threeClicked(e)} style={{disabled: {activeOne} || {activeTwo} || {activeFour} ? true : false}}>
                            {tasks[step].answerThree}
                        </button>
                        <label>4.</label>
                        <button id="answerFourContainer" onClick={(e) => fourClicked(e)} style={{disabled: {activeOne} || {activeTwo} || {activeThree} ? true : false}}>
                            {tasks[step].answerFour}
                        </button>
                    </div>
                </div>
            }
            <button onClick={() => handleClick()} className="nextQuestion">Next question</button>
        </div>
    )
}