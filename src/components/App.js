import React, {Component} from 'react';
import {connect} from 'react-redux'
import Header from "./Header";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import MainView from "./MainView";

class App extends Component {
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

export default connect()(App)
