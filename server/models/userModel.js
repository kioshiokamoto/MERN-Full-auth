const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please enter your name'],
			trim: true,
		},
		email: {
			type: String,
			required: [true, 'Please enter your email'],
			trim: true,
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please enter your password'],
		},
		role: {
			type: String,
			default: 0, // 0 === user, 1 === admin
		},
		avatar: {
			type: String,
			default: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
		},
	},
	{
		timestamps: true,
	}
);

const User = mongoose.model('Users', UserSchema);

module.exports = User;
