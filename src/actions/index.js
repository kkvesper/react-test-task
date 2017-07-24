export const showEditor = () => ({ type: 'SHOW_EDITOR' });

export const hideEditor = () => ({ type: 'HIDE_EDITOR' });

export const edit = value => ({
  type: 'EDIT',
  value
});

export const setFavorite = value => ({
  type: 'SET_FAVORITE',
  value
});

export const setContact = (id, contact) => ({
  type: 'SET_CONTACT',
  id,
  contact
});

export const delContact = id => ({
  type: 'DEL_CONTACT',
  id
});

export const addFavorite = id => ({
  type: 'ADD_FAVORITE',
  id
});

export const delFavorite = id => ({
  type: 'DEL_FAVORITE',
  id
});

export const filterFavorites = () => ({
  type: 'FILTER_FAVORITES'
});

export const resetFilter = () => ({
  type: 'RESET_FILTER'
});
