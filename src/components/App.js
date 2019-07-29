import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setHasError } from '../actions/windowActions';

import Header from './Header';
import LoginView from "./LoginView";

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header />
                <LoginView />
                { this.props.children }
            </div>
        );
    }
}

const mapStateToProps = state =>  ({
    hasError: state.window.hasError
});

export default connect(mapStateToProps, { setHasError })(App)
