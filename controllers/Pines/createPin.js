const createHttpError = require('http-errors');
const { Pin } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
	createPin: catchAsync(async (req, res, next) => {
		try {
			const { swap, code, status, typeCard, dateVigencia } = req.body;

			const newPin = await Pin.create({
				typeCard,
				code,
				status,
				swap,
				dateVigencia,
			});

			endpointResponse({
				res,
				message: 'Pin retrieved successfully',
				body: newPin,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Pin] - [createPin - POST]: ${error.message}`
			);
			next(httpError);
		}
	}),
};
