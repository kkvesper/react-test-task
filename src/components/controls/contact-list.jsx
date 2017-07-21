import React from 'react';
import PropTypes from 'prop-types';

import '../../app/app.scss';
import Contact from './contact';
import { Column, Row } from '../grid';

const ContactList = ({ contacts, defaultText, defaultEmptyText }) => (
  <Row className="app">
    {
      contacts.length > 0
        ? <Column className="app">
          <Row>{defaultText}</Row>
          {contacts.map(contact => (
            <Contact key={contact.id} contact={contact} />
          ))}
        </Column>
        : defaultEmptyText
    }
  </Row>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    favourite: PropTypes.bool
  })).isRequired,
  defaultText: PropTypes.string.isRequired,
  defaultEmptyText: PropTypes.string.isRequired
};

export default ContactList;
