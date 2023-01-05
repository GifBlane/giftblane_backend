const createHttpError = require('http-errors');
const Pin = require('../../database/models/pin');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const { ErrorObject } = require('../../helpers/error');
const { Op } = require('sequelize');


module.exports = {
    getPins: catchAsync(async(req, res, next) => {
        try {
            const pins = await Pin.findAll()
            if(!pins) throw new ErrorObject('pins not found', 204) 
            endpointResponse({
				res,
				message: 'Users  retrieved successfully',
				body: pins,
			});
        } catch (error) {
            const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Pins] - [getPins - GET]: ${error.message}`
			);
			next(httpError);
        }
    }),
    createPin: catchAsync(async(req, res, next) => {
        try {
            const { swap, typeCode, status, code, typeCard } = req.body
            console.log("body", req.body)
            const pin = await Pin.create({
                swap,
                typeCode,
                status,
                code,
                typeCard
            })
            endpointResponse({
				res,
				message: 'Users  retrieved successfully',
				body: pin,
			});
        } catch (error) {
            const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Pin] - [createPin - POST]: ${error.message}`
			);
			next(httpError);
        }


    })


}