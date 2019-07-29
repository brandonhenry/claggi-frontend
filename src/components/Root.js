import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';

class Root extends Component {
    render() {
        return (
            <Provider store={ store }>

            </Provider>
        )
    }
}