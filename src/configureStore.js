import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import freeze from 'redux-freeze';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';

export default function configureStore() {
    const middleware = [thunk, freeze];
    return createStore(
        rootReducer,
          composeWithDevTools(
          applyMiddleware(...middleware)),
    );
}
