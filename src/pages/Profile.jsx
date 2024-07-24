import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/Profile.css';

const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    preferredLanguage: '',
    aboutMe: '',
    profilePhoto: null,
  });

  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Profile data:', formData);
    // Handle form submission logic here, e.g., uploading the profile photo

    // Set the success message
    setMessage('Profile is updated');

    // Optionally, navigate to the report problems page after showing the message
    setTimeout(() => navigate('/dummy'), 2000);
  };

  return (
    <div className="profile-container">
      <h1>Profile Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Mobile Number:
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Preferred Language:
            <select
              name="preferredLanguage"
              value={formData.preferredLanguage}
              onChange={handleChange}
              required
            >
              <option value="">Select a language</option>
              <option value="english">English</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
              <option value="german">German</option>
              <option value="chinese">Chinese</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            About Me:
            <textarea
              name="aboutMe"
              value={formData.aboutMe}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Profile Photo:
            <input
              type="file"
              name="profilePhoto"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

    
      {message && <div className="success-message">{message}</div>}
    </div>
  );
};

export default Profile;
