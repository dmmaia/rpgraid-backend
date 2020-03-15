const Roll = require('../models/Roll');

module.exports = {
	async store(req, res){
        const { valueRoll, userName, userId, tableId } = req.body;

		let roll = await Roll.find({ tableId });

		if(valueRoll){
			roll = await Roll.create({valueRoll, userName, userId, tableId});
		}

		return res.json(roll);
	}
};
