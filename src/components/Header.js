import React, { Component } from 'react';
import { withAuth } from '@okta/okta-react'
import {connect} from 'react-redux'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/es/FormControl";
import Button from "react-bootstrap/Button";
import {setView} from '../actions/viewActions'
import {DASHBOARD, LOGIN} from "../constants/views";
import {store} from '../store'

class Header extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Claggi Ebay Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                            {
                                !this.props.authenticated ?
                                    <>
                                    <Nav.Link onClick={() => { setView(LOGIN)(store.dispatch, store.getState) } }>Login</Nav.Link>
                                    <Nav.Link>Register</Nav.Link>
                                    </>
                                    :
                                    <>
                                    <Nav.Link onClick={() => { setView(DASHBOARD)(store.dispatch, store.getState) }}>Dashboard</Nav.Link>
                                    <Nav.Link>Listings</Nav.Link>
                                    <Nav.Link>Orders</Nav.Link>
                                    <Nav.Link>Settings</Nav.Link>
                                    <Nav.Link onClick={() => { this.props.auth.logout('/')} }>Logout</Nav.Link>
                                    </>
                            }
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

const mapStateToProps = state => ({
    authenticated: state.view.authenticated
});

export default connect(mapStateToProps, null)(withAuth(Header))