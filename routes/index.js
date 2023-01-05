const express = require('express');

//Controllers
const { getAllUsers } = require('../controllers/Users/GetAllUsers');
const { createUser } = require('../controllers/Users/CreateUsers');
const { updateUser } = require('../controllers/Users/UpdateUsers');
const { getUserById } = require('../controllers/Users/getByIdUsers');

//Middlewares
const { userExist } = require('../middlewares/userExist');

const router = express.Router();

// example of a route with index controller get function
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.patch('/users/:id', userExist, updateUser);

module.exports = router;
