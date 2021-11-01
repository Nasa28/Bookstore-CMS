import * as actions from '../actions/constants';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return [
        ...state,
        {
          title: action.payload.title,
          category: action.payload.book.category,
        },
      ];
    case actions.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.book.id);
    default:
      return state;
  }
};

export default booksReducer;
