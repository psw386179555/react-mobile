import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configStore from './store/configStore.js'
import RouteMap from './router/routeMap.js'
import registerServiceWorker from './registerServiceWorker';

const store = configStore()
ReactDOM.render(
	<Provider store={store}>
		<RouteMap/>
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
