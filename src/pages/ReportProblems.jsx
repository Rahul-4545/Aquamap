import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/ReportProblems.css';

const ReportProblems = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    locality: '',
    problemType: '',
    description: '', 
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form data:', formData);
    setIsSubmitted(true);
    // Navigate to the Feedback form after a delay to show the message
    setTimeout(() => {
      navigate('/feedb');
    }, 2000); // 2-second delay for demonstration
  };

  return (
    <div>
      <h1>Report a problem</h1>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d58731648.23368149!2d84.524642!3d26.043523!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721490856047!5m2!1sen!2sin"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Phone Number:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Locality:
            <input
              type="text"
              name="locality"
              value={formData.locality}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Type of Problem:
            <input
              type="text"
              name="problemType"
              value={formData.problemType}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description of the Problem:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
        </div>
        <div>
          <button type="submit">
            {isSubmitted ? 'Submitted!' : 'Submit'}
          </button>
        </div>
      </form>

      {isSubmitted && (
        <div className="confirmation-message">
          Your problem report has been submitted successfully.
        </div>
      )}
    </div>
  );
};

export default ReportProblems;
