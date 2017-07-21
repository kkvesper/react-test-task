import { connect } from 'react-redux';

import { deleteFavourite } from '../actions/contact';
import Button from '../components/controls/button';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => {
    dispatch(deleteFavourite(props.id));
  },
  label: 'Unfavourite'
});

const ContactUnfavouriteButton = connect(
  null,
  mapDispatchToProps
)(Button);

export default ContactUnfavouriteButton;
