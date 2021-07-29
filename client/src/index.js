import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import DataProvider from './redux/store';
import { ChakraProvider } from "@chakra-ui/react"
import {newTheme} from './theme'
ReactDOM.render(
	<ChakraProvider theme = {newTheme}>
		<DataProvider>
			<App />
		</DataProvider>
	</ChakraProvider>,
	document.getElementById('root')
);
