const Table = require('../models/Table');

module.exports = {
	async store(req, res){
        const {tableName,  UserId, _id } = req.body;

        let table = await Table.find({UserId});

        if(_id){
            table = await Table.findById(_id)
        }

        if((UserId && tableName)){
			table = await Table.create({tableName, UserId});
        }
		

		return res.json(table);
	}
};
