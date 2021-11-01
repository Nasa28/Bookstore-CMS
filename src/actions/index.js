import * as actions from './constants';

export const CREATE_BOOK = (book) => ({
  type: actions.CREATE_BOOK,
  payload: {
    book,
  },
});

export const REMOVE_BOOK = (book) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    book,
  },
});
