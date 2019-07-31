import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {DASHBOARD, LOGIN} from "../constants/views";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";

function Display(props){
    switch(props.view){
        case DASHBOARD:
            return <AdminDashboard/>;
        default:
            return <AdminDashboard/>
    }
}

class MainView extends Component {
    render() {
        {
            return this.props.authenticated ? <Display view={this.props.view}/> : <Login/>;
        }

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