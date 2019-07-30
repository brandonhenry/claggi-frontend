import {SET_AUTH} from "../constants/types";

const initialState = {
    authenticated: true
};

export default function(state = initialState, action) {
    switch(action.type){
        case SET_AUTH:
            return {
                ...state,
                authenticated: action.payload
            };
        default:
            return state;
    }
}