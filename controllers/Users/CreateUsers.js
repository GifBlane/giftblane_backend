const createHttpError = require('http-errors');
const { User } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const bcrypt = require('bcrypt');

module.exports = {
	createUser: catchAsync(async (req, res, next) => {
		try {
			const { name, lastname, email, password, type_id, num_id } =
				req.body;

			const salt = await bcrypt.genSalt(12);

			const hashPassword = await bcrypt.hash(password, salt);
			const newUser = await User.create({
				name,
				lastname,
				email,
				password: hashPassword,
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
