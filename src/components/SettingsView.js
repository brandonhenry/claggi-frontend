import {Component} from "react";
import React from "react";
import connect from "react-redux/es/connect/connect";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {connectAccount} from "../actions/settingsAction";

class SettingsView extends Component {
    render() {
        return (
            <div>
                <p>Welcome to the settings page</p>
                <Form>
                    <Button onClick={()=>{connectAccount()}}>Connect eBay Account</Button>
                </Form>
            </div>
        )
    }
}

export default connect(null, null)(SettingsView)