const createHttpError = require("http-errors");
const { Recharge } = require("../../database/models");
const { endpointResponse } = require("../../helpers/success");
const { catchAsync } = require("../../helpers/catchAsync");
const { ErrorObject } = require("../../helpers/error");

module.exports = {
  updateRecharge: catchAsync(async (req, res, next) => {
    try {
      const { id } = req.params
      const {idUserCreated, idComerce, value, numCard} = req.body;
      if(!id){ throw new ErrorObject('Not found id', 404);}

      const recharge = await Recharge.update({
        dateCreate,
          idUserCreated,
          idComerce,
          value,
          numCard
      },
      {
        where: {
            id,
        },
        returning: true,
      });

      endpointResponse({
        res,
        message: 'Recharge update successfully',
        body: recharge,
    });

    } catch (error) {
      const httpError = createHttpError(
        error.statusCode,
        `[Error retrieving Recharge] - [updateRecharge - PATCH]: ${error.message}`
      );
      next(httpError);
    }
  }),
};