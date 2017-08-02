import './ContactList.scss';
import React, { Component } from 'react';

import { ContactListItem } from './ContactListItem/ContactListItem.jsx';

export class ContactList extends Component {
    render() {
        return (
            <div className="contact-list main-page">
                <h1>
                    Contact List
                </h1>
                <div className="body">
                    <table>
                        <tr>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th></th>
                            <th></th>
                        </tr>
                       <ContactListItem fullName={ "Peter Yoda" } email={ "alberto@toto.com" } phone={ "0181826161" } index={ 12 }/>
                       <ContactListItem />
                    </table>
                    { [0, 1, 2].map((a) => (
                        <div> {a + 10} </div>
                    )) }

                </div>
            </div>
        );
    }
}

