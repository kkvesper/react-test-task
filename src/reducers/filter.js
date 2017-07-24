
export default (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'FILTER_FAVORITES':
      state = 'FAVORITES_ONLY';
      break;

    case 'RESET_FILTER':
      state = 'SHOW_ALL';
      break;
  }

  return state;
};
