import React, { Component } from 'react';

import { ContactListItem } from '../ContactList/ContactListItem/ContactListItem.jsx';

export class FavoriteList extends Component {
    getListItems() {
        return getState()['contactList'].map((contact, index) => {
            contact.index = index;
            return contact;
        }).filter((contact) => contact.isFavorite == true);
    }

    render() {
        return (
            <div className="contact-list favorite-list main-page">
                <h1>
                    My Favorites
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
                            { this.getListItems().map((contact) => (
                              <ContactListItem fullName={ contact.firstName + ' ' + contact.lastName } email={ contact.email }
                                phone={ contact.phone } index={ contact.index } noFavoriteIcon={ true } key={ contact.index }/>
                            )) }
                        </tbody>

                    </table>
                </div>
            </div>
        );
    }
}


