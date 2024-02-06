import React from 'react';
import './LoginForm.css'

export const LoginForm = () => {
    return (
        <div className='wrapper'>
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required />
            </div>
            <div className='input-box'>
                <input type="password" placeholder='password' required />
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox" />Remeber me</label>
                <a href="/">Forgot password?</a>
            </div>
            <button type='submit'>Login</button>
            <div className='register-link'>
                <p>Dont have an account? <a href="/">Register here</a> </p>
            </div>
        </div>
    )
}
