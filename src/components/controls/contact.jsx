import React from 'react';
import PropTypes from 'prop-types';

import { Button, ContactEdit, Modal } from '../controls';
import { ContactFavouriteButton, ContactUnfavouriteButton } from '../../containers';
import '../../app/app.scss';
import { Column, Row } from '../grid';
import { Label } from '../typography';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editModalVisible: false
    };
  }

  render = () => (
    <Row>
      <Column className="contact-margin name-width"><Label>{this.props.contact.name}</Label></Column>
      <Column className="contact-margin phone-width"><Label>{this.props.contact.phone}</Label></Column>
      <Column className="contact-margin email-width"><Label>{this.props.contact.email}</Label></Column>
      <Button onClick={() => { this.setState({ editModalVisible: true }); }} label={'Edit'} />
      {
        this.props.contact.favourite
          ? <ContactUnfavouriteButton id={this.props.contact.id} />
          : <ContactFavouriteButton id={this.props.contact.id} />
      }
      <Modal
        className="contact-edit-modal"
        onClickOverlay={() => { this.setState({ editModalVisible: false }); }}
        visible={this.state.editModalVisible}
      >
        <ContactEdit
          close={() => { this.setState({ editModalVisible: false }); }}
          contact={this.props.contact}
        />
      </Modal>
    </Row>
  )
}

Contact.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    favourite: PropTypes.bool
  }).isRequired
};

export default Contact;
