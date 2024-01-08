const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Simulate user data
const users = [
  { id: 1, username: 'john', password: 'password' },
  // Add more users as needed
];

// Handle GET request for /api/login
app.get('/api/login', (req, res) => {
  res.status(404).json({ error: 'GET method not allowed for /api/login' });
});

// Handle POST request for /api/login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.json({ id: user.id, username: user.username });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

app.get('/api/students', (req, res) => {
  // Simulate student data
  const students = [
    { id: 1, name: 'Student 1' },
    { id: 2, name: 'Student 2' },
    // Add more students as needed
  ];

  res.json(students);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
