const { User } = require('../database/models/');
const { catchAsync } = require('../helpers/catchAsync');
const { ErrorObject } = require('../helpers/error');

module.exports = {
	userExist: catchAsync(async (req, _res, next) => {
		try {
			const { id } = req.params;

			const user = await User.findOne({ where: { id } });

			if (!user) {
				throw new ErrorObject('ID not found', 404);
			}

			req.user = user;
			next();
		} catch (error) {}
	}),
};
