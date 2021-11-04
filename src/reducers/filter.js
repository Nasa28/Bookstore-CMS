import * as actions from '../actions/constants';

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case actions.CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
