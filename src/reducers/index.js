import { combineReducers } from 'redux'
import viewReducer from "./viewReducer";
import settingsReducer from "./settingsReducer";

export default combineReducers({
    view: viewReducer,
    settings: settingsReducer
})