import React from 'react'
import '../style/LoginForm.css'
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className='form-box login'>
            <form action="">
                <h1>LoginForm</h1>
                <div className="input-box">
                    <input type ="text" placeholder='Username' required />
                    <FaRegUser className='icon' />
                    </div>
                    <div className="input-box">
                    <input type ="password" placeholder='Password' required />
                    <FaLock  className='icon'/>
                     </div>
                <div className="remember-forgot">
                  <label><input type="checkbox"/>Remember me</label>  
                  <a href="#">Forgot password?</a>
                </div>
                <button type='submit'>Login</button>
                <div className="register-link">
                    <p>Dont have an account?<a href='signup'>Register</a></p>
                </div>
            </form>
    </div>
  )
}

export default LoginForm