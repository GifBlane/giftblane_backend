const createHttpError = require("http-errors")
const { Setting } = require("../../database/models")
const { endpointResponse } = require("../../helpers/success")
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
    settingById: catchAsync (async (req, res, next) => {
        try {
            const { id } = req.params;
            const setting = await Setting.findOne({ where: { id }});

            if (!setting) {
                throw new ErrorObject('ID not found', 404);
            }

            endpointResponse({
                res,
                message: 'Setting recovered with success',
                body: setting,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error while recovering the Setting] - [settingById - GET]: ${error.message}`
            );
            next(httpError);
        }
    })
}