import { useEffect } from 'react';

export default function NotFound({ history }) {
	useEffect(() => {
		setTimeout(() => {
			history.push('/');
		}, 2000);
	}, [history]);
	return (
		<div>
			<h1>404 | NOT FOUND</h1>
			<h1>Will be redirected...</h1>
		</div>
	);
}
