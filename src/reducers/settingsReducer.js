import {LOGIN} from "../constants/views";
import {SET_AUTH, SET_VIEW} from "../constants/types";

const initialState = {
    view: LOGIN,
    authenticated: false
};

export default function(state = initialState, action){
    console.log(action);
    switch(action.type){
        case SET_VIEW:
            return {
                ...state,
                view: action.payload
            };
        case SET_AUTH:
            return {
                ...state,
                authenticated: action.payload
            };
        default:
            return state;
    }
}