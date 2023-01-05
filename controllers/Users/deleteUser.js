const createHttpError = require('http-errors');
const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { User } = require('../../database/models/');
const { ErrorObject } = require('../../helpers/error');

module.exports = {
	deleteUser: catchAsync(async (req, res, next) => {
		try {
			const { id } = req.params;

			const user = await User.destroy({ where: { id } });

			if (!user) {
				throw new ErrorObject('ID not found', 404);
			}

			endpointResponse({
				res,
				message: 'user deleted',
				body: user,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Users] - [deleteUsers - DELETE]: ${error.message}`
			);
			next(httpError);
		}
	}),
};
