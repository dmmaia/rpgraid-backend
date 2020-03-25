const Roll = require('../models/Roll');
const Table = require('../models/Table');

module.exports = {
    async delete(req, res) {
        const { _id } = req.headers;

        let table;
        let roll;

        if (_id) {
            table = await Table.deleteOne({_id:_id});
            roll = await Roll.deleteMany({tableId: _id})
        }

        return res.json({roll,table});
    }
}

