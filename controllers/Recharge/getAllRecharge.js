const createHttpError = require("http-errors")
const { Recharge } = require("../../database/models")
const { endpointResponse } = require("../../helpers/success")
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
    getAllRecharge: catchAsync(async(req, res, next) => {
        try {
            const recharge = await Recharge.findAll()
            endpointResponse({
                res,
                message: 'Recharges recovered with success',
                body: recharge,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error while recovering the Recharges] - [getRecharges - GET]: ${error.message}`
            );
            next(httpError);
        }
    }),


}



