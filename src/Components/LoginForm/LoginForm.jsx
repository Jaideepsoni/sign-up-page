import React from 'react';
import './LoginForm.css';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";

export const LoginForm = () => {
    return (
        <div className='wrapper'>
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required />
                <FaUser className='icon'/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='password' required />
                <FaLock className='icon'/>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />Remeber me</label>
                <a href="/">Forgot password?</a>
            </div>
            <button className = 'btn' type='submit'>Login</button>
            <div className='register-link'>
                <p>Dont have an account? <a href="/">Register here</a> </p>
            </div>
        </div>
    )
}
