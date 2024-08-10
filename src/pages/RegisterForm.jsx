import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/RegisterForm.css';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const apiUrl = 'http://localhost:3013/register';
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email, mobileNumber, address }),
      });
  
      const result = await response.json();
  
      if (response.status === 201) {
        setMessage('Registration Successful!');
        
        // Debugging: Log the received user object from the backend
        console.log('Received user from backend:', result.user);
  
        // Store the user information in localStorage
        localStorage.setItem('user', JSON.stringify({
          id: result.user.id || '',  
          username: result.user.username || '',
          email: result.user.email || '',
          mobileNumber: result.user.mobile_number || '', // Ensure this is mapped correctly
          address: result.user.address || ''
        }));
        
        // Redirect to profile page after a short delay
        setTimeout(() => navigate('/profile'), 2000);
      } else {
        setMessage(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };
  
  return (
    <div className='form-box register'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input-box">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="input-box">
          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
            required
          />
        </div>
        <button type="submit">Register</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default RegisterForm;
