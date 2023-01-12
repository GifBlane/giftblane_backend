const createHttpError = require('http-errors');
const { User } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');

module.exports = {
	createUser: catchAsync(async (req, res, next) => {
		try {
			const { name, lastname, email, password, type_id, num_id } =
				req.body;

			const newUser = await User.create({
				name,
				lastname,
				email,
				password,
				type_id,
				num_id,
			});

			endpointResponse({
				res,
				message: 'Created User successfully',
				body: newUser,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error retrieving Users] - [CreateUser - POST]: ${error.message}`
			);
			next(httpError);
		}
	}),
};
