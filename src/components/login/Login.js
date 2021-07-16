import axios from 'axios';
import React , {useState , useEffect}from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <form name="login">
                <label htmlFor="username">Username : </label>
                <br/>
                <input type="text" onChange={(e) => {
                    setUsername(e.target.value)
                }} placeholder = "usrename"/>
                <br/><br/>
                 <label htmlFor="username">Password : </label>
                <br/>
                <input type="text" onChange={(e) => {
                    setPassword(e.target.value)
                }} placeholder = "Password"/>
            </form>
        </div>
    )
}

export default Login
