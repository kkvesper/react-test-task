import './app.scss';

import React, { Component } from 'react';

import { setup } from '../client/setup.js';
import { Main } from '../ui/Main.jsx';

var app = null;

export const getApp = () => {
    return app;
}

export class App extends Component {
    componentWillMount(){
        app = this;

        this.setState({});
    }
    componentDidMount(){
        setup();
        this.setState({isAppMounted: true});
    }
    render() {
        return ( this.state.isAppMounted == false ?
            <div className="not-mounted">
                not mounted bro
            </div>
        :
            <Main />
        );
    }
}