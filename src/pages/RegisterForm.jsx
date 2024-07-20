import React from 'react'
import '../style/RegisterForm.css'
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const RegisterForm = () => {
  return (
    <div className='form-box Register'>
            <form action="">
                <h1>RegisterForm</h1>
                <div className="input-box">
                    <input type ="text" placeholder='Username' required />
                    <FaRegUser className='icon' />
                    </div>
                    <div className="input-box">
                    <input type ="email" placeholder='Email' required />
                    <FaLock  className='icon'/>
                     </div>
                <div className="remember-forgot">
                  <label><input type="checkbox"/>I agree to the terms and conditions</label>  
    
                </div>
                <button type='submit'>Register</button>
                <div className="register-link">
                    <p>Already have an account?<a href='/'>Login</a></p>
                </div>
            </form>
    </div>
  )
}

export default RegisterForm
