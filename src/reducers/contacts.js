import { Map } from 'immutable';

const initState = Map(JSON.parse(localStorage.contacts || 'null'));

export default (state = initState, action) => {
  switch (action.type) {
    case 'SET_CONTACT':
      state = state.set(action.id, action.contact);
      break;

    case 'DEL_CONTACT':
      state = state.delete(action.id);
      break;
  }

  localStorage.contacts = JSON.stringify(state.toJS());

  return state;
};
