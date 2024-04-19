// server.js
const express = require('express');
const app = require('./app');

const server = express();

server.use(express.static('index.html'));

// Use your app.js file for handling routes and logic
server.use('/', app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
