const express = require('express')


//User Controllers

const { getAllUsers } = require('../controllers/Users/GetAllUsers');
const { createUser } = require('../controllers/Users/CreateUsers');
const { updateUser } = require('../controllers/Users/UpdateUsers');
const { getUserById } = require('../controllers/Users/getByIdUsers');
const { deleteUser } = require('../controllers/Users/deleteUser');

//comments

//Controller recharges
const {getRecharge, createRecharge} = require('../controllers/Recharge/createRecharge')

//Pins Controllers

const { createPin } = require('../controllers/Pines/createPin');
const { getAllPins } = require('../controllers/Pines/getAllPins');
const { updatePin } = require('../controllers/Pines/updatePin');



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

//Pins routes

router.post('/pins', createPin)
router.get('/pins', getAllPins)
router.patch('/pins/:id', updatePin)

//Routes Recharge
router.post('/recharge', createRecharge)

module.exports = router;