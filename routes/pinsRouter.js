const pinsRouter = require('express').Router()
const { getPins, createPin } = require('../controllers/Pines/pinsControllers')

pinsRouter.get('/', getPins)
pinsRouter.post('/createPin', createPin)

module.exports = pinsRouter
