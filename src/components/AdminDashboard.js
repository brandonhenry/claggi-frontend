import React, {Component} from 'react';
import {connect} from 'react-redux';

class AdminDashboard extends Component{
    render(){
        return (
            <h1>Welcome to the Secure Admin Dashboard!</h1>
        )
    }
}

export default connect()(AdminDashboard)