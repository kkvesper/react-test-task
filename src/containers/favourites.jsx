import { connect } from 'react-redux';
import ContactList from '../components/controls/contact-list';

const mapStateToProps = state => ({
  defaultText: 'FAVOURITE CONTACTS',
  defaultEmptyText: "You don't have any favourite contacts.",
  contacts: state.Contact.contacts.filter(element => (element.favourite))
});

const Favourites = connect(
  mapStateToProps,
  null
)(ContactList);

export default Favourites;
