import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Home.css';
import Home1 from '../img/Home.png'

const Home = () => {
  const navigate = useNavigate();

  const handleUserLoginClick = () => {
    navigate('/loginform'); 
  };

  const handleOrgLoginClick = () => {
    navigate('/dp'); 
  };

  return (
    <div className="home-container">
      <img src={Home1}></img>
      <h1>Welcome to AQUAMAP</h1>
      <div className="home-buttons">
        <button onClick={handleUserLoginClick}>User Login</button>
        <button onClick={handleOrgLoginClick}>Organization Login</button>
      </div>
    </div>
  );
};

export default Home;
