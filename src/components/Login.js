import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withAuth} from '@okta/okta-react';
import {setAuth} from '../actions/viewActions'
import AdminDashboard from "./AdminDashboard";
import LoginForm from "./LoginForm";
import config from '../constants/config'

class Login extends Component {
    constructor(props) {
        super(props);
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.checkAuthentication();
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.props.authenticated) {
            setAuth(authenticated);
        }
    }

    async componentDidMount() {
        const authenticated = await this.props.auth.isAuthenticated();

        if (authenticated !== false){
            const user = await this.props.auth.getUser();
            console.log(user);
        } else {
            console.log("User is not authenticated!")
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

    onSuccess(res) {
        if (res.status === 'SUCCESS') {
            return this.props.auth.redirect({
                sessionToken: res.session.token
            });
        } else {
            // The user can be in another authentication state that requires further action.
            // For more information about these states, see:
            //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
        }
    }

    onError(err) {
        console.log('error logging in', err);
    }


    render(){
        return this.props.authenticated ? <AdminDashboard/> : <LoginForm baseUrl={config.baseUrl} onSuccess={this.onSuccess} onError={this.onError}/>
    }
}

const mapStateToProps = state => ({
    authenticated: state.view.authenticated
});

export default connect(mapStateToProps, null)(withAuth(Login))