import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

const rootReducer = combineReducers({
  book: booksReducer,
  filter: filterReducer,
});

export default rootReducer;
