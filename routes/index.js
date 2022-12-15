const express = require('express')
const authRoutes = require('./authRoutes')

const router = express.Router()

// example of a route with index controller get function
router.use("/", authRoutes);

module.exports = router
