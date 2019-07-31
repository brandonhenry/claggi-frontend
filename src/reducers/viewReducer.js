import {HOME} from "../constants/views";
import {SET_VIEW} from "../constants/types";

const initialState = {
    view: HOME
}

export default function(state = initialState, action){
    console.log(action)
    switch(action.type){
        case SET_VIEW:
            return {
                ...state,
                view: action.payload
            };
        default:
            return state;
    }
}