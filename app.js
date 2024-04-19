const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/travelData', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for user registration details
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  // Add more fields as needed
});

// Define the User model
const User = mongoose.model('User', userSchema);

// Handle user registration
app.post('/register', (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      // Populate other fields from the form
    });
  
    newUser.save()
      .then(() => {
        res.send('User registered successfully');
      })
      .catch((err) => {
        res.status(500).send('Error saving user');
      });
  });
  
// Handle user login
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    // Check if user exists in the database
    User.findOne({ email, password })
      .then((user) => {
        if (user) {
          // User authenticated, redirect to next window with welcome message
          res.send('Welcome to Travel with Us wait for second......');
        } else {
          // User not found or credentials incorrect
          res.status(401).send('Invalid email or password');
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error occurred while logging in');
      });
  });
  
module.exports = app;
