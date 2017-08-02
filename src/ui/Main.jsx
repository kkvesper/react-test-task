import './Main.scss'

import React, { Component } from 'react';

import { NavBar } from './NavBar/NavBar.jsx';
import { Header } from './Header/Header.jsx';
import { Content } from './Content/Content.jsx';


export class Main extends Component {
    render() {
        return (
            <div className="main">
                <div className="side-part">
                    <div className="logo">
                        KKVESPER
                    </div>
                    <NavBar />
                </div>

                <div className="central-part">
                    <Header />
                    <Content />
                </div>
            </div>
        );
    }
}

