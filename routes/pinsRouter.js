const pinsRouter = require('express').Router()
const { getPins } = require('../controllers/Pines/GetAllPines')

pinsRouter.get('/', getPins)

module.exports = pinsRouter
