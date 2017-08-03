import './NewContact.scss';
import React, { Component } from 'react';

import { addNewContact } from '../../../client/contacts/manage-contacts.js';
import { ContactForm } from '../../Contact/ContactForm.jsx';
import { goToContactList } from '../../../client/router/change-page.js';

export class NewContact extends Component {
    submitFunc(savedContact) {
        addNewContact(savedContact)
        goToContactList();
        console.log('toto');
    }

    render() {
        return (
            <div className="edit-contact main-page">
                <h1>
                    Add New Contact
                </h1>
                <div className="body">

                    <ContactForm firstName={ "" } lastName={ "" } email={ "" } phone={ "" }
                        submitFunc={ (savedContact) => this.submitFunc(savedContact) } />

                </div>
            </div>
        );
    }
}


