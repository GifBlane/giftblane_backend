const createHttpError = require('http-errors');
const { User } = require('../../database/models');
const { endpointResponse } = require('../../helpers/success');
const { catchAsync } = require('../../helpers/catchAsync');
const bcrypt = require('bcrypt');

module.exports = {
	createUser: catchAsync(async (req, res, next) => {
		try {
			const { name, lastName, email, password, typeId, numId } = req.body;

			const salt = await bcrypt.genSalt(12);

			const hashPassword = await bcrypt.hash(password, salt);
			const newUser = await User.create({
				name,
				lastName,
				email,
				password: hashPassword,
				typeId,
				numId,
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
