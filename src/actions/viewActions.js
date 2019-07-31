import {SET_AUTH, SET_VIEW} from "../constants/types";

export const setView = view => dispatch => {
    dispatch({
        type: SET_VIEW,
        payload: view
    })
}

export const setAuth = auth => dispatch => {
    console.log("setting auth")
    dispatch({
        type: SET_AUTH,
        payload: auth
    })
};