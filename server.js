const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to the MongoDB database
connectDB();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the REST API!');
});

// Routes
app.use('/users', require('./routes/users'));

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
