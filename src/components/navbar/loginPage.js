import React, { useState, useRef, useEffect, useContext} from "react"
import "./loginPage.scss"

import axios from '../../api';

import { OutlinedInput } from '@mui/material';
import {
    Link
} from "react-router-dom";

const LOGIN_URL = "/auth"

export default function LoginPage(){

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
    const [match, setMatch] = useState(false);

    const userRef = useRef();
    const errRef = useRef();

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, password])


    const handleClick = async (e) => {
        e.preventDefault()
        
        try{
            fetch("http://localhost:3001/users")
            .then(response => response.json())
            .then(response => {
                response.map(item => {
                    if(user === item.email && password === item.password){
                        setSuccess(true)
                        setMatch(true)
                    }else if((user === item.email && user !== item.email) ||  (user === item.email && password !== item.password)){
                        setMatch(false)
                        setErrMsg("Wrong email or password")
                    }else if(user !== item.email){
                        setMatch(false)
                        setPassword("")
                        setErrMsg("There isn't a user with this email")
                    }
                })
            })
        }catch (err){
            errRef.current.focus();
        }
    }


    return(
        <div className="loginPageContainer">
            {
                match ? (
                    <div>
                        <h3> You are successfully logged in </h3>
                    </div>
                ) : (
                    <>
                        <header>
                            <h3>Login Page</h3>
                        </header>
                        <div className="inputsContainer">
                            <p ref={errRef}>{errMsg}</p>
                            <OutlinedInput 
                            className="inputItem" 
                            placeholder="...email"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            ref={userRef}
                            />
                            <OutlinedInput 
                            className="inputItem" 
                            placeholder="...password" 
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            />
                            <button onClick={handleClick}>Log In</button>
                            <span><Link to="/registerpage">Haven't you an account yet?</Link></span>
                        </div>
                    </>
                )
            }
        </div>
    )
}