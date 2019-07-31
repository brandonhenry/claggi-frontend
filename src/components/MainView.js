import React, {Component} from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {DASHBOARD, HOME} from "../constants/views";
import AdminDashboard from "./AdminDashboard";
import Login from "./Login";

class MainView extends Component {
    render() {
        console.log(this);
        switch(this.props.view){
            case HOME:
                return <Login/>;
            case DASHBOARD:
                return <AdminDashboard/>;
            default:
                return <Login/>
        }
    }
}

MainView.propTypes = {
    view: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
    view: state.view.view
});

export default connect(mapStateToProps, null)(MainView)