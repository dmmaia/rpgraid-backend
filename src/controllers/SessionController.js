const User = require('../models/User');

module.exports = {
	async store(req, res){
        const { userName } = req.body;

		let user = await User.findOne({ userName });

		if(!user){
			user = await User.create({userName});
		}

		return res.json(user);
	}
};
