
function FilterReducer(state = 'SHOW_ALL', action) {
  switch(action.type) {
    case 'FILTER_SMARTPHONES':
      return action.filter;


    default:
      return state;
  }
}

export default FilterReducer;
