import React from 'react';
import PropTypes from 'prop-types';

import '../../app/app.scss';
import { Column, Row } from '../grid';
import { Button } from '../controls';
import { ContactSaveButton, ContactDeleteButton } from '../../containers';

class ContactEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.contact.name,
      phone: this.props.contact.phone,
      email: this.props.contact.email
    };
  }

  render = () => (
    <Column className="app">
      <Row>
        <Column className="contact-margin">
          <input
            className="typography label"
            placeholder="full name"
            value={this.state.name}
            onChange={(e) => { this.setState({ name: e.target.value }); }}
          />
        </Column>
        <Column className="contact-margin">
          <input
            className="typography label"
            placeholder="phone number"
            value={this.state.phone}
            onChange={(e) => { this.setState({ phone: e.target.value }); }}
          />
        </Column>
        <Column className="contact-margin">
          <input
            className="typography label"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => { this.setState({ email: e.target.value }); }}
          />
        </Column>
        <Button onClick={() => { this.props.close(); }} label={'Cancel'} />
        <ContactSaveButton
          contact={{
            id: this.props.contact.id,
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
          }}
          onClick={() => { this.props.close(); }}
        />
        {this.props.contact.id > -1
          ? <ContactDeleteButton
            id={this.props.contact.id}
            onClick={() => { this.props.close(); }}
          />
          : null
        }
      </Row>
    </Column>
  )
}

ContactEdit.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string }).isRequired,
  close: PropTypes.func.isRequired
};

export default ContactEdit;
