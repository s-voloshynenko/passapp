import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Root from './containers/root';
import configureStore from './store';
import './assets/styles/main.sass';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
);

