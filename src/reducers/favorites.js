import { Set } from 'immutable';

const initState = Set(JSON.parse(localStorage.favorites || 'null'));

// favorite list is separated from the contracts,
// so that the disk IO operations are reduced.
export default (state = initState, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      state = state.add(action.id);
      break;

    case 'DEL_FAVORITE':
      state = state.delete(action.id);
      break;
  }

  localStorage.favorites = JSON.stringify(state.toJS());
  return state;
};
