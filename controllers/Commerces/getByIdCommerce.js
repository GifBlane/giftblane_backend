const createHttpError = require("http-errors");
const { Commerce } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require("../../helpers/error")

module.exports = {
    getByIdCommerce: catchAsync(async(req, res, next) => {
        try {
            const { id } = req.params
            if (!id) throw new ErrorObject('ID not found', 404)
            const commerce = await Commerce.findOne({ where: { id } });

			endpointResponse({
				res,
				message: 'result successfully',
				body: commerce,
			});
            
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error retrieving Commerce] - [getByIdCommerce - GET]: ${error.message}`
              );
              next(httpError);
        }
    })

}