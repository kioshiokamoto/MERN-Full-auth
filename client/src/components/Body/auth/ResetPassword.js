import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification';
import { isLength, isMatch } from '../../utils/validation/Validation';
const initialState = {
	password: '',
	cf_password: '',
	err: '',
	success: '',
};

function ResetPassword() {
	const [data, setData] = useState(initialState);
	const { token } = useParams();

	const { password, cf_password, err, success } = data;

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setData({ ...data, [name]: value, err: '', success: '' });
	};

	const handleResetPassword = async () => {
		if (isLength(password)) {
			return setData({
				...data,
				success: '',
				err: 'Password must be at least 6 characters',
			});
		}
		if (isMatch(password, cf_password)) {
			return setData({
				...data,
				success: '',
				err: 'Password dit not match',
			});
		}
		try {
			const res = await axios.post(
				'/user/reset',
				{ password },
				{
					headers: { Authorization: token },
				}
			);
			return setData({
				...data,
				success: res.data.msg,
				err: '',
			});
		} catch (error) {
			err.response.data.msg && setData({ ...data, err: err.response.data.msg, success: '' });
		}
	};

	return (
		<div className="fg_pass">
			<h2>Reset your password</h2>
			<div className="row">
				{err && showErrMsg(err)}
				{success && showSuccessMsg(success)}

				<label htmlFor="password">Password</label>
				<input type="password" name="password" id="password" value={password} onChange={handleInputChange} />

				<label htmlFor="cf_password">Confirm Password</label>
				<input
					type="password"
					name="cf_password"
					id="cf_password"
					value={cf_password}
					onChange={handleInputChange}
				/>

				<button onClick={handleResetPassword}>Reset password</button>
			</div>
		</div>
	);
}

export default ResetPassword;
