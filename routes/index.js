const express = require('express')
const authRoutes = require('./authRoutes');
const pinsRouter = require('./pinsRouter');

const router = express.Router()

// example of a route with index controller get function
router.use("/", authRoutes);
router.use('/pins', pinsRouter)

module.exports = router
