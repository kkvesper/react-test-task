import './Content.scss';
import React, { Component } from 'react';

import { ContactList } from './ContactList/ContactList.jsx';
import { EditContact } from './EditContact/EditContact.jsx';
import { NewContact } from './NewContact/NewContact.jsx';

import { getContactFromIndex } from '../../client/contacts/manage-contacts.js';

export class Content extends Component {

    getMainContent(){
        switch (getCurrentPage()) {
            case "home":
                return <ContactList />;
            case "contact-list":
                return <ContactList />;
            case "add-new-contact":
                return <NewContact />;
            case "edit-contact":
                return <EditContact contact={ getContactFromIndex(getCurrentlyViewedContact()) } index={ getCurrentlyViewedContact() }/>;
        }
    }
    render() {
        return (
            <div className="content">

                { this.getMainContent() }
            </div>
        );
    }
}

