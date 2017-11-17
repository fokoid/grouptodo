import 'react-hot-loader/patch';
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './app.jsx';

const renderNew = Component => {
	render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('main')
	);
}

renderNew(App);

if (module.hot) {
	module.hot.accept('./app.jsx', () => {
		const NextApp = require('./app.jsx').default;
		renderNew(NextApp);
	});
}



