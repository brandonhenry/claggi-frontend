import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { Router, Route, browserHistory } from 'react-router';
import { Security, ImplicitCallback } from '@okta/okta-react';

const clientId = "0oa1047vvhR9PytaF357";
const oktaDomain = "https://dev-499390.okta.com";

const config = {
    issuer: `${oktaDomain}/oauth2/default`,
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: clientId
};

class Root extends Component {
    render() {
        return (
            <Provider store={ store }>
                <PersistGate loading={ <div> Loading...</div> } persistor={ persistor }>
                    <Router history={browserHistory}>
                        <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
                            <Route path='/' component={ App }> </Route>
                            <Route path='/implicit/callback' component={ImplicitCallback}/>
                        </Security>
                    </Router>
                </PersistGate>
            </Provider>
        )
    }
}

export default Root