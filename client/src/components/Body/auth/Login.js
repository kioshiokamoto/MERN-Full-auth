import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { dispatchLogin } from '../../../redux/actions/authAction';
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification';
import GoogleLogin from 'react-google-login';

const initialState = {
	email: '',
	password: '',
	err: '',
	success: '',
};
export default function Login({ history }) {
	const [user, setUser] = useState(initialState);
	const { email, password, err, success } = user;
	const dispatch = useDispatch();

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
		try {
			const res = await axios.post('/user/login', { email, password });
			setUser({
				...user,
				success: res.data.msg,
			});

			localStorage.setItem('firstLogin', true);
			dispatch(dispatchLogin());
			history.push('/');
		} catch (error) {
			error.response.data.msg &&
				setUser({
					...user,
					success: '',
					err: error.response.data.msg,
				});
		}
	};
	const responseGoogle = async (response) => {
		try {
			const res = await axios.post('/user/google_login', { tokenId: response.tokenId });
			setUser({ ...user, err: '', success: res.data.msg });

			localStorage.setItem('firstLogin', true);
			dispatch(dispatchLogin());
			history.push('/');
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
			<h2>Login</h2>
			{err && showErrMsg(err)}
			{success && showSuccessMsg(success)}
			<form onSubmit={handleSubmit}>
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
				<div className="row">
					<button type="submit">Login</button>
					<Link to="/forgot_password">Forgot your password?</Link>
				</div>
			</form>
			<div className="hr">Or login with</div>
			<div className="social">
				<GoogleLogin
					clientId="84442092858-5a91oi01ip9pb0cri1qlt5r5mh6d16bl.apps.googleusercontent.com"
					buttonText="Login with google"
					onSuccess={responseGoogle}
					onFailure={responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
			<p>
				Does not have an account? <Link to="/register">Register</Link>
			</p>
		</div>
	);
}
