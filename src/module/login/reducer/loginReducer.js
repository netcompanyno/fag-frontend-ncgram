import { UPDATE_PASSWORD, UPDATE_USERNAME, LOG_IN_USER } from "../types/loginTypes";

const defaultState = {
    placeholder : 'kek'
};

const loginReducer = (state = defaultState, action) => {
    switch (action.type) {

        case UPDATE_USERNAME:
            return {
                ...state,
                username: action.payload.username
            };

        case UPDATE_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            };

        case LOG_IN_USER:
            return {
                ...state
            };

        default:
            return state;
    }
};

export default loginReducer;
