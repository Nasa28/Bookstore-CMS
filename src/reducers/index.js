import booksReducer from "./books";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  book: booksReducer
})

export default rootReducer