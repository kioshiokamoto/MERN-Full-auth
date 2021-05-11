import { Route, Switch } from 'react-router-dom';
import ActivationEmail from './auth/ActivationEmail';
import Login from './auth/Login';
import Register from './auth/Register';
export default function Body() {
	return (
		<section>
			<Switch>
				<Route path="/login" component={Login} exact />
				<Route path="/register" component={Register} exact />
				<Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
			</Switch>
		</section>
	);
}
