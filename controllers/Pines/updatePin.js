const createHttpError = require("http-errors");
const { Pin } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
  updatePin: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const { swap, typeCode, status, code, typeCard } = req.body;

      const updatePin = await Pin.update({
        swap,
        typeCode,
        status,
        code,
        typeCard,
      },
      {
        where: {
            id,
        },
        returning: true,
      });

      endpointResponse({
        res,
        message: 'Pin Update',
        body: updatePin,
    });

    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Pin] - [updatePin - PATCH]: ${error.message}`
      );
      next(httpError);
    }
  }),
};