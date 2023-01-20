const createHttpError = require("http-errors");
const { Recharge } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
  deleteRecharge: catchAsync(async (req, res, next) => {
    try {
        const { id } = req.params;

        const recharge = await Recharge.destroy({ where: { id } });

        if (!recharge) {
            throw new ErrorObject('ID not found', 404);
        }

        endpointResponse({
            res,
            message: 'recharge successfully eliminated',
            body: recharge,
        });
    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error while deleting Recharge] - [deleteRecharge - DELETE]: ${error.message}`
        );
        next(httpError);
    }
  }),
};
