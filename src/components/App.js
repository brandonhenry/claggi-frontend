import React, {Component} from 'react';
import {withAuth} from '@okta/okta-react';
import {connect} from 'react-redux'
import Header from "./Header";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from "./MainView";
import {setAuth} from "../actions/viewActions";

class App extends Component {
    refreshAuth(){
        this.props.auth.isAuthenticated().then(isAuthenticated => {
            if (isAuthenticated !== this.props.authenticated) {
                setAuth(isAuthenticated);
            }
        });
    }

    constructor(props){
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div className='app'>
                <Header/>
                <MainView/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
   authenticated: state.authenticated
});

export default connect(mapStateToProps, null)(withAuth(App))
