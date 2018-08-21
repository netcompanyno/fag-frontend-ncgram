import Cookies from "js-cookie";
import { push } from 'connected-react-router'
import { START_LOGIN, UPDATE_PASSWORD, UPDATE_USERNAME } from "../types/loginTypes";
import { fetchMessagesData } from "../../feed/actions/feedAction";

export const startLogin = (username, password) => {

    return (dispatch, getState) => {
        dispatch(
            {
                type : START_LOGIN,
                payload : {
                    username : username,
                    password : password
                }
            })
    }
};

export const updateUsername = (username) =>
    ({
        type : UPDATE_USERNAME,
        payload : {
            username : username
        }
    });

export const updatePassword = (password) =>
    ({
        type : UPDATE_PASSWORD,
        payload : {
            password : password
        }
    });

export const loginUser = () => {
    return (dispatch, getState) => {
        Cookies.set('username', getState().loginReducer.username, { expires : inFifteenMinutes });

        // sett cookie med brukernavn.
        // Sjekk cookie ved pageload om cookie eksisterer.
        // er det ikke satt, sett ny cookie.
        // redirect til feed

        dispatch(push('/feed'));
        dispatch(fetchMessagesData());

    }

};


// UTILS

const inFifteenMinutes = new Date(new Date().getTime() + 2 * 60 * 1000);
