const createHttpError = require("http-errors");
const { Commerce } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
  createCommerce: catchAsync(async (req, res, next) => {
    try {
      const { name, phone, nit, address, image } = req.body;

      const commerce = await Commerce.create({
        name,
        phone,
        nit,
        address,
        image,
      });

      endpointResponse({
        res,
        message: "Commerce created successfully",
        body: commerce,
      });
    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Commerce] - [createCommerce - POST]: ${error.message}`
      );
      next(httpError);
    }
  }),
};
