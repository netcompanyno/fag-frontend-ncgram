import { combineReducers } from 'redux';
import eksempelReducer from "./module/eksempel-module/reducer/eksempelReducer";
import feedReducer from "./module/feed/reducer/feedReducer";

export const rootReducer = combineReducers({
    eksempelReducer,
    feedReducer
});
