import { combineReducers } from 'redux';
import booksReducer from './books';

const rootReducer = combineReducers({
  book:booksReducer,
});

export default rootReducer;