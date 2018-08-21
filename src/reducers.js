import { combineReducers } from 'redux';
import feedReducer from "./module/feed/reducer/feedReducer";
import loginReducer from "./module/login/reducer/loginReducer";

export const rootReducer = combineReducers({
    feedReducer,
    loginReducer,
});
