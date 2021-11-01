import * as actions from './constants';

export const CREATE_BOOK = (book) => {
  return {
    type: actions.CREATE_BOOK,
    payload: {
      book,
    },
  };
};

export const REMOVE_BOOK = (book) => {
  return {
    type: actions.REMOVE_BOOK,
    payload: {
      book,
    },
  };
};
