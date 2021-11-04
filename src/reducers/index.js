import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  book: booksReducer,
  filter: filterReducer,
});

export default rootReducer;
