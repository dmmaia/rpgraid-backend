const mongoose = require('mongoose');

const TableSchema = new mongoose.Schema({
    tableName: String,
    UserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Table', TableSchema);