import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";

class Footer extends Component {
    render() {
        return (
            <Navbar expand="lg" fixed="bottom">
                <Navbar.Text className="text-center mx-auto"> © 2019 Claggi </Navbar.Text>
            </Navbar>
        )
    }
}

export default Footer