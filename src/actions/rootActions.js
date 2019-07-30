import {SET_AUTH} from "../constants/types";

export function setAuth(payload){
    return {type: SET_AUTH, payload: payload}
}