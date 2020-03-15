const mongoose = require('mongoose');

const RollSchema = new mongoose.Schema({
    valueRoll: Array,
    userName: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tableId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table'
    }
});

module.exports = mongoose.model('Roll', RollSchema);