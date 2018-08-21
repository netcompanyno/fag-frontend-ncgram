import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import freeze from 'redux-freeze';
import { composeWithDevTools } from 'redux-devtools-extension';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { rootReducer } from './reducers';

const configureStore = (history) => {
    const middleware = [ thunk, routerMiddleware(history)  ];
    return createStore(
        connectRouter(history)(rootReducer),
        composeWithDevTools(
            applyMiddleware(...middleware)),
    );
};

export default configureStore;
