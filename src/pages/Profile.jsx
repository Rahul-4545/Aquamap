import React, { useState } from 'react';
import '../style/Profile.css';


const Profile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    preferredLanguage: '',
    aboutMe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Profile data:', formData);
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
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
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
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
