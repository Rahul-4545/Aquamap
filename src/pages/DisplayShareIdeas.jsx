import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/DisplayShareIdeas.css'; 


const Ideas = () => {
  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const response = await axios.get('http://localhost:3013/ideas');
        setIdeas(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching ideas.');
        setLoading(false);
      }
    };
    fetchIdeas();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Submitted Ideas</h1>
      <ul>
        {ideas.map((idea) => (
          <li key={idea.id}>
            <p>{idea.idea}</p>
            <p><strong>Submitted At:</strong> {new Date(idea.submitted_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ideas;
