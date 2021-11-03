import * as actions from '../actions/constants';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 101),
      title: 'Harry Potter',
      category: 'Action',
    },
    {
      id: Math.floor(Math.random() * 101),
      title: 'Steve Jobs',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 101),
      title: 'The Guns of August',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 101),
      title: 'Ghost story',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 101),
      title: 'Goodnight moon',
      category: 'Kids',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BOOK:
      return {
        books: [...state.books, action.payload],
      };
    case actions.REMOVE_BOOK:
      return {
        books: state['books'].filter((book) => book.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default booksReducer;
