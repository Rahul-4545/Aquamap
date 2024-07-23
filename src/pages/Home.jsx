import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';

const Home = () => {
  const navigate = useNavigate();

  const handleUserLoginClick = () => {
    navigate('/loginform'); // Navigate to user login page
  };

  const handleOrgLoginClick = () => {
    navigate('/dummy'); // Navigate to organization login page
  };

  return (
    <div className="home-container">
      <h1>Welcome to AQUAMAP</h1>
      <div className="home-buttons">
        <button onClick={handleUserLoginClick}>User Login</button>
        <button onClick={handleOrgLoginClick}>Organization Login</button>
      </div>
    </div>
  );
};

export default Home;
