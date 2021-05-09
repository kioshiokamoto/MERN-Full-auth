const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('./sendMail');

const { CLIENT_URL } = process.env;

const userCtrl = {
	register: async (req, res) => {
		try {
			const { name, email, password } = req.body;
			if (!name || !email || !password) {
				return res.status(400).json({ msg: 'Please fill in all fields' });
			}
			if (!validateEmail(email)) {
				return res.status(400).json({ msg: 'Invalid email' });
			}

			const user = await Users.findOne({ email });
			if (user) {
				return res.status(400).json({ msg: 'This email already exists' });
			}

			if (password.length < 6) {
				return res.status(400).json({ msg: 'Password must be at least 6 characters' });
			}

			const passwordHash = await bcrypt.hash(password, 12);
			const newUser = {
				name,
				email,
				password: passwordHash,
			};

			const activation_token = createActivationToken(newUser);

			const url = `${CLIENT_URL}/user/activate/${activation_token}`;

			sendEmail(email, url);

			res.json({ msg: 'Register success, Please activate you email to start' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	activateEmail: async (req, res) => {
		try {
			const { activation_token } = req.body;

			const user = jwt.verify(activation_token, process.env.ACTIVATION_TOKEN_SECRET);

			const { name, email, password } = user;

			const check = await Users.findOne({ email });
			if (check) {
				return res.status(400).json({ msg: 'This email already exists' });
			}

			const newUser = new Users({
				name,
				email,
				password,
			});
			console.log('here');
			await newUser.save();

			res.json({ msg: 'Account has been activated!' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};

function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function createActivationToken(payload) {
	return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, { expiresIn: '5m' });
}
function createAccessToken(payload) {
	return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '15m' });
}
function createRefreshToken(payload) {
	return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
}

module.exports = userCtrl;
