import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import HomePage from "./pages/Home";
import IndexPage from "./pages/IndexPage";
import { Security, ImplicitCallback } from '@okta/okta-react';

const clientId = "0oa1047vvhR9PytaF357";
const oktaDomain = "https://dev-499390.okta.com";

const config = {
    issuer: `${oktaDomain}/oauth2/default`,
    redirect_uri: window.location.origin + '/implicit/callback',
    client_id: clientId
};

ReactDOM.render(
<Router history={browserHistory}>
    <Security issuer={config.issuer} client_id={config.client_id} redirect_uri={config.redirect_uri}>
        <Route path='/' component={HomePage}><IndexRoute component={IndexPage} /></Route>
        <Route path='/implicit/callback' component={ImplicitCallback}/>
    </Security>
</Router>,
document.getElementById('app-container')
);