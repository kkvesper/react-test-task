import { connect } from 'react-redux';

import { saveContact, addContact } from '../actions/contact';
import Button from '../components/controls/button';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    if (props.contact.id < 0) {
      dispatch(addContact(props.contact.name, props.contact.phone, props.contact.email));
    } else {
      dispatch(saveContact(props.contact.id, props.contact.name, props.contact.phone, props.contact.email));
    }
    props.onClick();
  },
  label: 'Save Contact'
});

const ContactSaveButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default ContactSaveButton;
