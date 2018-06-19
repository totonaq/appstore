import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import AppStore from './AppStore';
import AppStoreApp from './reducers'

import 'semantic-ui-css/semantic.min.css';
import '@glidejs/glide/dist/css/glide.core.min.css'
import '@glidejs/glide/dist/css/glide.theme.min.css'

const store = createStore(
	AppStoreApp
)

ReactDOM.render(
	<Provider store={store}>
	  <AppStore />
  </Provider>,
	document.getElementById('root')
);

