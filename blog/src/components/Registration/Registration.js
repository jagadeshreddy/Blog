import React,{useState} from 'react'
import './Registration.css';
function Registration() {
    const {user, setUser}=[
        {
            username:"",
            password:"",
            email:""
        }
    ];
    const {password, passwordSet}=[false];
  
    return (
        <div>
             <div className="login">
            <div className="login_app">
            <form onSubmit="">
                <input className="login_input" type="text" placeholder="User Name" value=""></input><br></br>
                <input className="login_input"  type="password" placeholder="Password" value=""></input><br/>
                <input className="login_input"  type="password" placeholder="Confirm Password" value=""></input>
                <br/><input className="login_input"  type="text" placeholder="Email@.com" value=""></input>
                <input type="file" className="login_input"></input>
                <br/><button className="login_button" type="submit">Login</button>
            </form>
            </div>
        </div>
        </div>
    )
}

export default Registration
