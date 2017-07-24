import { Map } from 'immutable';

const initState = Map();

export default (state = initState, action) => {
  switch (action.type) {
    case 'SHOW_EDITOR':
      state = state.set('show', true);
      break;

    case 'HIDE_EDITOR':
      state = state.set('show', false);
      break;

    case 'EDIT':
      state = state.set('value', {
        id: null,
        isFavorite: false,
        name: '',
        phone: '',
        email: '',
        ...action.value
      });
      break;
  }

  return state;
};
