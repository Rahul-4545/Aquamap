import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../style/Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(1);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Rating: ${rating}, Feedback: ${feedback}`);
    setSubmitted(true);

    // Navigate to the Shareideas form after a brief delay to show the message
    setTimeout(() => {
      navigate('/shareideas');
    }, 2000); // 2-second delay for demonstration
  };

  const handleRatingChange = (e) => {
    setRating(Number(e.target.value));
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <div className="App">
      <h1>Feedback Form</h1>
      {submitted ? (
        <div>
          <h2>Thank you for your feedback!</h2>
          <p>Your rating: {rating}</p>
          <p>Your feedback: {feedback}</p>
          <p>Your feedback has been received and is appreciated.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="rating">Rating:</label>
            <select
              id="rating"
              value={rating}
              onChange={handleRatingChange}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="feedback">Feedback:</label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={handleFeedbackChange}
              rows="4"
              cols="50"
              placeholder="Enter your feedback here"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
