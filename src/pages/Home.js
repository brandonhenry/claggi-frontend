import React, {Component} from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';

import Header from './Header';
import {withAuth} from "@okta/okta-react";

export default withAuth(class is extends Component {
    constructor(props) {
        super(props);
        this.state = { authenticated: null };
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    async login() {
        // Redirect to '/' after login
        this.props.auth.login('/');
    }

    async logout() {
        // Redirect to '/' after logout
        this.props.auth.logout('/');
    }

    render() {
        return (
            <DocumentTitle title='My React App'>
                <div className='MasterPage'>
                    <Header />
                    { this.props.children }
                    {this.state.authenticated ?
                    <button onClick={ this.logout}>Logout</button> : <button onClick={this.login}>Login</button> };
                </div>
            </DocumentTitle>
        );
    }
})