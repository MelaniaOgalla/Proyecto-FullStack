import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';

import libraryApp from './reducers';
import AppStructure from './components/AppStructure';
import './index.css';


function configureStore(rootReducer, preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware,
      logger
    )
  )
}

ReactDOM.render(
  <Provider store={configureStore(libraryApp)}>
    <AppStructure />
  </Provider>,
  document.getElementById('root')
);
