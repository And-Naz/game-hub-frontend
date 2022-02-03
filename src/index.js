import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "objectFitPolyfill" /* Can't do dynamic import becouse that based on Promise and in IE 11 Promise isn't available */

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
