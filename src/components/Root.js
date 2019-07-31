import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App'
import { Security, ImplicitCallback } from '@okta/okta-react';
import config from '../constants/config'

class Root extends Component {
    render() {
        return (
          <BrowserRouter>
              <Provider store={ store }>
                  <PersistGate loading={ <div> Loading...</div> } persistor={ persistor }>
                      <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
                        <Route path='/implicit/callback' component={ImplicitCallback}/>
                        <App/>
                      </Security>
                  </PersistGate>
              </Provider>
          </BrowserRouter>
        );
    }
}

export default Root