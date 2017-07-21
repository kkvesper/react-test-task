import { connect } from 'react-redux';

import { deleteContact } from '../actions/contact';
import Button from '../components/controls/button';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(deleteContact(props.id));
    props.onClick();
  },
  label: 'Delete'
});

const ContactDeleteButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default ContactDeleteButton;
