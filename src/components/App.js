import React, {Component} from 'react';
import Header from "./Header";
import Login from "./Login";
import Footer from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Header/>
                <Login/>
                <Footer/>
            </div>
        );
    }
}

export default App
