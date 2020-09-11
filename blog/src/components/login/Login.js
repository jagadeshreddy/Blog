import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className="login">
            <div className="login_app">
            <form onSubmit="">
                <input className="login_input" type="text" placeholder="User Name" value=""></input><br></br>
                <input className="login_input"  type="password" placeholder="Password" value=""></input>
                <br/><button className="login_button" type="submit">Login</button>
            </form>
            </div>
        </div>
    )
}
export default Login
