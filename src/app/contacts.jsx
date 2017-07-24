import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import { Row, Button } from '../components';
import {
  showEditor, delContact,
  filterFavorites, resetFilter, edit
} from '../actions';
import './contacts.less';


const Contacts = ({ show, filter, contacts, dispatch }) => {
  if (show) { return null; }

  const onAddClick = () => {
    dispatch(showEditor());
    dispatch(edit({
      id: uuid()
    }));
  };

  const onToggleFilerClick = () => {
    if (filter === 'SHOW_ALL') {
      dispatch(filterFavorites());
    } else {
      dispatch(resetFilter());
    }
  };

  return (<div className="contacts">
    <Row><Button className="add-contact" label="Add Contact" onClick={onAddClick} /></Row>

    <table>
      <tbody>
        <tr>
          <th>
            <Button
              label={filter === 'SHOW_ALL' ? 'Filter Favorites' : 'Show All'}
              onClick={() => onToggleFilerClick()}
            />
          </th>
          <th>Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Operations</th>
        </tr>
        {contacts.map(el => (<tr key={el.id}>
          <td className="favorite">
            {el.isFavorite ? '★' : '☆' }
          </td>
          <td>{el.name}</td>
          <td>{el.phone}</td>
          <td>{el.email}</td>
          <td>
            <Button
              label="Edit"
              onClick={() => {
                dispatch(showEditor());
                dispatch(edit(el));
              }}
            />

            {' '}

            <Button
              label="Del"
              onClick={() => {
                dispatch(delContact(el.id));
              }}
            />
          </td>
        </tr>))}
      </tbody>
    </table>
  </div>);
};


export default connect(state => ({
  show: state.editor.get('show'),
  filter: state.filter,
  contacts: state.contacts.map((val, id) => ({
    id,
    isFavorite: state.favorites.has(id),
    ...val
  })).filter((val, id) => {
    if (state.filter === 'FAVORITES_ONLY') { return state.favorites.has(id); }
    return true;
  }).toArray()
}))(Contacts);
