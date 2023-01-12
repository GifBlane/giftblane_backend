const createHttpError = require('http-errors');
const { catchAsync } = require('../../helpers/catchAsync');
const { endpointResponse } = require('../../helpers/success');
const { ErrorObject } = require('../../helpers/error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { User } = require('../../database/models');
dotenv.config();

module.exports = {
	loginUser: catchAsync(async (req, res, next) => {
		try {
			const { email, password } = req.body;

			const user = await User.findOne({
				where: { email },
			});

			if (!user)
				throw new ErrorObject(
					`error user with email ${email} does not exist`,
					404
				);

			/* const validatePass = await bcrypt.compare(password, user.password);
			 */
			/* if (!validatePass)
				throw new ErrorObject(
					'You have entered an invalid password',
					404
				); */

			if (password !== user.password) {
				throw new ErrorObject(
					'You have entered an invalid password',
					404
				);
			}
			const token = jwt.sign(
				{ id: user.id },
				process.env.SECRETORPRIVATEKEY,
				{ expiresIn: '1h' }
			);

			endpointResponse({
				res,
				message: 'login successfully',
				body: { user, token },
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error auth login] - [loginController - POST]: ${error.message}`
			);
			next(httpError);
		}
	}),
};
