import { connect } from 'react-redux';

import { addFavourite } from '../actions/contact';
import Button from '../components/controls/button';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(addFavourite(props.id));
  },
  label: 'Favourite'
});

const ContactFavouriteButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default ContactFavouriteButton;
