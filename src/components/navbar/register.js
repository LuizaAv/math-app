import React, {useState, useEffect, useRef, } from "react"
import axios from '../../api';

import "./register.scss"
import { OutlinedInput } from '@mui/material';
import {
    Link
} from "react-router-dom";

const NAME_SURENAME = /^[A-Za-z]*$/
const EMAIL_REGEXP = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,32}$/
const REGISTER_URL = '/users';

export default function Register(){
    const [name, setName] = useState("")
    const [validName, setValidName] = useState(false)
    const [nameFocus, setNameFocus] = useState(false)

    const [surename, setSurename] = useState("")
    const [validSurename, setValidSurename] = useState(false)
    const [surenameFocus, setSurenameFocus] = useState(false)

    const [email, setEmail] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [password, setPassword] = useState("")
    const [validPassword, setValidPassword] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [confirmPass, setConfirmPass] = useState("")
    const [validConfirmPass, setValidConfirmPass] = useState(false)
    const [confirmPassFocus, setConfirmPassFocus] = useState(false)

    const userRef = useRef();
    const errRef = useRef();

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidEmail(EMAIL_REGEXP.test(email));
    }, [email])

    useEffect(() => {
        setValidPassword(PASSWORD_REGEXP.test(password))
        setValidConfirmPass(password === confirmPass)
    }, [password, confirmPass])

    useEffect(() => {
        setErrMsg('');
    }, [name, surename, email, password, confirmPass])


    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailCheck = EMAIL_REGEXP.test(email)
        const passwordCheck = PASSWORD_REGEXP.test(password)
        const nameCheck = NAME_SURENAME.test(name)
        const surenameCheck = NAME_SURENAME.test(surename)

        if(emailCheck){
            setValidEmail(true)
        }
        if(passwordCheck){
            setValidPassword(true)
        }
        if(confirmPass === password){
            setValidConfirmPass(true)
        }

        if(!validEmail || !validPassword || !validConfirmPass){
            setErrMsg("Invalid Entry")
            alert("Entry invalid")
            return
        }

        axios.post(REGISTER_URL, {name, surename, email, password, confirmPass})
         
            setSuccess(true);
            setName("");
            setSurename("");
            setEmail("");
            setPassword("");
            setConfirmPass("");
        }

    return(
        <div>
        {success ? (
            <section>
                <h1>Success!</h1>
                <p>
                    <Link to="/login">Sign In</Link>
                </p>
            </section>
        ) : (
        <div className="registrationPageContainer">
            <header>
                <h3>Registration</h3>
            </header>
            <form className="inputsContainer" onSubmit={handleSubmit}>
                <OutlinedInput 
                className="inputItem" 
                placeholder="...name"
                id="name"
                required
                ref={userRef}
                autoComplete = "off"
                onChange={(e) => setName(e.target.value)}
                value = {name}
                onFocus={() => setNameFocus(true)}
                onBlur={() => setNameFocus(false)}
                />
                <OutlinedInput 
                className="inputItem" 
                placeholder="...surename"
                id = "surename"
                onChange={(e) => setSurename(e.target.value)}
                value = {surename}
                onFocus={() => setSurenameFocus(true)}
                onBlur={() => setSurenameFocus(false)}
                />
                <OutlinedInput 
                className="inputItem" 
                placeholder="...email" 
                type="email"
                id = "email"
                required
                onChange={(e) => setEmail(e.target.value)}
                value = {email}
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                />
                <OutlinedInput 
                className="inputItem" 
                placeholder="...password" 
                type="password"
                id = "password"
                required
                onChange={(e) => setPassword(e.target.value)}
                value = {password}
                onFocus={() => setPasswordFocus(true)}
                onBlur={() => setPasswordFocus(false)}
                />
                <OutlinedInput 
                className="inputItem" 
                placeholder="...confirm password" 
                type="password"
                id = "confirmpass"
                required
                autoComplete="off"
                onChange={(e) => setConfirmPass(e.target.value)}
                value = {confirmPass}
                onFocus={() => setConfirmPassFocus(true)}
                onBlur={() => setConfirmPassFocus(false)}
                />
                <button>Sign up</button>
            </form>
        </div>
        )}
        </div>
    )
}