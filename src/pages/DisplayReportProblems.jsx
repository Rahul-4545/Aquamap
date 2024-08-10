import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/DisplayReportProblems.css'; 


const ProblemReports = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await axios.get('http://localhost:3013/problem-reports');
        setReports(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching problem reports.');
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const handleGoToIdeas = () => {
    navigate('/di'); // Navigate to the Ideas page
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Problem Reports</h1>
      <ul>
        {reports.map((report) => (
          <li key={report.id}>
            <h2>{report.problemType}</h2>
            <p><strong>Name:</strong> {report.name}</p>
            <p><strong>Phone:</strong> {report.phone}</p>
            <p><strong>Locality:</strong> {report.locality}</p>
            <p><strong>Description:</strong> {report.description}</p>
            <p><strong>Submitted At:</strong> {new Date(report.submitted_at).toLocaleString()}</p>
          </li>
        ))}
      </ul>
      <button onClick={handleGoToIdeas}>Go to Ideas</button> {/* Add this button */}
    </div>
  );
};

export default ProblemReports;
