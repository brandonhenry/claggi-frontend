import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setAuth } from '../actions/rootActions';

import Header from './Header';
import LoginView from "./Login";
import AdminDashboard from "./AdminDashboard";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header />
                {this.props.auth ? <AdminDashboard/> : <LoginView />}
            </div>
        );
    }
}

const mapStateToProps = state =>  ({
    auth: state.authentication
});

export default connect(mapStateToProps, { setAuth })(App)
