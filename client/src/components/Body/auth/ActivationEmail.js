import { useParams } from 'react-router-dom';
import { showErrMsg, showSuccessMsg } from '../../utils/notification/Notification';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ActivationEmail() {
	const { activation_token } = useParams();
	const [err, setErr] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
		if (activation_token) {
			const activationEmail = async () => {
				try {
					// eslint-disable-next-line
					const res = await axios.post('/user/activation', { activation_token });
					setSuccess(res.data.msg);
				} catch (error) {
					error.response.data.msg && setErr(error.response.data.msg);
				}
			};
			activationEmail();
		}
	}, [activation_token]);
	return (
		<div className="active_page">
			{err && showErrMsg(err)}
			{success && showSuccessMsg(success)}
		</div>
	);
}
