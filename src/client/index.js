import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import { loadHeros, loadHero } from './actions'

const initialState = {
  heros: [],
  hero: {},
};

const store = configureStore(initialState);

store.dispatch(loadHeros());
// store.dispatch(loadHero());

console.log('mounting react app ...');  // eslint-disable-line no-console
render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('__TODO__')
);

