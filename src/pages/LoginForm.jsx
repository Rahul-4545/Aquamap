import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/LoginForm.css'; 


const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const apiUrl = 'http://localhost:3013/login';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message || 'Failed to login');
        return;
      }

      localStorage.setItem('user', JSON.stringify(result.user));

      // Redirect to report problems page
      navigate('/dummy');
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while logging in');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="login-container">
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
      {message && <div className="error-message">{message}</div>}
      <div>
        <p>Don't have an account?</p>
        <button onClick={handleRegisterRedirect}>Register Here</button>
      </div>
    </div>
  );
};

export default Login;
