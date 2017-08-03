import './ContactList.scss';
import React, { Component } from 'react';

import { ContactListItem } from './ContactListItem/ContactListItem.jsx';

export class ContactList extends Component {
    getListItems() {
        return getState()['contactList'];
    }

    render() {
        return (
            <div className="contact-list main-page">
                <h1>
                    Contact List
                </h1>
                <div className="body">
                    <table>
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.getListItems().map((contact, index) => (
                              <ContactListItem fullName={ contact.firstName + ' ' + contact.lastName } email={ contact.email }
                                phone={ contact.phone } index={ index } isFavorite={ contact.isFavorite } key={ index }/>
                            )) }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


