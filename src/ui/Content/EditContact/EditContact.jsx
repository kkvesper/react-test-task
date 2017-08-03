import './EditContact.scss';
import React, { Component } from 'react';

import { removeContact, getContactFromIndex, editContact } from '../../../client/contacts/manage-contacts.js';
import { ContactForm } from '../../Contact/ContactForm.jsx';
import { goToContactList } from '../../../client/router/change-page.js';

export class EditContact extends Component {
    submitFunc(savedContact) {
        editContact(this.props.index, savedContact);
        goToContactList();
    }
    render() {
        return (
            <div className="edit-contact main-page">
                <h1>
                    { this.props.contact.firstName + ' ' + this.props.contact.lastName }
                </h1>
                <div className="body">

                    <ContactForm firstName={ this.props.contact.firstName } lastName={ this.props.contact.lastName }
                        email={ this.props.contact.email } phone={ this.props.contact.phone }
                        submitFunc={ (savedContact) => this.submitFunc(savedContact) } />
                </div>
            </div>
        );
    }
}


