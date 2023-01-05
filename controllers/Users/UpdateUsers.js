const createHttpError = require('http-errors');
const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');

module.exports = {
	updateUser: catchAsync(async (req, res, next) => {
		try {
			const { user } = req;

			await user.update({
				...body,
			});

			endpointResponse({
				res,
				message: 'User Update',
				body: user,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Users] - [updateUsers - PATCH]: ${error.message}`
			);
			next(httpError);
		}
	}),
};
