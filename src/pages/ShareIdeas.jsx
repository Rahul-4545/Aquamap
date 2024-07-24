import React, { useState } from 'react';
import '../style/Shareideas.css'; 

const Shareideas = () => {
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(`Submitted Idea: ${idea}`);
    setIdea(''); // Clear the form
    setSubmitted(true); 
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
          <p>Your idea has been successfully submitted.</p> {/* New message */}
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
        </form>
      )}
    </div>
  );
};

export default Shareideas;
