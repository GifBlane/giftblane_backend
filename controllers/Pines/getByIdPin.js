const createHttpError = require("http-errors");
const { Pin } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require("../../helpers/error")

module.exports = {
    getByIdPin: catchAsync(async(req, res, next) => {
        try {
            const { id } = req.params
            const pin = await Pin.findOne({ where: { id } });

            if (!pin) throw new ErrorObject('ID not found', 404)

			endpointResponse({
				res,
				message: 'result successfully',
				body: pin,
			});
            
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving Pin] - [getByIdPin - GET]: ${error.message}`
              );
              next(httpError);
        }
    })

}