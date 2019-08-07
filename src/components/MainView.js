import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {DASHBOARD, SETTINGS} from "../constants/views";
import AdminDashboard from "./AdminDashboard";
import SettingsView from "./SettingsView";
import Login from "./Login";

function Display(props){
    switch(props.view){
        case DASHBOARD:
            return <AdminDashboard/>;
        case SETTINGS:
            return <SettingsView/>;
        default:
            return <AdminDashboard/>
    }
}

class MainView extends Component {
    render() {
        return this.props.authenticated ? <Display view={this.props.view}/> : <Login/>;
    }
}

MainView.propTypes = {
    view: PropTypes.string.isRequired,
    authenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
    view: state.view.view,
    authenticated: state.view.authenticated

});

export default connect(mapStateToProps, null)(MainView)