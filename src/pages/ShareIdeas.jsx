import React, { useState } from 'react';
import axios from 'axios';
import '../style/Shareideas.css'; 

const Shareideas = () => {
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Send idea to backend server
      await axios.post('http://localhost:3013/ideas', { idea });
      setIdea(''); // Clear the form
      setSubmitted(true);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError(`An error occurred while submitting your idea: ${err.response ? err.response.data.message : err.message}`);
      console.error('Submission error:', err); // Log the error for debugging
    }
  };
  

  const handleIdeaChange = (e) => {
    setIdea(e.target.value);
  };

  return (
    <div className="App">
      <h1>Share Your Ideas</h1>
      {submitted ? (
        <div className="confirmation">
          <h2>Thank you for sharing your idea!</h2>
          <p>We appreciate your contribution and will review it soon.</p>
          <p>Your idea has been successfully submitted.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="idea">Your Idea:</label>
            <textarea
              id="idea"
              value={idea}
              onChange={handleIdeaChange}
              rows="4"
              cols="50"
              placeholder="Enter your idea here"
              required
            />
          </div>
          <button type="submit">Submit</button>
          {error && <p className="error">{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Shareideas;
