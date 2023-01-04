const express = require('express');
const { getAllUsers } = require('../controllers/Users/GetAllUsers');
const { createUser } = require('../controllers/Users/CreateUsers');

const router = express.Router();

// example of a route with index controller get function
router.get('/users', getAllUsers);
router.post('/users', createUser);

module.exports = router;
