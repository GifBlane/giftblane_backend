const createHttpError = require("http-errors")
const { Recharge } = require("../../database/models")
const { endpointResponse } = require("../../helpers/success")
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
    getRechargeById: catchAsync(async(req, res, next) => {
        try {
			const { id } = req.params;

			const recharge = await Recharge.findOne({ where: { id } });

			if (!recharge) {
				throw new ErrorObject('ID not found', 404);
			}

			endpointResponse({
				res,
				message: 'Recharge recovered with success',
				body: recharge,
			});
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error while recovering the Recharge] - [getRecharge - GET]: ${error.message}`
            );
            next(httpError);
        }
    }),


}



