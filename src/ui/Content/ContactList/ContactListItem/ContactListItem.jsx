import './ContactListItem.scss';
import React, { Component } from 'react';

import { removeContact } from '../../../../client/contacts/manage-contacts.js';
import { goToEditContact } from '../../../../client/router/change-page.js';

export class ContactListItem extends Component {
    removeItem() {
        removeContact(this.props.index);
    }

    render() {
        return (
          <tr>
            <td> { this.props.fullName } </td>
            <td> { this.props.email } </td>
            <td> { this.props.phone } </td>
            <td className="clickable-block" onClick={ () => { goToEditContact(this.props.index); console.log('Editing: ' + this.props.index); } }>
                <b> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit </b>
            </td>
            <td className="clickable-block" onClick={ () => { this.removeItem(); } }>
                <b> <i className="fa fa-times" aria-hidden="true"></i> Remove </b>
            </td>
          </tr>
        );
    }
}

