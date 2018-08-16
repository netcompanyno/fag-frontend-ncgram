import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'whatwg-fetch';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render((
                    <Provider store={store}>
                        <Router>
                            <div>
                                <Route exact path="/" component={App} />
                                <Route exact path="/test" component={App} />
                            </div>
                        </Router>
                    </Provider>
                ), document.getElementById('root'));
registerServiceWorker();

