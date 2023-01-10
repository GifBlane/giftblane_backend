const createHttpError = require("http-errors");
const { Pin } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
  deletePin: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params;
      
      const deletePin = await Pin.update({
        status: 'deleted'
      },
      {
        where: {
            id,
        },
        returning: true,
      });
      endpointResponse({
        res,
        message: 'Pin retrieved successfully',
        body: deletePin,
    });

    } catch (error) {
        const httpError = createHttpError(
            error.statusCode,
            `[Error retrieving Pins] - [deletePin - PATCH]: ${error.message}`
        );
        next(httpError);
    }
  }),
};
