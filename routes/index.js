const express = require('express');

//Controllers Users
const { getAllUsers } = require('../controllers/Users/GetAllUsers');
const { createUser } = require('../controllers/Users/CreateUsers');
const { updateUser } = require('../controllers/Users/UpdateUsers');
const { getUserById } = require('../controllers/Users/getByIdUsers');
const { deleteUser } = require('../controllers/Users/deleteUser');

//Middlewares
const { userExist } = require('../middlewares/userExist');

const router = express.Router();

// example of a route with index controller get function
//Routes Users
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.patch('/users/:id', userExist, updateUser);
router.delete('/users/:id', deleteUser);

//Routes Pines

module.exports = router;
