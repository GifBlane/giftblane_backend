const createHttpError = require('http-errors');
const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { User } = require('../../database/models/');
const { Setting } = require('../../database/models');
const { ErrorObject } = require('../../helpers/error');

module.exports = {
	getUserById: catchAsync(async (req, res, next) => {
		try {
			const { id } = req.params;

			const user = await User.findOne({
				where: { id },
				include: { Model: Setting },
			});

			if (!user) {
				throw new ErrorObject('ID not found', 404);
			}

			endpointResponse({
				res,
				message: 'result successfully',
				body: user,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Users] - [getUserById - GET]: ${error.message}`
			);
			next(httpError);
		}
	}),
};
