const createHttpError = require("http-errors");
const { Commerce } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require('../../helpers/error');

module.exports = {
    updateCommerce: catchAsync(async (req, res, next) => {
      try {
        const { id } = req.params
        const { name, phone, nit, address, image } = req.body
        if(!id) throw new ErrorObject('Not found id', 404);
        const commerce = await Commerce.update({
            name,
            phone,
            nit,
            address,
            image
        },
        {
            where: {
                id
            },
            returning: true
        });

  
        endpointResponse({
          res,
          message: "Commerce update successfully",
          body: commerce,
        });
      } catch (error) {
        const httpError = createHttpError(
          error.statusCode,
          `[Error retrieving Commerces] - [updateCommerce - PATCH]: ${error.message}`
        );
        next(httpError);
      }
    }),
  };
  