const express = require('express');
const router = express.Router();

// Define a route handler for the base URL
router.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

module.exports = router;
