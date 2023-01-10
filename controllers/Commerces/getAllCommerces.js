const createHttpError = require("http-errors");
const { Commerce } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require('../../helpers/error');


module.exports = {
  getAllCommerces: catchAsync(async (req, res, next) => {
    //TODO: add pagination
    try {
      const commerces = await Commerce.findAll();
      if(!commerces) throw new ErrorObject('Not found Commerces', 404);

      endpointResponse({
        res,
        message: "Commerce retrieved successfully",
        body: commerces,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Commerces] - [getAllCommerces - GET]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
