import { combineReducers } from 'redux';
import contacts from './contacts';
import favorites from './favorites';
import editor from './editor';
import filter from './filter';

export default combineReducers({
  contacts,
  favorites,
  editor,
  filter
});
