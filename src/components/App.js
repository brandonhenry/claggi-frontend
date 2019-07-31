import React, {Component} from 'react';
import {withAuth} from '@okta/okta-react';
import {connect} from 'react-redux'
import Header from "./Header";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from "./MainView";

class App extends Component {
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
