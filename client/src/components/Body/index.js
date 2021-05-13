import { Route, Switch } from 'react-router-dom';
import ActivationEmail from './auth/ActivationEmail';
import Login from './auth/Login';
import Register from './auth/Register';
import { useSelector } from 'react-redux';
import NotFound from '../utils/NotFound/NotFound';
import ForgotPassword from './auth/ForgotPassword';
import ResetPassword from './auth/ResetPassword';
import Profile from './profile/Profile';
import EditUser from './profile/EditUser';
import Home from './home/Home';
export default function Body() {
	const auth = useSelector((state) => state.auth);
	const { isLogged } = auth;
	return (
		<section>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/login" component={isLogged ? NotFound : Login} exact />
				<Route path="/register" component={isLogged ? NotFound : Register} exact />
				<Route path="/forgot_password" component={isLogged ? NotFound : ForgotPassword} exact />
				<Route path="/user/reset/:token" component={isLogged ? NotFound : ResetPassword} exact />

				<Route path="/user/activate/:activation_token" component={ActivationEmail} exact />

				<Route path="/profile" component={isLogged ? Profile : NotFound} exact />
				<Route path="/edit_user/:id" component={isLogged ? EditUser : NotFound} exact />
			</Switch>
		</section>
	);
}
