import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Body from './components/Body';
import Header from './components/Header';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Body />
			</div>
		</Router>
	);
}

export default App;
