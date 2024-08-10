const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Import cors

const app = express();
const port = 3013;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions)); // Apply CORS middleware

app.use(bodyParser.json());



// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'rahul',
  password: 'rani030300',
  database: 'aquamap'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Basic Route
app.get('/', (req, res) => {
  res.send('Welcome to the backend server');
});

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required' });
  }

  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
  connection.query(query, [username, password], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    if (results.length > 0) {
      const userId = results[0].id;

      // Check if the user has a profile
      connection.query('SELECT * FROM profiles WHERE id = ?', [userId], (err, profileResults) => {
        if (err) {
          console.error('Error executing query:', err);
          return res.status(500).json({ message: 'Internal server error', error: err.message });
        }

        res.status(200).json({
          message: 'Login successful',
          user: results[0],
          hasProfile: profileResults.length > 0
        });
      });
    } else {
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

app.post('/register', (req, res) => {
  const { username, password, email, mobileNumber, address } = req.body;

  // Validate that all required fields are provided
  if (!username || !password || !email || !mobileNumber || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Insert the new user into the users table
  const query = 'INSERT INTO users (username, password, email, mobile_number, address) VALUES (?, ?, ?, ?, ?)';
  connection.query(query, [username, password, email, mobileNumber, address], (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    // Fetch the newly created user from the database to send it back to the client
    const newUserQuery = 'SELECT id, username, email, mobile_number, address FROM users WHERE id = ?';
    connection.query(newUserQuery, [results.insertId], (err, userResults) => {
      if (err) {
        console.error('Error fetching user:', err);
        return res.status(500).json({ message: 'Internal server error', error: err.message });
      }

      const user = userResults[0];
      console.log('Fetched user:', user); // Log the fetched user data for debugging
      res.status(201).json({ message: 'Registration successful', user });
    });
  });
});

// Profile route
app.post('/profile', (req, res) => {
  const { id, place, pincode } = req.body;

  if (!id || !place || !pincode) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const insertQuery = 'INSERT INTO profiles (id, place, pincode) VALUES (?, ?, ?)';

  connection.query(insertQuery, [id, place, pincode], (err, results) => {
    if (err) {
      console.error('Error executing insert query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    res.status(201).json({ message: 'Profile created successfully' });
  });
});

// Report Problem route
app.post('/report-problem', (req, res) => {
  const { name, phone, locality, problemType, description } = req.body;

  if (!name || !phone || !locality || !problemType || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const insertQuery = `
    INSERT INTO problemreports (name, phone, locality, problemType, description)
    VALUES (?, ?, ?, ?, ?)
  `;
  
  connection.query(insertQuery, [name, phone, locality, problemType, description], (err, results) => {
    if (err) {
      console.error('Error executing insert query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    res.status(201).json({ message: 'Problem report submitted successfully' });
  });
});

// Ideas route
app.post('/ideas', (req, res) => {
  const { idea } = req.body;

  if (!idea) {
    return res.status(400).json({ message: 'Idea is required' });
  }

  const query = 'INSERT INTO ideas (idea) VALUES (?)';

  connection.query(query, [idea], (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Error saving idea', error: err.message });
    }

    res.status(201).json({ message: 'Idea saved successfully' });
  });
});

// New GET route to fetch all problem reports
// Remove the duplicate route
app.get('/problem-reports', (req, res) => {
  const query = 'SELECT * FROM problemreports';
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    res.status(200).json(results);
  });
});


// New GET route to fetch all ideas
app.get('/ideas', (req, res) => {
  const query = 'SELECT * FROM ideas';
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).json({ message: 'Internal server error', error: err.message });
    }

    res.status(200).json(results);
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
