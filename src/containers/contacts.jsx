import { connect } from 'react-redux';
import ContactList from '../components/controls/contact-list';

const mapStateToProps = state => ({
  defaultText: 'CONTACTS',
  defaultEmptyText: "You don't have any contact. Please click 'Add Contact' button to add contact.",
  contacts: state.Contact.contacts
});

const Contacts = connect(
  mapStateToProps,
  null
)(ContactList);

export default Contacts;
