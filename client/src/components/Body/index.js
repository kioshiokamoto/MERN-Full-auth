import { Link, Route, Switch } from 'react-router-dom';
import Login from './auth/Login';
export default function Body() {
	return (
		<section>
			<Switch>
				<Route path="/login" component={Login} exact />
			</Switch>
		</section>
	);
}
