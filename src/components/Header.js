import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react'
import AdminDashboard from "./AdminDashboard";

export default class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-static-top">
                <div className="container">
                    <div>
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/admin">Dashboard</Link></li>
                            <li><Route exact path="/" component={Login}/></li>
                            <li><SecureRoute exact path="/admin" component={AdminDashboard}/></li>
                            <li><SecureRoute exact path="/implicit/callback" component={ImplicitCallback}/></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}