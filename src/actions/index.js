import * as actions from './constants';

export const createBook = (title, category) => ({
  type: actions.CREATE_BOOK,
  payload: {
    id: Math.floor(Math.random() * 101),
    title,
    category,
  },
});

export const removeBook = (id) => ({
  type: actions.REMOVE_BOOK,
  payload: {
    id,
  },
});

export const changeFilter = (filter) => ({
  type: actions.CHANGE_FILTER,
  payload: {
    filter,
  },
});
