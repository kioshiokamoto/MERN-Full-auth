const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const sendEmail = require('./sendMail');

const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const fetch = require('node-fetch');

const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID);

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

			sendEmail(email, url, 'Click here');

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
	login: async (req, res) => {
		try {
			const { email, password } = req.body;
			const user = await Users.findOne({ email });
			if (!user) return res.status(400).json({ msg: 'This email does not exist' });

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch) return res.status(400).json({ msg: 'Password is incorrect' });

			const refresh_token = createRefreshToken({ id: user._id });
			res.cookie('refreshtoken', refresh_token, {
				httpOnly: true,
				path: '/user/refresh_token',
				maxAge: 7 * 24 * 60 * 60 * 1000,
			});
			res.json({ msg: 'Login success!' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getAccessToken: async (req, res) => {
		try {
			const rf_token = req.cookies.refreshtoken;
			if (!rf_token) return res.status(400).json({ msg: 'Please login now' });

			jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
				if (err) return res.status(400).json({ msg: 'Please login now' });

				const access_token = createAccessToken({ id: user.id });

				res.json({ access_token });
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	forgotPassword: async (req, res) => {
		try {
			const { email } = req.body;
			const user = await Users.findOne({ email });
			if (!user) return res.status(400).json({ msg: 'This email does not exist' });

			const access_token = createAccessToken({ id: user._id });
			const url = `${CLIENT_URL}/user/reset/${access_token}`;

			sendEmail(email, url, 'Reset your password');

			res.json({ msg: 'Re-send the password, please check your mail' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	resetPassword: async (req, res) => {
		try {
			const { password } = req.body;
			const passwordHash = await bcrypt.hash(password, 12);

			await Users.findOneAndUpdate(
				{ _id: req.user.id },
				{
					password: passwordHash,
				}
			);
			res.json({ msg: 'Password successfully changed' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getUserInfo: async (req, res) => {
		try {
			const user = await await Users.findById(req.user.id).select('-password');

			res.json(user);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getUsersAllInfo: async (req, res) => {
		try {
			const users = await Users.find().select('-password');
			res.json(users);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	logout: async (req, res) => {
		try {
			res.clearCookie('refreshtoken', { path: '/user/refresh_token' });
			return res.json({ msg: 'Logged out' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	updateUser: async (req, res) => {
		try {
			const { name, avatar } = req.body;
			await Users.findByIdAndUpdate(
				{ _id: req.user.id },
				{
					name,
					avatar,
				}
			);
			res.json({ msg: 'Update success' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	updateUsersRole: async (req, res) => {
		try {
			const { role } = req.body;
			await Users.findByIdAndUpdate(
				{ _id: req.params.id },
				{
					role,
				}
			);
			res.json({ msg: 'Update success' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	deleteUser: async (req, res) => {
		try {
			await Users.findByIdAndDelete(req.params.id);
			return res.json({ msg: 'Deleted success' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	googleLogin: async (req, res) => {
		try {
			const { tokenId } = req.body;
			const verify = await client.verifyIdToken({
				idToken: tokenId,
				audience: process.env.MAILING_SERVICE_CLIENT_ID,
			});

			const { email_verified, email, name, picture } = verify.payload;

			const password = email + process.env.GOOGLE_SECRET;

			const passwordHash = await bcrypt.hash(password, 12);

			if (!email_verified) return res.status(400).json({ msg: 'Email verification failed' });

			const user = await Users.findOne({ email });
			if (user) {
				const isMatch = await bcrypt.compare(password, user.password);
				if (!isMatch) return res.status(400).json({ msg: 'Password is incorrect' });

				const refresh_token = createRefreshToken({ id: user._id });
				res.cookie('refreshtoken', refresh_token, {
					httpOnly: true,
					path: '/user/refresh_token',
					maxAge: 7 * 24 * 60 * 60 * 1000,
				});
				res.json({ msg: 'Login success!' });
			} else {
				const newUser = new Users({
					name,
					email,
					password: passwordHash,
					avatar: picture,
				});
				await newUser.save();

				const refresh_token = createRefreshToken({ id: newUser._id });
				res.cookie('refreshtoken', refresh_token, {
					httpOnly: true,
					path: '/user/refresh_token',
					maxAge: 7 * 24 * 60 * 60 * 1000,
				});
				res.json({ msg: 'Login success!' });
			}
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	facebookLogin: async (req, res) => {
		try {
			const { accessToken, userID } = req.body;

			const URL = `https://graph.facebook.com/v2.9/${userID}/?fields=name,email,picture&access_token=${accessToken}`;

			const data = await fetch(URL)
				.then((res) => res.json())
				.then((res) => {
					return res;
				});
			console.log(data);

			const { email, name, picture } = data;

			const password = email + process.env.FACEBOOK_SECRET;

			const passwordHash = await bcrypt.hash(password, 12);

			const user = await Users.findOne({ email });
			if (user) {
				const isMatch = await bcrypt.compare(password, user.password);
				if (!isMatch) return res.status(400).json({ msg: 'Password is incorrect' });

				const refresh_token = createRefreshToken({ id: user._id });
				res.cookie('refreshtoken', refresh_token, {
					httpOnly: true,
					path: '/user/refresh_token',
					maxAge: 7 * 24 * 60 * 60 * 1000,
				});
				res.json({ msg: 'Login success!' });
			} else {
				const newUser = new Users({
					name,
					email,
					password: passwordHash,
					avatar: picture.data.url,
				});
				await newUser.save();

				const refresh_token = createRefreshToken({ id: newUser._id });
				res.cookie('refreshtoken', refresh_token, {
					httpOnly: true,
					path: '/user/refresh_token',
					maxAge: 7 * 24 * 60 * 60 * 1000,
				});
				res.json({ msg: 'Login success!' });
			}
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
};

function validateEmail(email) {
	const re =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
