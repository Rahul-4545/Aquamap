import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LoginForm.css';
import { FaRegUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add your login logic here, e.g., validating credentials
    // For demonstration purposes, we'll assume the login is always successful
    
    // If login is successful:
    setIsLoggedIn(true);
    setMessage('Login Successful!');
    // Navigate to the profile page after a delay to show the message
    setTimeout(() => navigate('/profile'), 2000);
  };

  return (
    <div className='form-box login'>
      <form onSubmit={handleSubmit}>
        <h1>LoginForm</h1>
        <div className="input-box">
          <input type="text" placeholder='Username' required />
          <FaRegUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' required />
          <FaLock className='icon' />
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href='signup'>Register</a></p>
        </div>
      </form>
      {isLoggedIn && <div className="success-message">{message}</div>}
    </div>
  )
}

export default LoginForm;
