import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render((
    <Provider store={store}>
      <App></App>
    </Provider>), document.getElementById('root'));
registerServiceWorker();
