import Cookies from 'universal-cookie';

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SAVE_CONTACT,
  ADD_FAVOURITE,
  DELETE_FAVOURITE
} from '../actions/types';

const cookies = new Cookies();
const initialState = {
  contacts: cookies.get('contacts') ? cookies.get('contacts') : []
};

const contact = (state = initialState, action) => {
  let contacts = [];
  switch (action.type) {
    case ADD_CONTACT:
      contacts = [
        ...state.contacts,
        {
          id: state.contacts.length === 0 ? 0 : state.contacts[state.contacts.length - 1].id + 1,
          name: action.name,
          phone: action.phone,
          email: action.email,
          favourite: false
        }
      ];
      cookies.set('contacts', contacts);
      return {
        ...state, contacts
      };
    case DELETE_CONTACT:
      contacts = Object.values(Object.assign({}, state.contacts));
      if (contacts.findIndex(element => (element.id === action.id)) > -1) {
        contacts.splice(contacts.findIndex(element => (element.id === action.id)), 1);
        cookies.set('contacts', contacts);
        return {
          ...state,
          contacts
        };
      }
      return state;
    case SAVE_CONTACT:
      contacts = state.contacts.map((element) => {
        if (element.id === action.id) {
          return {
            id: action.id,
            name: action.name,
            phone: action.phone,
            email: action.email,
            favourite: element.favourite
          };
        }
        return element;
      });
      cookies.set('contacts', contacts);
      return {
        ...state,
        contacts
      };
    case ADD_FAVOURITE:
      contacts = state.contacts.map((element) => {
        if (element.id === action.id) {
          return { ...element, favourite: true };
        }
        return element;
      });
      cookies.set('contacts', contacts);
      return {
        ...state,
        contacts
      };
    case DELETE_FAVOURITE:
      contacts = state.contacts.map((element) => {
        if (element.id === action.id) {
          return { ...element, favourite: false };
        }
        return element;
      });
      cookies.set('contacts', contacts);
      return {
        ...state,
        contacts
      };
    default:
      return state;
  }
};

export default contact;
