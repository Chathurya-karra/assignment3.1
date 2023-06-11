const express = require('express');
const router = express.Router();

// Import the usersController
const usersController = require('../controllers/usersController');

// Define routes for user-related operations
router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
