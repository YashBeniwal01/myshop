import React from 'react';
import './Signin.css'

const Signin = ()=>{
    return (
        <div className='signin-container'>
        <div className='login-container'>
          <div className='login-box'>
            <h1>Login</h1>
            <form id="login-form">
              <input type='email' name='email' placeholder='email' />
              <input type='password' name='password' placeholder='password' />
              <button type='submit'>Login</button>
            </form>
          </div>
        </div>
        <div className='register-container'>
          <div className='register-box'>
            <h1>Register</h1>
            <form id="register-form">
              <input type='email' name='email' placeholder='email' />
              <input type='password' name='password' placeholder='password' />
              <button type='submit'>Register</button>
            </form>
          </div>
        </div>
      </div>

    );
}

export default Signin;