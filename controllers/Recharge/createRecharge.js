const createHttpError = require("http-errors")
const { Recharge } = require("../../database/models")
const { endpointResponse } = require("../../helpers/success")
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
	createRecharge: catchAsync(async (req,res,next) =>{
		try {
			const {idUserCreated, idComerce, value, numCard} = req.body;
			const dateCreate = new Date()
			
			const newRecharge = await Recharge.create({
                dateCreate,
                idUserCreated,
                idComerce,
                value,
                numCard
			});
			endpointResponse({
				res,
				message: "Reload successful",
				body: newRecharge,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error to generate Recharge] - [createRecharge - POST]:${error.message}`
			);
			next(httpError);
		}
	}),
};