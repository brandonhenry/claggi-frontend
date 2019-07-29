import { combineReducers } from 'redux'
import windowReducer from './windowReducer'

export default combineReducers({
    window: windowReducer
})