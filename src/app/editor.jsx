import React from 'react';
import { connect } from 'react-redux';
import { Label, Button } from '../components';
import {
  hideEditor, edit,
  setContact, addFavorite,
  delFavorite
} from '../actions';

const ContactEditor = ({ value, show, dispatch }) => {
  if (!show) { return null; }

  const onSaveClick = () => {
    dispatch(setContact(value.id, {
      name: value.name,
      phone: value.phone,
      email: value.email
    }));
    dispatch(hideEditor());

    if (value.isFavorite) {
      dispatch(addFavorite(value.id));
    } else {
      dispatch(delFavorite(value.id));
    }
  };

  return (<form onSubmit={(e) => {
    e.preventDefault()
    onSaveClick()
  }}><table>
    <tbody>
      <tr>
        <td>
          <Label htmlFor="name">Name</Label>
        </td>
        <td>
          <input
            id="name"
            value={value.name}
            onChange={(el) => {
              value.name = el.target.value;
              dispatch(edit({ ...value }));
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Label htmlFor="phone" value={value.phone}>
                        Phone
          </Label>
        </td>
        <td>
          <input
            id="phone"
            type="tel"
            value={value.phone}
            onChange={(el) => {
              value.phone = el.target.value;
              dispatch(edit({ ...value }));
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Label htmlFor="email">
                        Email
          </Label>
        </td>
        <td>
          <input
            id="email"
            type="email"
            value={value.email}
            onChange={(el) => {
              value.email = el.target.value;
              dispatch(edit({ ...value }));
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <Label htmlFor="favorite">
                        Favorite
          </Label>
        </td>
        <td>
          <input
            id="favorite"
            type="checkbox"
            checked={value.isFavorite}
            onChange={(el) => {
              value.isFavorite = el.target.checked;
              dispatch(edit({ ...value }));
            }}
          />
        </td>
      </tr>
      <tr>
        <td>
          <input label="Save" type='submit' />
        </td>
      </tr>
    </tbody>
  </table></form>);
};

export default connect(state => ({
  show: state.editor.get('show'),
  value: state.editor.get('value')
}))(ContactEditor);
