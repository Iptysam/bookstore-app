import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import BookReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  books: BookReducer,
  category: categoryReducer,
});

const reduxstore = configureStore({ reducer: rootReducer });

export default reduxstore;
