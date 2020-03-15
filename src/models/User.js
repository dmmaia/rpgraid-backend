const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	userName: String,
});

module.exports = mongoose.model('User', UserSchema);