// Import the User model from the models directory
const User = require('../models/User');

// Controller functions
const usersController = {
  getAllUsers: async (req, res) => {
    try {
      // Retrieve all users from the database
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getUserById: async (req, res) => {
    try {
      // Retrieve a user by ID from the database
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createUser: async (req, res) => {
    try {
      // Create a new user
      const newUser = new User(req.body);
      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateUser: async (req, res) => {
    try {
      // Update a user by ID
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  deleteUser: async (req, res) => {
    try {
      // Delete a user by ID
      const deletedUser = await User.findByIdAndDelete(req.params.id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json(deletedUser);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = usersController;
