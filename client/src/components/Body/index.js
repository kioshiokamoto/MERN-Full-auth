import { Route, Switch } from 'react-router-dom';
import ActivationEmail from './auth/ActivationEmail';
import Login from './auth/Login';
import Register from './auth/Register';
import { useSelector } from 'react-redux';
import NotFound from '../utils/NotFound/NotFound';
export default function Body() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return (
		<section>
			<Switch>
				<Route path="/login" component={isLogged ? NotFound : Login} exact />
				<Route path="/register" component={isLogged ? NotFound : Register} exact />
				<Route path="/user/activate/:activation_token" component={ActivationEmail} exact />
			</Switch>
		</section>
	);
}
