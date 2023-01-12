const createHttpError = require("http-errors")
const { Setting } = require("../../database/models")
const { endpointResponse } = require("../../helpers/success")
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
    getAllSettings: catchAsync(async (req, res, next) => {
        try {
            const setting = await Setting.findAll()
            endpointResponse({
                res,
                message: 'Settings recovered with success',
                body: setting,
            });
        } catch (error) {
            const httpError = createHttpError(
                error.statusCode,
                `[Error while recovering the settings] - [getSettings - GET]: ${error.message}`
            )
        }
    })
}