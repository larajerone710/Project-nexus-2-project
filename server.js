// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route for login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Route for signup page
app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html');
});

// POST request for login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Handle login logic here
    res.send(`Login attempt: ${email}`);
});

// POST request for signup
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    // Handle signup logic here
    res.send(`Signup attempt: ${username}, ${email}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
