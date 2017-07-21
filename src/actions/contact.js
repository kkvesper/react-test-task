import * as types from './types';

export const addContact = (name, phone, email) => ({
  type: types.ADD_CONTACT,
  name,
  phone,
  email
});

export const deleteContact = id => ({
  type: types.DELETE_CONTACT,
  id
});

export const saveContact = (id, name, phone, email) => ({
  type: types.SAVE_CONTACT,
  id,
  name,
  phone,
  email
});

export const addFavourite = id => ({
  type: types.ADD_FAVOURITE,
  id
});

export const deleteFavourite = id => ({
  type: types.DELETE_FAVOURITE,
  id
});
