const createHttpError = require('http-errors');
const { Pin } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
    getAllPins: catchAsync(async(req, res, next) => {
        //TODO: add paginate
        try {
            const pins = await Pin.findAll()
            endpointResponse({
                res,
                message: 'Pin retrieved successfully',
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


}



