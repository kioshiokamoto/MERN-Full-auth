import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<header>
			<div className="logo">
				<h1>
					<Link to="/">Kioshi O.</Link>
				</h1>
			</div>
			<ul>
				<li>
					<Link to="/">
						<i className="fas fa-shopping-cart"></i>Cart
					</Link>
				</li>
				<li>
					<Link to="/login">
						<i className="fas fa-user"></i>Sign in
					</Link>
				</li>
			</ul>
		</header>
	);
}
