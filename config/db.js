const mongoose = require('mongoose');

// Connect to the MongoDB database
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Connected to the MongoDB database');
  } catch (error) {
    console.error('Failed to connect to the MongoDB database', error);
    process.exit(1);
  }
};

module.exports = connectDB;
