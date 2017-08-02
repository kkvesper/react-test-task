import './Content.scss';
import React, { Component } from 'react';

import { ContactList } from './ContactList/ContactList.jsx';

export class Content extends Component {
    render() {
        return (
            <div className="content">

                <ContactList />
            </div>
        );
    }
}

