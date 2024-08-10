import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Profile.css'; 


const CreateProfile = () => {
  const [profileData, setProfileData] = useState({
    id: '',
    username: '',
    email: '',
    mobileNumber: '',
    address: '',
    place: '',
    pincode: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    console.log('User data from localStorage:', userData); // Add this line to debug
    setProfileData(prevData => ({
      ...prevData,
      id: userData.id || '',
      username: userData.username || '',
      email: userData.email || '',
      mobileNumber: userData.mobileNumber || '', // Ensure this line is working as expected
      address: userData.address || '',
    }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    const apiUrl = 'http://localhost:3013/profile';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      const result = await response.json();

      if (response.ok) {
        setMessage('Profile created successfully!');
        setTimeout(() => navigate('/dummy'), 2000); // Redirect after a delay
      } else {
        setMessage(result.message || 'Failed to create profile');
      }
    } catch (error) {
      console.error('Error during profile creation:', error);
      setMessage('An error occurred while creating the profile');
    }
  };

  return (
    <div className="create-profile-container">
      <h1>Create Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
            placeholder="Username"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="mobileNumber"
            value={profileData.mobileNumber}
            onChange={handleChange}
            placeholder="Mobile Number"
            required
          />
        </div>
        <div className="input-box">
          <textarea
            name="address"
            value={profileData.address}
            onChange={handleChange}
            placeholder="Address"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="place"
            value={profileData.place}
            onChange={handleChange}
            placeholder="Place"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="text"
            name="pincode"
            value={profileData.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            required
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>
      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default CreateProfile;
