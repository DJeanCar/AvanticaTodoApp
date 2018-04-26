import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Layout from './components/Layout/Layout';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';
import todoApp from './reducers';

const store = createStore(
  todoApp,
  applyMiddleware(
    promise(),
    thunkMiddleware,
    createLogger(),
  )
);

ReactDom.render(
  <Provider store={ store }>
    <Layout />
  </Provider>,
  document.getElementById('app')
);
