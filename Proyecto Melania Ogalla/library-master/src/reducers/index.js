import { combineReducers } from 'redux';

import genres from './genres';
import authors from './authors';
import books from './books';

export default combineReducers({
  genres,
  authors,
  books
})
