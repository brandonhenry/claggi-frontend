import { createStore, applyMiddleware, compose } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import thunk from 'redux-thunk'
import {HOME} from "./constants/views";
import appReducer from './reducers'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const initialState = {
    view: HOME
}

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

const pReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(pReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
export const persistor = persistStore(store);