const express = require('express');

//Login Controller
const { loginUser } = require('../controllers/Auth/login');

//User Controllers
const { getAllUsers } = require('../controllers/Users/GetAllUsers');
const { createUser } = require('../controllers/Users/CreateUsers');
const { updateUser } = require('../controllers/Users/UpdateUsers');
const { getUserById } = require('../controllers/Users/getByIdUsers');
const { deleteUser } = require('../controllers/Users/deleteUser');

//comments

//Pins Controllers
const { createPin } = require('../controllers/Pines/createPin');
const { getAllPins } = require('../controllers/Pines/getAllPins');
const { updatePin } = require('../controllers/Pines/updatePin');
const { deletePin } = require('../controllers/Pines/deletePin');
const { getByIdPin } = require('../controllers/Pines/getByIdPin');

//Recharges Controllers

const { createRecharge } = require('../controllers/Recharge/createRecharge');
const { getAllRecharge } = require('../controllers/Recharge/getAllRecharge');
const { getRechargeById } = require('../controllers/Recharge/RechargeById');

//Commerces Controllers

const { getAllCommerces } = require('../controllers/Commerces/getAllCommerces');
const { updateCommerce }= require('../controllers/Commerces/updateCommerce');

const { getByIdCommerce } = require('../controllers/Commerces/getByIdCommerce');

//Settings Controllers

const { createSettings } = require('../controllers/Settings/setting');

//Middlewares
const { userExist } = require('../middlewares/userExist');

const router = express.Router();

//Routes Login
router.post('/auth/login', loginUser);

//Routes Users
router.get('/users', getAllUsers);
router.post('/users', createUser);
router.get('/users/:id', getUserById);
router.patch('/users/:id', userExist, updateUser);
router.delete('/users/:id', deleteUser);

//Routes Pines
router.post('/pins', createPin);
router.get('/pins', getAllPins);
router.get('/pins/:id([0-9]+)', getByIdPin);
router.delete('/pins/delete/:id([0-9]+)', deletePin);
router.patch('/pins/:id([0-9]+)', updatePin);

//Routes Recharge
router.post('/recharge', createRecharge);
router.get('/recharge', getAllRecharge);
router.patch('/recharge/:id', getRechargeById);

//Routes Commerce
router.get('/commerce', getAllCommerces);
router.patch('/commerce/:id([0-9]+)', updateCommerce)

router.get('/commerce/:id([0-9]+)', getByIdCommerce)

//Routes Settings
router.post('/settings', createSettings);

module.exports = router;
