import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from "history";
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import './index.scss';

const history = createBrowserHistory();
const store = configureStore(history);

ReactDOM.render((<Provider store={store}>
                        <App history={history} />
                    </Provider>), document.getElementById('root'));
registerServiceWorker();
