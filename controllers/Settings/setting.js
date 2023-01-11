const createHttpError = require("http-errors")
const { Setting } = require("../../database/models")
const { endpointResponse } = require("../../helpers/success")
const { catchAsync } = require("../../helpers/catchAsync");

module.exports = {
	createSettings: catchAsync(async (req,res,next) =>{
		try {
			const {percentage, role, password, idUser, isVerify, type} = req.body;
			
			const newSetting = await Setting.create({
                percentage,
                role,
                password, 
                idUser, 
                isVerify, 
                type
            });
			endpointResponse({
				res,
				message: "Settings successful",
				body: newSetting,
			});
		} catch (error) {
			const httpError = createHttpError(
				error.statusCode,
				`[Error to generate Settings] - [createSettings - POST]:${error.message}`
			);
			next(httpError);
		}
	}),
};

