import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification';
import { isEmail, isEmpty, isLength, isMatch } from '../../utils/validation/Validation';
import { Button, ButtonGroup } from "@chakra-ui/react"
const initialState = {
	name: '',
	email: '',
	password: '',
	cf_password: '',
	err: '',
	success: '',
};
export default function Register({ history }) {
	const [user, setUser] = useState(initialState);
	const { name, email, password, cf_password, err, success } = user;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			err: '',
			success: '',
			[name]: value,
		});
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (isEmpty(name) || isEmpty(password)) {
			return setUser({
				...user,
				success: '',
				err: 'Please fill in all fields',
			});
		}
		if (!isEmail(email)) {
			return setUser({
				...user,
				success: '',
				err: 'Invalid email',
			});
		}
		if (isLength(password)) {
			return setUser({
				...user,
				success: '',
				err: 'Password must be at least 6 characters',
			});
		}
		if (isMatch(password, cf_password)) {
			return setUser({
				...user,
				success: '',
				err: 'Password dit not match',
			});
		}
		try {
			const res = await axios.post('/user/register', {
				name,
				email,
				password,
			});
			setUser({
				...user,
				success: res.data.msg,
			});
			//history.push('/');
		} catch (error) {
			error.response.data.msg &&
				setUser({
					...user,
					success: '',
					err: error.response.data.msg,
				});
		}
	};

	return (
		<div className="login_page">
			<h2>Register</h2>
			{err && showErrMsg(err)}
			{success && showSuccessMsg(success)}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email">Name</label>
					<input
						type="text"
						placeholder="Enter your name"
						id="name"
						value={name}
						name="name"
						onChange={handleInputChange}
					/>
				</div>
				<div>
					<label htmlFor="email">Email Address</label>
					<input
						type="text"
						placeholder="Enter email address"
						id="email"
						value={email}
						name="email"
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input
						type="password"
						placeholder="Enter password"
						id="password"
						value={password}
						name="password"
						onChange={handleInputChange}
					/>
				</div>

				<div>
					<label htmlFor="cf_password">Confirm password</label>
					<input
						type="password"
						placeholder="Confirm password"
						id="cf_password"
						value={cf_password}
						name="cf_password"
						onChange={handleInputChange}
					/>
				</div>

				<div className="row">
					<button type="submit">Register</button>
				</div>
				<Button variant="secondary">Pruebas</Button>
			</form>
			<p>
				Already an account? <Link to="/login">Login</Link>
			</p>
		</div>
	);
}
