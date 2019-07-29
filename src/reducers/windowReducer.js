
import { SET_HAS_ERROR } from '../actions/types'

let initialState = {
    isMaximized: false,
    hasError: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_HAS_ERROR:
            return {
                ...state,
                hasError: action.payload
            }
        default:
            return state
    }
}