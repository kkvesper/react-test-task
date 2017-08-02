import './ContactListItem.scss';
import React, { Component } from 'react';

export class ContactListItem extends Component {
    render() {
        return (
          <tr>
            <td> { this.props.fullName } </td>
            <td> { this.props.email } </td>
            <td> { this.props.phone } </td>
            <td className="clickable-block" onClick={ () => { console.log('Editing: ' + this.props.index); } }>
                <b> <i className="fa fa-pencil-square-o" aria-hidden="true"></i> Edit </b>
            </td>
            <td className="clickable-block" onClick={ () => { console.log('deleting: ' + this.props.index); } }>
                <b> <i className="fa fa-times" aria-hidden="true"></i> Remove </b>
            </td>
          </tr>
        );
    }
}

